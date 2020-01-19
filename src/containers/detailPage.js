import React, { Component } from "react";
import Header from "../components/header";
import Container from "@material-ui/core/Container/Container";
import connect from "react-redux/es/connect/connect";
import withStyles from "@material-ui/core/styles/withStyles";
import Style from "../styles/detailPageStyle";
import { withRouter } from "react-router-dom";
import { getTitleById, getImdbRating } from "../../data/DataAPI";
import titleDetails from "../reduxElements/actions/titleDetails";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import loadingImg from "../../public/img/loading.png"

class DetailPage extends Component {

    constructor(){
        super();
        this.state={
            isRedirectToHome : false
        }
    }

    async componentDidMount(){
        let isRedirectToHome = false;
        if(!this.props.titleDetails && this.props.match.params.imdbId){
            const imdbId = this.props.match.params.imdbId;
            const title = getTitleById(imdbId);
            if(title){
                title.imdbRating = await getImdbRating(imdbId);
                this.props.addTitleDetails(title);
            } else {
                isRedirectToHome = true;
            }
        }

        if(isRedirectToHome){
            this.setState({isRedirectToHome})
        }
    }

    render(){
        const { classes } = this.props;
        return (
            this.state.isRedirectToHome ? < Redirect to="/" /> :
                (<Container className={ classes.appWrapper } maxWidth="xl" >
                    <Header isSearchEnabled={false}/>
                    {this.props.titleDetails &&
                    <Grid className={ classes.detailContainer}>
                        {/*Title*/}
                        <Grid item className={classes.title}>
                            <Typography variant='h2' color={'primary'}>
                                {this.props.titleDetails.title}
                                </Typography>
                        </Grid>

                        {/*Year Details*/}
                        <Grid item>
                            <Typography variant='h6' style={{color:'white'}}>
                                {this.props.titleDetails.year}
                                </Typography>
                        </Grid>

                        {/*Imdb Rating*/}
                        <Grid item >
                            <Typography variant='h6' style={{color:'white', flexBasis:'20%'}}>
                                {`${this.props.titleDetails.imdbRating} Rated`}
                            </Typography>
                        </Grid>

                        {/*Poster*/}
                        <Grid item>
                            <Card className={ classes.card }>
                            <CardContent className={ classes.card }>
                                <CardMedia
                                    className={classes.cardImage}
                                    image={`/img/posters/${this.props.titleDetails.poster}`}
                                    title={this.props.titleDetails.title}
                                />
                            </CardContent>

                        </Card>
                        </Grid>

                        {/*Description*/}
                        <Grid item className={classes.descriptionContainer}>
                            <Typography className = {`${classes.commonText}`}>
                                {this.props.titleDetails.description}
                            </Typography>
                        </Grid>

                        {/*Video Player*/}
                        <Grid item className={ classes.youtubeWrapper}>
                        <iframe className={classes.youtubePlayer}
                            src={`https://www.youtube-nocookie.com/embed/${this.props.titleDetails.trailer}`}
                            frameBorder="0"
                        />
                        </Grid>
                    </Grid> || <img src={loadingImg} />}
                </Container>)
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    const imdbId = ownProps.match.params.imdbId;
    return {titleDetails: state.titleDetails[imdbId] || null};
};

const mapDispatchToProps = (dispatch)=>{
    return {
        addTitleDetails: (title) => {
            dispatch(titleDetails.addTitle(title))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(
        withStyles(Style)(
            withRouter(DetailPage)
        )
);
