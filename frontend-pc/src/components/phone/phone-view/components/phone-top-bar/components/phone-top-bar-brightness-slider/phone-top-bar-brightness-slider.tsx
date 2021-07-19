import {faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import generalCss from "../../../../../../../general.module.css";
import phoneTopBarBrightnessSliderCss from "./phone-top-bar-brightness-slider.module.css";
import {BaseSyntheticEvent} from "react";
import {TGeneralState} from "../../../../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../../../../redux/store";
import {generalStoreActions} from "../../../../../../../redux/slices/general-phone-slice";

/**
 *
 * @constructor
 */
const PhoneTopBarBrightnessSlider = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();


    const onMouseDown = (event: BaseSyntheticEvent) => {
        event.stopPropagation();
    }

    const onChange = (e: BaseSyntheticEvent) => {
        dispatch(generalStoreActions.brightness.setBrightness(e.target.value));
    }

    return (
        <div className={ `${generalCss.centerVertical} ${phoneTopBarBrightnessSliderCss.brightnessSlider}`}>
            <FontAwesomeIcon icon={faSun}/>
            <input type="range" min="0.2" max="1.8" defaultValue={ phoneGeneralState.brightness.number } step="0.1" onMouseDown={onMouseDown} onChange={onChange}/>
        </div>
    );
}

export default PhoneTopBarBrightnessSlider;
