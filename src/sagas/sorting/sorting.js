import {delay, put, select} from "redux-saga/effects";
import {comparisonReset, comparisonSetSortedElements, comparisonToggle, setArray} from "../../actions";

export function* setNewParams(params) {
    const array = yield select(({ arraySettingsReducer }) => arraySettingsReducer.array);

    for (let index in params) {
        array[index] = params[index];
    }

    yield put(setArray(array));
}

export function* setPause(multiplier = 100) {
    const sortingSpeed = yield select(({ comparisonReducer }) => comparisonReducer.sortingSpeed);

    yield delay(multiplier / sortingSpeed);
}

export function* startSorting() {
    yield put(comparisonReset());
    yield put(comparisonToggle(true));
}

export function* afterSuccessSorting() {
    const sortedArrayLength = yield select(({ arraySettingsReducer }) => arraySettingsReducer.arrayLength);

    yield put(comparisonReset());

    for(let length = 1; length <= sortedArrayLength; length++) {
        yield put(comparisonSetSortedElements(Array.from(Array(length).keys())));
        yield setPause(1);
    }
}