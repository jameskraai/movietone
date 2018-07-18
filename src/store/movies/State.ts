import { List, Map } from "immutable";

export let initialState: IState = Map();
initialState = initialState.set("list", List());

export type IState = Map<string, any>;