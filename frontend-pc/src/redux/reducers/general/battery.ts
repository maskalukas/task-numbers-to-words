import { TGeneralState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {TBatteryReducerProps} from "../types";

export const batteryReducerInitial: TBatteryReducerProps = {
    isCharging: false,
    statusNumber:10,
    isShowedNoBatteryIcon: false
}

export const batteryReducerMethods = {
    setIsChargingOn(state: TGeneralState, action: PayloadAction<boolean>) {
        state.battery.isCharging = action.payload;
    },
    decreaseNumberByOne(state: TGeneralState) {
        state.battery.statusNumber -= 1;
    },
    increaseNumberByOne(state: TGeneralState) {
        state.battery.statusNumber += 1;
    },

    setShowedNoBatteryIcon(state: TGeneralState, action: PayloadAction<boolean>) {
        state.battery.isShowedNoBatteryIcon = action.payload;
    }
}

