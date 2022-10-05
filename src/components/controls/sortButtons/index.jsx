import styles from "./sortButtons.module.css";
import {useDispatch} from "react-redux";
import {startBubbleSort} from "../../../actions";
import {Button} from "../../shared/button";

export const SortButtons = () => {
    const dispatch = useDispatch();

    const onBubbleSort = () => {
        dispatch(startBubbleSort())
    }

    return (
        <div className={styles.buttons}>
            <Button
                text={"Пузырьком"}
                onClick={onBubbleSort}
            />
        </div>
    )
}