import { IState } from "../../State";

export const getList = (state: IState) => state.movies.get("list");
export const getActiveMovie = (state: IState) => state.movies.get("activeMovie");