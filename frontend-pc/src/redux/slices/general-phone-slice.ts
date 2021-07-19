import { createSlice} from "@reduxjs/toolkit";
import { TGeneralState, } from "../interfaces";
import {powerReducerInitial, powerReducerMethods} from "../reducers/general/power";
import {brightnessReducerInitial, brightnessReducerMethods} from "../reducers/general/brightness";
import {airplaneReducerInitial, airplaneReducerMethods} from "../reducers/general/airplane";
import {volumeReducerInitial, volumeReducerMethods} from "../reducers/general/volume";
import {batteryReducerInitial, batteryReducerMethods} from "../reducers/general/battery";


const initialState: TGeneralState = {
    power: powerReducerInitial,
    brightness: brightnessReducerInitial,
    airplane: airplaneReducerInitial,
    volume: volumeReducerInitial,
    battery: batteryReducerInitial
}


const generalPhoneSlice = createSlice({
    name: "general",
    initialState: initialState,
    reducers: {
        // power
        setPowerOn: powerReducerMethods.setOn,
        setPowerOff: powerReducerMethods.setOff,
        // brightness,
        setBrightness: brightnessReducerMethods.setBrightness,
        // airplane
        setAirplaneOn: airplaneReducerMethods.setOn,
        setAirplaneOff: airplaneReducerMethods.setOff,
        // volume
        setVolumeOff: volumeReducerMethods.setOff,
        setVolumeOn: volumeReducerMethods.setOn,
        // battery
        batterySetIsChargingOn: batteryReducerMethods.setIsChargingOn,
        batteryIncreaseNumberByOne: batteryReducerMethods.increaseNumberByOne,
        batteryDecreaseNumberByOne: batteryReducerMethods.decreaseNumberByOne,
        batterySetShowedNoBatteryIcon: batteryReducerMethods.setShowedNoBatteryIcon
    }
});



export const generalStoreActions  = {
    battery: {
        setIsChargingOn: generalPhoneSlice.actions.batterySetIsChargingOn,
        increaseNumberByOne: generalPhoneSlice.actions.batteryIncreaseNumberByOne,
        decreaseNumberByOne: generalPhoneSlice.actions.batteryDecreaseNumberByOne,
        setShowedNoBatteryIcon: generalPhoneSlice.actions.batterySetShowedNoBatteryIcon
    },
    volume: {
        setOn: generalPhoneSlice.actions.setVolumeOn,
        setOff: generalPhoneSlice.actions.setVolumeOff
    },
    airplane: {
        setOn: generalPhoneSlice.actions.setAirplaneOn,
        setOff: generalPhoneSlice.actions.setAirplaneOff
    },
    brightness: {
        setBrightness: generalPhoneSlice.actions.setBrightness
    },
    power: {
        setOn: generalPhoneSlice.actions.setPowerOn,
        setOff: generalPhoneSlice.actions.setPowerOff
    }
}

export default generalPhoneSlice.reducer;

