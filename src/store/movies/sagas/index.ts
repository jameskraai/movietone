import { takeEvery, takeLatest } from "redux-saga/effects";
import TypeKeys from "../TypeKeys";
import getMovies from "./getMovies";
import saveMovie from "./saveMovie";

export default function*() {
    yield takeEvery(TypeKeys.GET_MOVIES, getMovies);
    yield takeLatest(TypeKeys.ADD_FILTER, getMovies);
    yield takeLatest(TypeKeys.DELETE_FILTER, getMovies);
    yield takeEvery(TypeKeys.SAVE_MOVIE, saveMovie);
}