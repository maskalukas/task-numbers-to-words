import phonePowerButtonCss from "./phone-power-button.module.css";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";
import {TGeneralState} from "../../../redux/interfaces";
import { generalStoreActions }  from "../../../redux/slices/general-phone/general-phone-slice";
import {useState} from "react";
import {Battery} from "../../../classes/battery";

const PhonePowerButton = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();
    const battery = new Battery(phoneGeneralState.battery, dispatch);

    const [clicked, setClicked] = useState(false);

    const changePhoneIsTurned = () => {
        setClicked(true);

        if(!phoneGeneralState.power.status && phoneGeneralState.battery.statusNumber > 0) {
            dispatch(generalStoreActions.power.setOn());
        } else if(!phoneGeneralState.power.status && phoneGeneralState.battery.statusNumber === 0) {
            battery.showNoBatteryIcon(true, false);
        } else {
            dispatch(generalStoreActions.power.setOff());
        }

        setTimeout(() => {
            setClicked(false);
        },750)
    }

    return (
        <div className={ `${phonePowerButtonCss.phonePowerButton}  ${ clicked ? phonePowerButtonCss.clicked : '' }` } onClick={ changePhoneIsTurned }></div>
    )
}

export { PhonePowerButton }
