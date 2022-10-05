import {useDispatch} from "react-redux";
import {resetArray} from "../../../actions";
import {Button} from "../../shared/button";

export const ResetButton = () => {
    const dispatch = useDispatch();

    const onClick = () => dispatch(resetArray());

    return (
        <Button
            text="Пересоздать массив"
            disabled={false}
            onClick={onClick}
        />
    )
}