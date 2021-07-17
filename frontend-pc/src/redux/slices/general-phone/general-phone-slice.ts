import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TGeneralState} from "../../interfaces";
import {batteryMethods, batteryProps} from "../../reducers/battery";

const initialState: TGeneralState = {
    isTurnedOn: false,
    brightness: 1,
    airplane: false,
    volume: true,
    battery: batteryProps
}


const generalPhoneSlice = createSlice({
    name: "general",
    initialState: initialState,
    reducers: {
        setTurned(state: TGeneralState, action: PayloadAction<boolean>) {
            state.isTurnedOn = action.payload
        },
        setBrightness(state: TGeneralState, action: PayloadAction<number>) {
            state.brightness = action.payload;
        },
        setAirplane(state: TGeneralState, action: PayloadAction<boolean>) {
            state.airplane = action.payload;
        },
        setVolume(state: TGeneralState, action: PayloadAction<boolean>) {
            state.volume = action.payload;
        },
        changeIsCharging: batteryMethods.changeIsCharging
    }
});

export const generalStoreActions = {
    battery: {
        changeIsCharging: generalPhoneSlice.actions.changeIsCharging
    },
    volume: {
        setVolume: generalPhoneSlice.actions.setVolume
    },
    airplane: {
        setAirplane: generalPhoneSlice.actions.setAirplane
    },
    brightness: {
        setBrightness: generalPhoneSlice.actions.setBrightness
    },
    power: {
        setTurned: generalPhoneSlice.actions.setTurned
    }
}
export default generalPhoneSlice.reducer;

