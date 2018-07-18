import { takeLatest } from "redux-saga/effects";
import TypeKeys from "../TypeKeys";
import getMovies from "./getMovies";

export default function*() {
    yield takeLatest(TypeKeys.GET_MOVIES, getMovies);
}