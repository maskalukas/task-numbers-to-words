import phonePowerButtonCss from "./phone-power-button.module.css";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";
import {TGeneralState} from "../../../redux/interfaces";
import { generalStoreActions }  from "../../../redux/slices/general-phone/general-phone-slice";
import {useState} from "react";

const PhonePowerButton = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState(false);

    const changePhoneIsTurned = () => {
        setClicked(true);

        phoneGeneralState.power.status ? dispatch(generalStoreActions.power.setOff()) : dispatch(generalStoreActions.power.setOn());
        setTimeout(() => {
            setClicked(false);
        },750)
    }

    return (
        <div className={ `${phonePowerButtonCss.phonePowerButton}  ${ clicked ? phonePowerButtonCss.clicked : '' }` } onClick={ changePhoneIsTurned }></div>
    )
}

export { PhonePowerButton }
