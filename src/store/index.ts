import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddlware from 'redux-saga';
import { rootReducer } from "./rootReducer";

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(createSagaMiddlware()))
);

export default store;