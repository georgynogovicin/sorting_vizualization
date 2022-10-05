import classnames from "classnames/bind";
import styles from "./button.module.css";

const cn = classnames.bind(styles);

export const Button = ({text, className, onClick}) => {
    return (
        <button onClick={onClick} className={cn("button", className)}>{text}</button>
    )
}