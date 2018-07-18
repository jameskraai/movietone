import { IState } from "../../State";

export const getList = (state: IState) => state.movies.get("list");
export const getActiveMovie = (state: IState) => state.movies.get("activeMovie");
export const getEditing = (state: IState) => state.movies.get("editing");
export const getCreating = (state: IState) => state.movies.get("creating");
export const getFilters = (state: IState) => state.movies.get("filters");