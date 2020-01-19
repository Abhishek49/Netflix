import React, {Component} from "react"
import SearchPage from "./containers/searchPage"
import DetailsPage from "./containers/detailPage"
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { createStore } from 'redux';
import combinedReducers from './reduxElements/reducers';
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter, Route, Switch} from "react-router-dom"


let theme = createMuiTheme({
    palette:{
        primary:{
            main:'#E50914'
        },
        secondary:{
            main: '#000000'
        }
    },
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 12
    }
});

theme = responsiveFontSizes(theme);

class App extends Component{

    constructor(){
        super();
        this.store = createStore(combinedReducers);
    }

    render(){
        return (
            <ThemeProvider theme={theme}>
                <Provider store = {this.store}>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/title/:imdbId'  component= { DetailsPage }   />
                            <Route path='/' component= { SearchPage }  />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>

    )};

}

export default App;
