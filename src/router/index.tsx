import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MovieList from "../components/Movie/List";

export default () => (
    <BrowserRouter>
        <Route path="/" component={MovieList}/>
    </BrowserRouter>
);
