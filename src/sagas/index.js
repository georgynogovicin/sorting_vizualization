import {all} from "redux-saga/effects";
import controls from "./controls";
import bubbleSort from "./sorting/bubbleSort.js";

export default function* rootSaga() {
    yield  all([
        ...controls,
        ...bubbleSort,
    ])
}