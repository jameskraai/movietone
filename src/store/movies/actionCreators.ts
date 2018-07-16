import * as actionTypes from "./actionTypes";
import { IParam } from "./actionTypes";
import TypeKeys from "./TypeKeys";

export type IGetMovies = (params?: IParam[]) => actionTypes.IGetMovies;

/**
 * Get Movies optionally with certain parameters
 *
 * @param {IParam[]} params Parameters that will be used in the API call
 */
export const getMovies: IGetMovies = (params?: IParam[]): actionTypes.IGetMovies => ({
    params,
    type: TypeKeys.GET_MOVIES
});
