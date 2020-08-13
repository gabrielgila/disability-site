import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Header from './HeaderComponent';

function Main() {
    return (
        <div className="App">
            <div>
                <Header />
            </div>
            <Switch>
                <Route path="/inicio" component={Home} />
                <Route exact path='/nosotros' component={About} />
                <Redirect to="/inicio" />
            </Switch>
        </div>
    );
}

export default Main;
