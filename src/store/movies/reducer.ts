import { ActionTypes } from "./actionTypes";
import { initialState, IState } from "./State";
import TypeKeys from "./TypeKeys";

export const reducer = (state: IState = initialState, action: ActionTypes) => {
    switch(action.type) {
        case TypeKeys.SET_MOVIES:
            return state.set("list", action.movies);
        default:
            return state;
    }
};