import { call, put, select } from "redux-saga/effects";
import { MovieMap } from "../../../../api/db/DataTypes";
import { api } from "../../../api";
import { clearEditing, getMovies } from "../actionCreators";
import { getActiveMovie } from "../selectors";

export default function*() {
    const activeMovie: MovieMap = yield select(getActiveMovie);

    yield call(api.delete, `/movies/${activeMovie.get('id')}`);
    yield put(clearEditing());
    yield put(getMovies());
}