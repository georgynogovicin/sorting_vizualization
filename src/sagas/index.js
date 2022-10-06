import {all} from "redux-saga/effects";
import controls from "./controls";
import bubbleSort from "./sorting/bubbleSort.js";
import shakerSort from "./sorting/shakerSort";

export default function* rootSaga() {
    yield  all([
        ...controls,
        ...bubbleSort,
        ...shakerSort,
    ])
}