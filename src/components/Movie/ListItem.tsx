import * as React from "react";
import { MovieMap } from "../../../api/db/DataTypes";

interface IProps {
    movie: MovieMap;
    push: (path: string) => void;
}

export const ListItem = (props: IProps) => {
    const onEdit = () => (props.push(`/movies/${props.movie.get('id')}`));
    return (
    <li>
        <p>Title: {props.movie.get("title")}</p>
        <p>genre: {props.movie.get("genre")}</p>
        <p>actors: {props.movie.get("actors")}</p>
        <p>year: {props.movie.get("year")}</p>
        <p>rating: {props.movie.get("rating")}</p>
        <button onClick={onEdit}>Edit</button>
    </li>
    )
};