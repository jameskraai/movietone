import { call, put, select } from "redux-saga/effects";
import { MovieMap } from "../../../../api/db/DataTypes";
import { api } from "../../../api";
import { clearCreating, clearEditing, getMovies } from "../actionCreators";
import { getActiveMovie, getCreating, getEditing } from "../selectors";

export default function*() {
    const editing: MovieMap = yield select(getEditing);
    const creating: MovieMap = yield select(getCreating);
    const activeMovie: MovieMap = yield select(getActiveMovie);

    const getData = (map: MovieMap): any => {
        const data: any = {};
        if(map.has('title') && map.get('title')) {
            data.title = map.get('title');
        }

        if(map.has('actors') && map.get('actors')) {
            data.actors = map.get('actors');
        }

        if(map.has('genre') && map.get('genre')) {
            data.genre = map.get('genre');
        }

        if(map.has('rating') && map.get('rating')) {
            data.rating = map.get('rating');
        }

        if(map.has('year') && map.get('year')) {
            data.year = map.get('year');
        }

        return data;
    }

    if (editing.size > 0) {
        const data = yield call(getData, editing);
        yield call(api.patch, `/movies/${activeMovie.get('id')}`, data);
        yield put(clearEditing());
        yield put(getMovies());
        return;
    }

    if (creating.size > 0) {
        const data = yield call(getData, creating);
        yield call(api.post, `/movies`, data);
        yield put(clearCreating());
        yield put(getMovies());
        return;
    }
}