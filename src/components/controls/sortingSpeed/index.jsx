import {useDispatch, useSelector} from "react-redux";
import {comparisonSetSpeed} from "../../../actions";
import {RangeInput} from "../../shared/range-input";

export const SortingSpeed = () => {
    const sortingSpeed = useSelector(({comparisonReducer}) => comparisonReducer.sortingSpeed);

    const dispatch = useDispatch();

    const onChangeSpeed = (multiplier) => dispatch(comparisonSetSpeed(multiplier));

    return (
        <RangeInput
            value={sortingSpeed}
            title={"Скорость сортировки"}
            min={1}
            max={20}
            onValueChange={onChangeSpeed}
        />
    )
}