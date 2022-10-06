import styles from "./sortButtons.module.css";
import {useDispatch} from "react-redux";
import {startBubbleSort, startShakerSort} from "../../../actions";
import {Button} from "../../shared/button";

export const SortButtons = () => {
    const dispatch = useDispatch();

    const onBubbleSort = () => {
        dispatch(startBubbleSort())
    }

    const onShakerSort = () => {
        dispatch(startShakerSort());
    }

    return (
        <div className={styles.buttons}>
            <Button
                className={styles.buttons_button}
                text={"Пузырьком"}
                onClick={onBubbleSort}
            />
            <Button
                className={styles.buttons_button}
                text={"Шейкер"}
                onClick={onShakerSort}
            />
        </div>
    )
}