import * as React from "react";
import { MovieMap } from "../../../api/db/DataTypes";

export const ListItem = (props: MovieMap) => (
    <li>
        <p>Title: {props.get("title")}</p>
        <p>genre: {props.get("genre")}</p>
        <p>actors: {props.get("actors")}</p>
        <p>year: {props.get("year")}</p>
        <p>rating: {props.get("rating")}</p>
    </li>
);