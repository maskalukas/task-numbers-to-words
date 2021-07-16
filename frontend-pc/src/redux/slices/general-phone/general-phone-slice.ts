import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TGeneralState} from "../../interfaces";

const initialState: TGeneralState = {
    isTurnedOn: false,
    brightness: 1,
    airplane: false
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
        }
    }
});

export const { setTurned, setBrightness, setAirplane } = generalPhoneSlice.actions;
export default generalPhoneSlice.reducer;

