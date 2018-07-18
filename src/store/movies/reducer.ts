import { Map } from "immutable";
import { ActionTypes } from "./actionTypes";
import { initialState, IState } from "./State";
import TypeKeys from "./TypeKeys";

export const reducer = (state: IState = initialState, action: ActionTypes) => {
    switch(action.type) {
        case TypeKeys.SET_MOVIES:
            return state.set("list", action.movies);
        case TypeKeys.SET_ACTIVE_MOVIE:
            return state.set("activeMovie", action.movie);
        case TypeKeys.SET_EDITING_FIELD:
            return state.setIn(['editing', action.field], action.value);
        case TypeKeys.CLEAR_EDITING:
            return state.set('editing', Map());
        case TypeKeys.SET_CREATING_FIELD:
            return state.setIn(['creating', action.field], action.value);
        case TypeKeys.CLEAR_CREATING:
            return state.set('creating', Map());
        case TypeKeys.ADD_FILTER:
            return state.setIn(['filters', action.field], action.value);
        case TypeKeys.DELETE_FILTER:
            return state.set('filters', state.get('filters').delete(action.field));
        default:
            return state;
    }
};