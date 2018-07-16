import * as actionTypes from "./actionTypes";
import TypeKeys from "./TypeKeys";

export const getMovies = (): actionTypes.IGetMovies => ({
    type: TypeKeys.GET_MOVIES
});