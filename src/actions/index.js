export const arrayActionTypes = {
    setArray: "SET_ARRAY",
    setLength: "SET_LENGTH",
    resetArray: "CONTROLS/RESET_ARRAY",
}

export const comparisonActionTypes = {
    reset: "COMPARISON/RESET",
    toggleSort: "COMPARISON/TOGGLE_SORT",
    setSortingSpeed: "COMPARISON/SET_SORTING_SPEED",
    setActiveElements: "COMPARISON/SET_ACTIVE_ELEMENTS",
    setAuxiliaryElements: "COMPARISON/SET_AUXILIARY_ELEMENTS",
    setSortedElements: "COMPARISON/SET_SORTED_ELEMENTS",
}

export const sortingActionTypes = {
    bubbleSorting: "SORTING/BUBBLE_SORT",
    shakerSorting: "SORTING/SHAKER_SORT",
}

export const setArray = (payload) => {
    return {
        type: arrayActionTypes.setArray,
        payload,
    }
}

export const setLength = (payload) => {
    return {
        type: arrayActionTypes.setLength,
        payload,
    }
}

export const resetArray = () => {
    return {
        type: arrayActionTypes.resetArray
    }
}

export const comparisonReset = () => {
    return {
        type: comparisonActionTypes.reset
    }
}

export const comparisonToggle = (payload) => {
    return {
        type: comparisonActionTypes.toggleSort,
        payload,
    }
}

export const comparisonSetSpeed = (payload) => {
    return {
        type: comparisonActionTypes.setSortingSpeed,
        payload,
    }
}

export const comparisonSetActiveElements = (payload) => {
    return {
        type: comparisonActionTypes.setActiveElements,
        payload
    }
}

export const comparisonSetAuxiliaryElements = (payload) => {
    return {
        type: comparisonActionTypes.setAuxiliaryElements,
        payload
    }
}

export const comparisonSetSortedElements = (payload) => {
    return {
        type: comparisonActionTypes.setSortedElements,
        payload,
    }
}

export const startBubbleSort = () => {
    return {
        type: sortingActionTypes.bubbleSorting,
    }
}

export const startShakerSort = () => {
    return {
        type: sortingActionTypes.shakerSorting,
    }
}