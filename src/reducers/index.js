import {combineReducers} from "redux";
import {arraySettingsReducer} from "./arraySettings";
import {comparisonReducer} from "./comparison";

export default combineReducers({
    arraySettingsReducer,
    comparisonReducer,
})