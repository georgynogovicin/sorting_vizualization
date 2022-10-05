import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const isDev = process.env.NODE_ENV === "development";
const hasExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const configureStore = () => {
    const buildAccordingEnv = isDev && hasExtension
        ? compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
        : applyMiddleware(sagaMiddleware);

    const createdStore = createStore(reducers, buildAccordingEnv);

    sagaMiddleware.run(sagas);

    return createdStore;
}

export const store = configureStore();