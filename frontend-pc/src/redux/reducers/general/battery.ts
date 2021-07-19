import { TGeneralState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {TBatteryReducerProps} from "../types";

/**
 * The initial store for data of the battery.
 */
export const batteryReducerInitial: TBatteryReducerProps = {
    isCharging: false,
    statusNumber:10,
    isShowedNoBatteryIcon: false
}

/**
 * Reducer methods for changes of the battery.
 */
export const batteryReducerMethods = {
    /**
     * Sets whether the phone is currently charging.
     * @param action true => charging, false => not charging.
     */
    setIsChargingOn(state: TGeneralState, action: PayloadAction<boolean>) {
        state.battery.isCharging = action.payload;
    },
    /**
     * Decreases the battery by one.
     */
    decreaseNumberByOne(state: TGeneralState) {
        state.battery.statusNumber -= 1;
    },
    /**
     * Increases the battery by one.
     */
    increaseNumberByOne(state: TGeneralState) {
        state.battery.statusNumber += 1;
    },
    /**
     * Sets whether the battery icon that presents no battery of the phone is displayed.
     * @param action = true => the icon is displayed, false => the icon is not displayed.
     */
    setShowedNoBatteryIcon(state: TGeneralState, action: PayloadAction<boolean>) {
        state.battery.isShowedNoBatteryIcon = action.payload;
    }
}

