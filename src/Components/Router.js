import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home/HomePresenter";
import TV from "Routes/TV/TVPresenter";
import Search from "Routes/Search/SearchPresenter";
// import Detail from "Routes/Detail/DetailPresenter";
import Movie from "Routes/Movie/MoviePresenter";
import Header from 'Components/Header';


export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/movie" component={Movie} />
            {/* <Route path="/Detail/:id" exact component={Detail} /> */}
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)