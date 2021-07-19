import {TGeneralState} from "../../../../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../../../../redux/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import {Battery} from "../../../../../../../classes/battery";
import {IBattery, TBatteryPart} from "../../../../../../../classes/interfaces";
import phoneTopBatteryCss from "./phone-top-bar-battery.module.css";

/**
 * Shows the small font awesome battery icon.
 * Represents the state of the battery.
 * It changes according to the stateNumber from battery store.
 */
const PhoneTopBarBattery = () => {
    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();

    const battery: IBattery = new Battery(phoneGeneralState.battery, dispatch);
    const batteryPart = battery.getCurrentBatteryPart();

    return (
        <FontAwesomeIcon icon={["fas", batteryPart.name]}
                         style={{ fontSize: 15, color: batteryPart.color }}
                         className={` ${phoneGeneralState.battery.isCharging ? phoneTopBatteryCss.phoneTopBarBatteryIcon : '' } `}/>
    )
}

export default PhoneTopBarBattery;
