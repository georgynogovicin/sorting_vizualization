import {ResetButton} from "./resetButton";
import styles from "./controls.module.css";
import {SortButtons} from "./sortButtons";
import {LengthInput} from "./lengthInput";
import {SortingSpeed} from "./sortingSpeed";

export const Controls = () => {
    return (
        <div className={styles.controls}>
            <div className={styles.controls__buttons}>
                <ResetButton />
                <SortButtons />
            </div>
            <div className={styles.controls__sliders}>
                <LengthInput/>
                <SortingSpeed/>
            </div>
        </div>
    )
}