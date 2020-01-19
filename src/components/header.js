import React, {Component} from "react";
import { withStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import style from '../styles/headerStyle';
import { getResultsByName } from "../../data/DataAPI";
import { connect } from "react-redux";
import searchActions from "../reduxElements/actions/searchResults";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";


class Header extends Component{

    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.debouncedInput = debounce(this.debouncedInput.bind(this),1000);
        this.state={
            keyword : ""
        }
    }

    componentDidMount(){
        this.props.updateTitleList(getResultsByName(this.state.keyword));
    }

    handleInput(e){
        const keyword = e.target.value;
        this.debouncedInput(keyword);
        this.setState({
            keyword
        });
    }

    debouncedInput(keyword){
        this.props.updateTitleList(getResultsByName(keyword));
    }

    render(){
        const {classes} = this.props;

        return (<div className={classes.root}>
            <AppBar className={classes.navBar} position="fixed">
                <ToolBar className={classes.root}>
                    <Link to="/">
                        <div>
                            <Typography className={classes.home}>Home</Typography>
                        </div>
                    </Link>
                    {this.props.isSearchEnabled &&
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange = {this.handleInput}
                            value = {this.state.keyword}
                        />
                    </div>}
                </ToolBar>
            </AppBar>
        </div>);
    }
}

const mapStateToProps= (state)=>({
    titleList: state.searchResults.map((element)=>{
        return element.title;
    })
});

const mapDispatchToProps = (dispatch)=>({
    updateTitleList: (results)=>{
        dispatch(searchActions.updateResults(results));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Header));
