import {arrayActionTypes} from "../actions";

const initial = {
    array: [],
    arrayLength: 30,
}

export const arraySettingsReducer = (state = initial, action) => {
    switch (action.type) {
        case arrayActionTypes.setArray:
            return {...state, array: action.payload};
        case arrayActionTypes.setLength:
            return {...state, arrayLength: action.payload};
        default:
            return state;
    }
};