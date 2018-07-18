import { Action } from "redux";
import { IMovie, MovieList } from "../../../api/db/DataTypes";
import TypeKeys from "./TypeKeys";

export interface IParam {
    key: string;
    value: any;
}

export interface IGetMovie extends Action {
    id: string;
    type: TypeKeys.GET_MOVIE,
}

export interface IGetMovies extends Action {
    params?: {};
    type: TypeKeys.GET_MOVIES,
}

export interface ISetMovies extends Action {
    movies: MovieList,
    type: TypeKeys.SET_MOVIES,
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

export type ActionTypes =
    IGetMovie |
    IGetMovies |
    ISetMovies |
    ICreateMovie |
    IUpdateMovie |
    IDeleteMovie;

