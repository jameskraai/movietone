import { IState } from "../../State";

export const getList = (state: IState) => state.movies.get("list");