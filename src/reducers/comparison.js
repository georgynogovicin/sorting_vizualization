import {comparisonActionTypes} from "../actions";

const initial = {
    inProgress: false,
    sortingSpeed: 1,
    activeElements: [],
    sortedElements: [],
    auxiliaryElements: [],
}

export const comparisonReducer = (state = initial, action) => {
    switch (action.type) {
        case comparisonActionTypes.reset: {
            return {
                ...initial,
                sortingSpeed: state.sortingSpeed
            }
        }
        case comparisonActionTypes.toggleSort: {
            return {
                ...state,
                inProgress: action.payload,
            }
        }
        case comparisonActionTypes.setSortingSpeed: {
            return {
                ...state,
                sortingSpeed: action.payload,
            }
        }
        case comparisonActionTypes.setActiveElements: {
            return {
                ...state,
                activeElements: action.payload,
            }
        }
        case comparisonActionTypes.setAuxiliaryElements: {
            return {
                ...state,
                auxiliaryElements: action.payload,
            }
        }
        case comparisonActionTypes.setSortedElements: {
            return {
                ...state,
                sortedElements: action.payload,
            }
        }
        default:
            return state
    }
}