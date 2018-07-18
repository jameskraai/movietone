import { List, Map } from "immutable";

export let initialState: IState = Map();
initialState = initialState.set("list", List());
initialState = initialState.set("activeMovie", null);

export type IState = Map<string, any>;