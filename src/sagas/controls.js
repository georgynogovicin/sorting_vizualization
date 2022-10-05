import {
    put,
    select,
    takeLatest,
    all
} from "redux-saga/effects";
import {createArray} from "../utils/create-array";
import {arrayActionTypes, comparisonReset, setArray} from "../actions";

function* resetArray() {
    const arrayLength = yield select(({arraySettingsReducer}) => arraySettingsReducer.arrayLength)

    yield all([
        put(comparisonReset()),
        put(setArray(createArray(arrayLength))),
    ])
}

export default [
    takeLatest(arrayActionTypes.resetArray, resetArray)
];
