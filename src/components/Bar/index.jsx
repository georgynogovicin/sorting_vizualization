import styles from "./bar.module.css";

export const Bar = ({width, height, color}) => {
    const barStyle = {
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: color,
    }

    return (
        <div className={styles.bar} style={barStyle}/>
    )
}