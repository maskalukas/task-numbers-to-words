import phonePowerButtonCss from "./phone-power-button.module.css";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";
import {TGeneralState} from "../../../redux/interfaces";
import {setTurnedOff, setTurnedOn} from "../../../redux/slices/general-phone/general-phone-slice";

const PhonePowerButton = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();

    const changePhoneIsTurned = () => {
        phoneGeneralState.isTurnedOn ? dispatch(setTurnedOff()) : dispatch(setTurnedOn());
    }

    return (
        <div className={ phonePowerButtonCss.phonePowerButton } onClick={ changePhoneIsTurned }></div>
    )

}

export { PhonePowerButton }
