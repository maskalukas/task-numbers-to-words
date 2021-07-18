import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import phoneContentNoBatteryCss from "./phone-content-battery-change.module.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Battery} from "../../../../../../classes/battery";
import {TGeneralState} from "../../../../../../redux/interfaces";
import {IReducersState} from "../../../../../../redux/store";

export const PhoneContentBatteryChange = () => {
    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();
    const battery = new Battery(phoneGeneralState.battery, dispatch);

    useEffect(() => {
        return battery.showNoBatteryIcon(false);
    });

    return (
        <div className={phoneContentNoBatteryCss.phoneContentNoBatteryIconsBox}>
            <FontAwesomeIcon icon={["fas", "battery-empty"]} className={phoneContentNoBatteryCss.batteryEmptyIcon}></FontAwesomeIcon>
        </div>
    )
}
