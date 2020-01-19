import React, {Component} from "react"
import Header from "../components/header.js"
import Container from '@material-ui/core/Container';
import Style from '../styles/searchPageStyle'
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import TitleCard from "../components/titleCard";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class SearchPage extends Component{

    render(){
    const {classes} = this.props;
    const { titles } = this.props;
        return (
            <Container className={ classes.appWrapper } maxWidth="xl" >
            <Header isSearchEnabled={true}/>
            <Grid className={classes.gridContainer}
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >
                {titles.map((title)=>
                    <Link to={`/title/${title.imdbID}`}
                          key={title.imdbID}
                          style={{ textDecoration: 'none' }}
                    >
                    <Grid item className = { classes.gridItem}>
                        <TitleCard titleDetails = {title}/>
                    </Grid>
                    </Link>
                )}
            </Grid>

            </Container>
        )
    }
}

const mapStateToProps= (state)=>({
    titles: state.searchResults
});

export default connect(mapStateToProps)(
    withStyles(Style)(SearchPage)
);
