import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieCreate from "../components/Movie/Create";
import MovieEdit from "../components/Movie/Edit";
import MovieList from "../components/Movie/List";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MovieList} exact={true}/>
            <Route path="/edit/:movieId" component={MovieEdit} exact={true}/>
            <Route path="/create" component={MovieCreate} exact={true}/>
        </Switch>
    </BrowserRouter>
);
