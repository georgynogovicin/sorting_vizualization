import {
    select,
    put,
    race,
    take,
    takeLatest
} from 'redux-saga/effects';

import { startSorting, setNewParams, setPause } from "./sorting";
import {comparisonSetActiveElements, comparisonSetSortedElements, comparisonToggle} from "../../actions";

const SPEED_MULTIPLIER = 80;

function* bubbleSortHelper() {
    const { array, arrayLength } = yield select(({ arraySettingsReducer }) => ({
        array: arraySettingsReducer.array,
        arrayLength: arraySettingsReducer.arrayLength
    }));

    yield startSorting();

    const { success } = yield race({
        success: bubbleSort(array, arrayLength),
        canceled: take('COMPARISON/RESET')
    });

    if (success) {
        yield put(comparisonToggle(false));
    }
}

function* bubbleSort(array, arrayLength) {
    const completedElements = [];

    for(let step = 0; step < arrayLength - 1; step++) {
        for(let compareIndex = 0; compareIndex < arrayLength - 1 - step; compareIndex++) {

            yield put(comparisonSetActiveElements([compareIndex, compareIndex + 1]));
            yield setPause(SPEED_MULTIPLIER);

            const left = array[compareIndex];
            const right = array[compareIndex + 1];

            if(left  > right) {
                const params = {
                    [compareIndex]:  right,
                    [compareIndex + 1]: left
                };

                array[compareIndex] = right;
                array[compareIndex + 1] = left;

                yield setNewParams(params);
                yield setPause(SPEED_MULTIPLIER);
            }
        }
        completedElements.push(arrayLength - 1 - step);
        yield put(comparisonSetSortedElements(completedElements));
    }

    yield put(comparisonSetSortedElements([0, ...completedElements]));

    return true
}
export default [
    takeLatest('SORTING/BUBBLE_SORT', bubbleSortHelper),
];