import {useDispatch, useSelector} from "react-redux";
import {RangeInput} from "../../shared/range-input";

import styles from "./length-input.module.css";
import {setLength} from "../../../actions";

export const LengthInput = () => {
    const arrayLength = useSelector(({arraySettingsReducer}) => arraySettingsReducer.arrayLength);
    const inProgress = useSelector(({comparisonReducer}) => comparisonReducer.inProgress);

    const dispatch = useDispatch();

    const onChangeLength = (length) => dispatch(setLength(length));

    return (
        <RangeInput
            value={arrayLength}
            title={"Длинна массива"}
            min={15}
            max={180}
            disabled={inProgress}
            onValueChange={onChangeLength}
            wrapperClassName={styles.range}
        />
    )
};