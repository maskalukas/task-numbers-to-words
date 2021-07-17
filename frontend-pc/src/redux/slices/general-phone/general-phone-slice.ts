import {ActionCreatorWithPayload, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { TGeneralState, } from "../../interfaces";
import {volumeInitial, volumeMethods} from "../../core/general/volume";
import {batteryInitial, batteryMethods} from "../../core/general/battery";
import {airplaneInitial, airplaneMethods} from "../../core/general/airplane";
import {brightnessInitial, brightnessMethods} from "../../core/general/brightness";
import {powerInitial, powerMethods} from "../../core/general/power";

const initialState: TGeneralState = {
    power: powerInitial,
    brightness: brightnessInitial,
    airplane: airplaneInitial,
    volume: volumeInitial,
    battery: batteryInitial
}


const generalPhoneSlice = createSlice({
    name: "general",
    initialState: initialState,
    reducers: {
        // power
        setPowerOn: powerMethods.setOn,
        setPowerOff: powerMethods.setOff,
        // brightness,
        setBrightness: brightnessMethods.setBrightness,
        // airplane
        setAirplaneOn: airplaneMethods.setOn,
        setAirplaneOff: airplaneMethods.setOff,
        // volume
        setVolumeOff: volumeMethods.setOff,
        setVolumeOn: volumeMethods.setOn,
        // battery
        batteryChangeIsCharging: batteryMethods.changeIsCharging
    }
});

export const generalStoreActions  = {
    battery: {
        changeIsCharging: generalPhoneSlice.actions.batteryChangeIsCharging
    },
    volume: {
        setOn: generalPhoneSlice.actions.setVolumeOn,
        setOff: generalPhoneSlice.actions.setVolumeOff
    },
    airplane: {
        setOn: generalPhoneSlice.actions.setAirplaneOn,
        setOff: generalPhoneSlice.actions.setVolumeOff
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

