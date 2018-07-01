import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { List as MovieList } from "../components/Movie/List";


export default () => (
    <BrowserRouter>
        <Route path="/" component={MovieList}/>
    </BrowserRouter>
);
