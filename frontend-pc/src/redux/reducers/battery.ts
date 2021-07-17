import {TBatteryProps, TGeneralState} from "../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";

export const batteryProps: TBatteryProps = {
    isCharging: false,
}

export const batteryMethods = {
    changeIsCharging(state: TGeneralState, payload: any) {
        state.battery.isCharging = !state.battery.isCharging;
    }
}

