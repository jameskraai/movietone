import { IMovie } from "../../../api/db/DataTypes";
import * as actionTypes from "./actionTypes";
import { IParam } from "./actionTypes";
import TypeKeys from "./TypeKeys";

export type IGetMovies = (params?: IParam[]) => actionTypes.IGetMovies;
export type ISetMovies = (movies: IMovie[]) => actionTypes.ISetMovies;
export type ICreateMovie = (movie: IMovie) => actionTypes.ICreateMovie;
export type IUpdateMovie = (movie: IMovie) => actionTypes.IUpdateMovie;
export type IDeleteMovie = (id: string) => actionTypes.IDeleteMovie;

/**
 * Get Movies optionally with certain parameters
 *
 * @param {IParam[]} params Parameters that will be used in the API call
 */
export const getMovies: IGetMovies = (params?: IParam[]): actionTypes.IGetMovies => ({
    params,
    type: TypeKeys.GET_MOVIES
});

/**
 * Set the given Movies to the store.
 *
 * @param {IMovie[]} movies
 */
export const setMovies: ISetMovies = (movies: IMovie[]): actionTypes.ISetMovies => ({
    movies,
    type: TypeKeys.SET_MOVIES,
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
