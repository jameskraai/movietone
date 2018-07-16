import { Action } from "redux";
import { IMovie } from "../../../api/db/DataTypes";
import TypeKeys from "./TypeKeys";

export interface IGetMovie extends Action {
    id: string;
    type: TypeKeys.GET_MOVIE,
}

export interface IGetMovies extends Action {
    type: TypeKeys.GET_MOVIES,
}

export interface ICreateMovie extends Action {
    movie: IMovie,
    type: TypeKeys.CREATE_MOVIE
}

export interface IUpdateMovie extends Action {
    movie: IMovie,
    type: TypeKeys.UPDATE_MOVIE
}

export interface IDeleteMovie extends Action {
    id: string;
    type: TypeKeys.DELETE_MOVIE,
}