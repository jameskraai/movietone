import { AxiosResponse } from "axios";
import { List, Map } from "immutable";
import { stringify } from "query-string";
import { call, put } from "redux-saga/effects";
import { IMovie, MovieList, MovieMap } from "../../../../api/db/DataTypes";
import { api, IResource, IResponse } from "../../../api";
import { setMovies } from "../actionCreators";
import { IGetMovies } from "../actionTypes";

export default function*(action: IGetMovies) {
    let url: string = '/movies?';
    if (action.params) {
        const queryParams: string = yield call(stringify, action.params);
        url = url + queryParams;
    }
    const res: AxiosResponse<IResponse<IMovie>> = yield call(api.get, url);
    if (!res.data.data || res.data.data.length === 0) {
        return;
    }

    let movies: MovieList = List();

    res.data.data.forEach((movie: IResource<IMovie>) => {
        const mappedMovie = Map(movie.attributes).set('id', movie.id) as MovieMap;
        movies = movies.push(mappedMovie);
    });

    yield put(setMovies(movies));
}

