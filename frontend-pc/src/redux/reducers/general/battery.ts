import { TGeneralState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {TBatteryReducerProps} from "../types";

export const batteryReducerInitial: TBatteryReducerProps = {
    isCharging: false,
    statusNumber: 62
}

export const batteryReducerMethods = {
    changeIsCharging(state: TGeneralState) {
        state.battery.isCharging = !state.battery.isCharging;
    },
    decreaseNumberByOne(state: TGeneralState) {
        state.battery = { ...state.battery, statusNumber: state.battery.statusNumber - 1 };
    },
    increaseNumberByOne(state: TGeneralState) {
        state.battery.statusNumber += 1;
    }
}

