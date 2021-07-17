import {TGeneralState} from "../../../../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../../../../redux/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import {batteryMethods} from "../../../../../../../redux/core/general/battery";
import { generalStoreActions } from "../../../../../../../redux/slices/general-phone/general-phone-slice";

const PhoneTopBarBattery = () => {
    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();



    return (
        // <FontAwesomeIcon icon={["fas", "battery-full"]} style={{ fontSize: 15, color: '009557' }}/>
        <div></div>
    )
}

export default PhoneTopBarBattery;
