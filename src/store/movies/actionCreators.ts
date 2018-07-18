import { IMovie, MovieList, MovieMap } from "../../../api/db/DataTypes";
import * as actionTypes from "./actionTypes";
import TypeKeys from "./TypeKeys";

export type IGetMovies = ({}?) => actionTypes.IGetMovies;
export type ISetMovies = (movies: MovieList) => actionTypes.ISetMovies;
export type ISetActiveMovie = (movie: MovieMap | null) => actionTypes.ISetActiveMovie;
export type ICreateMovie = (movie: IMovie) => actionTypes.ICreateMovie;
export type IUpdateMovie = (movie: IMovie) => actionTypes.IUpdateMovie;
export type IDeleteMovie = (id: string) => actionTypes.IDeleteMovie;

export type SetEditingFieldFn = (field: string, value: any) => actionTypes.ISetEditingField;
export type ClearEditingFn = () => actionTypes.IClearEditing;

export type SetCreatingFieldFn = (field: string, value: any) => actionTypes.ISetCreatingField;
export type ClearCreatingFn = () => actionTypes.IClearCreating;

/**
 * Get Movies optionally with certain parameters
 *
 * @param {{}} params Parameters that will be used in the API call
 */
export const getMovies: IGetMovies = (params?: {}): actionTypes.IGetMovies => ({
    params,
    type: TypeKeys.GET_MOVIES
});

/**
 * Set the given Movies to the store.
 *
 * @param {MovieList} movies
 */
export const setMovies: ISetMovies = (movies: MovieList): actionTypes.ISetMovies => ({
    movies,
    type: TypeKeys.SET_MOVIES,
});

export const setActiveMovie: ISetActiveMovie = (movie: MovieMap | null): actionTypes.ISetActiveMovie => ({
    movie,
    type: TypeKeys.SET_ACTIVE_MOVIE,
});

/**
 * Create a new Movie given the Movie object.
 *
 * @param {IMovie} movie Movie to be created
 */
export const createMovie: ICreateMovie = (movie: IMovie): actionTypes.ICreateMovie => ({
    movie,
    type: TypeKeys.CREATE_MOVIE,
});

/**
 * Update a Movies properties given the properties set on the Movie.
 *
 * @param {IMovie} movie
 */
export const updateMovie: IUpdateMovie = (movie: IMovie): actionTypes.IUpdateMovie => ({
    movie,
    type: TypeKeys.UPDATE_MOVIE,
});

/**
 * Delete the Movie with the provided ID.
 *
 * @param {string} id
 */
export const deleteMovie: IDeleteMovie = (id: string): actionTypes.IDeleteMovie => ({
    id,
    type: TypeKeys.DELETE_MOVIE,
});

export const setEditingField: SetEditingFieldFn = (field: string, value: any): actionTypes.ISetEditingField => ({
    field,
    type: TypeKeys.SET_EDITING_FIELD,
    value,
});

export const clearEditing: ClearEditingFn = (): actionTypes.IClearEditing => ({
    type: TypeKeys.CLEAR_EDITING
});

export const setCreatingField: SetCreatingFieldFn = (field: string, value: any): actionTypes.ISetCreatingField => ({
    field,
    type: TypeKeys.SET_CREATING_FIELD,
    value,
});

export const clearCreating: ClearCreatingFn = (): actionTypes.IClearCreating => ({
    type: TypeKeys.CLEAR_CREATING,
});
