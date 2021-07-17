import {TGeneralState} from "../../../../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../../../../redux/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import {Battery} from "../../../../../../../classes/battery";
import {IBattery, TBatteryPart} from "../../../../../../../classes/interfaces";
import {generalStoreActions} from "../../../../../../../redux/slices/general-phone/general-phone-slice";

const PhoneTopBarBattery = () => {
    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();

    const battery: IBattery = new Battery(phoneGeneralState.battery);
    const batteryPart = battery.getCurrentBatteryPart();

    return (
        <FontAwesomeIcon icon={["fas", batteryPart.name]} style={{ fontSize: 15, color: batteryPart.color }}/>
    )
}

export default PhoneTopBarBattery;
