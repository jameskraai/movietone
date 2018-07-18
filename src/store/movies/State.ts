import { List, Map } from "immutable";

export let initialState: IState = Map({
    activeMovie: null,
    creating: Map(),
    editing: Map(),
    filters: Map(),
    list: List(),
});

export type IState = Map<string, any>;