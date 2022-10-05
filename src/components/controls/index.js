import {ResetButton} from "./resetButton";
import styles from "./controls.module.css";
import {SortButtons} from "./sortButtons";

export const Controls = () => {
    return (
        <div className={styles.controls}>
            <div className={styles.controls__buttons}>
                <ResetButton />
                <SortButtons />
            </div>
        </div>
    )
}