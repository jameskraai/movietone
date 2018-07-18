import { takeEvery } from "redux-saga/effects";
import TypeKeys from "../TypeKeys";
import getMovies from "./getMovies";

export default function*() {
    yield takeEvery(TypeKeys.GET_MOVIES, getMovies);
}