import { Action } from "redux";
import { MovieList, MovieMap } from "../../../api/db/DataTypes";
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

export interface ISetActiveMovie extends Action {
    movie: MovieMap | null,
    type: TypeKeys.SET_ACTIVE_MOVIE,
}

export interface ISaveMovie extends Action {
    type: TypeKeys.SAVE_MOVIE,
}

export interface IDeleteMovie extends Action {
    id: string;
    type: TypeKeys.DELETE_MOVIE,
}

export interface ISetEditingField extends Action {
    field: string;
    type: TypeKeys.SET_EDITING_FIELD;
    value: any;
}

export interface IClearEditing extends Action {
    type: TypeKeys.CLEAR_EDITING;
}

export interface ISetCreatingField extends Action {
    field: string;
    type: TypeKeys.SET_CREATING_FIELD;
    value: any;
}

export interface IClearCreating extends Action {
    type: TypeKeys.CLEAR_CREATING;
}

export type ActionTypes =
    IGetMovie         |
    IGetMovies        |
    ISetMovies        |
    ISetActiveMovie   |
    IDeleteMovie      |
    ISetEditingField  |
    IClearEditing     |
    ISetCreatingField | 
    IClearCreating    |
    ISaveMovie        ;

