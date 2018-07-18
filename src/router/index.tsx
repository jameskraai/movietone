import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieEdit from "../components/Movie/Edit";
import MovieList from "../components/Movie/List";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MovieList} exact={true}/>
            <Route path="/:movieId" component={MovieEdit}/>
        </Switch>
    </BrowserRouter>
);
