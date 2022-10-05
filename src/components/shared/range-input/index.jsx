import classnames from "classnames/bind";

import styles from "./range.module.css";

const cn = classnames.bind(styles);

export const RangeInput = (props) => {
    const {value, title, min, max, disabled, wrapperClassName, onValueChange} = props;

    const onInput = (value) => {
        if (disabled) {
            return;
        }

        onValueChange(value);
    }

    return (
        <div className={cn("wrapper", wrapperClassName)}>
            {title && <div className={styles.title}>{title}</div>}
            <input
                type="range"
                value={value}
                min={min}
                max={max}
                onInput={(e) => onInput(Number(e.target.value))}
                className={cn("range", {disabled})}
            />
        </div>
    )
}