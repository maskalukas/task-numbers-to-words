import phonePowerButtonCss from "./phone-power-button.module.css";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";
import {TGeneralState} from "../../../redux/interfaces";
import {setTurned} from "../../../redux/slices/general-phone/general-phone-slice";
import {useState} from "react";

const PhonePowerButton = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState(false);

    const changePhoneIsTurned = () => {
        setClicked(true);

        phoneGeneralState.isTurnedOn ? dispatch(setTurned(false)) : dispatch(setTurned(true));
        setTimeout(() => {
            setClicked(false);
        },750)
    }

    return (
        <div className={ `${phonePowerButtonCss.phonePowerButton}  ${ clicked ? phonePowerButtonCss.clicked : '' }` } onClick={ changePhoneIsTurned }></div>
    )
}

export { PhonePowerButton }
