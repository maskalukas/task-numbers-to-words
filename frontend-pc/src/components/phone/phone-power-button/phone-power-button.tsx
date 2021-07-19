import phonePowerButtonCss from "./phone-power-button.module.css";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";
import {TGeneralState} from "../../../redux/interfaces";
import {useState} from "react";
import {Battery} from "../../../classes/battery";
import {generalStoreActions} from "../../../redux/slices/general-phone-slice";

/**
 * The aside button that either turns on or off the phone.
 * @constructor
 */
const PhonePowerButton = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();
    const battery = new Battery(phoneGeneralState.battery, dispatch);

    // This state is here because of animations, after clicking, the classname with animation is set.
    const [clicked, setClicked] = useState(false);

    /**
     * Either turns on or off the phone after clicking or if the phone has not battery then goes off.
     */
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
