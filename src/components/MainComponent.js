import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Header from './HeaderComponent';
import Data from './DataComponent';

function Main() {
    return (
        <div className="App">
            <div>
                <Header />
            </div>
            <Switch>
                <Route path="/inicio" component={Home} />
                <Route exact path='/recomendaciones' component={About} />
                <Route exact path='/datosutiles' component={Data} />
                <Redirect to="/inicio" />
            </Switch>
        </div>
    );
}

export default Main;
