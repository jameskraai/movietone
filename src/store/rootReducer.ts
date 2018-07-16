import { combineReducers } from "redux";
import { reducer as movieReducer } from "./movies/reducer";

export const rootReducer = combineReducers({
    movies: movieReducer
});
