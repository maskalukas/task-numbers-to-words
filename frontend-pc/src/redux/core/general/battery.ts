import { TGeneralState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import { TBatteryProps} from "../types";

export const batteryInitial: TBatteryProps = {
    isCharging: false,
}

export const batteryMethods = {
    changeIsCharging(state: TGeneralState) {
        state.battery.isCharging = !state.battery.isCharging;
    },
}

