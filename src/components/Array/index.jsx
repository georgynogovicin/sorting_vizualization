import {Bar} from "../Bar";
import styles from "./array.module.css";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {resetArray} from "../../actions";
import {useEffect} from "react";

const WIDTH_MULTIPLIER = window.screen.width;

const ACTIVE_COLOR = '#ff5555';
const SORTED_COLOR = '#4ed26c';
const AUXILIARY_COLOR = '#bd93f9';
const DEFAULT_COLOR = '#ffb86c';

export const Array = () => {
    const {activeElements, auxiliaryElements, sortedElements} = useSelector(({comparisonReducer}) => ({
        activeElements: comparisonReducer.activeElements,
        auxiliaryElements: comparisonReducer.auxiliaryElements,
        sortedElements: comparisonReducer.sortedElements,
    }), shallowEqual);
    const array = useSelector(({arraySettingsReducer}) => arraySettingsReducer.array)

    const dispatch = useDispatch();
    const createArray = () => dispatch(resetArray());

    useEffect(() => {
        createArray();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const barWidth = WIDTH_MULTIPLIER / array.length || 0;

    return (
        <div className={styles.array}>
            {
                array.map((height, index) => {
                    const barColor = sortedElements.includes(index) && SORTED_COLOR
                        || activeElements.includes(index) && ACTIVE_COLOR
                        || auxiliaryElements.includes(index) && AUXILIARY_COLOR
                        || DEFAULT_COLOR;

                    return (
                        <Bar key={index}
                             width={barWidth}
                             color={barColor}
                             height={height}
                        />
                    )
                })
            }
        </div>
    )
}

// function getBarColor (sortedElements, activeElements, auxiliaryElements, index) {
//     return sortedElements.includes(index) && SORTED_COLOR
//         || activeElements.includes(index) && ACTIVE_COLOR
//         || auxiliaryElements.includes(index) && AUXILIARY_COLOR
//         || DEFAULT_COLOR;
// }