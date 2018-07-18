import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddlware from 'redux-saga';
import { getMovies } from "./movies/actionCreators";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddlware = createSagaMiddlware();

const store: Store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddlware))
);

sagaMiddlware.run(rootSaga);

store.dispatch(getMovies());

export default store;