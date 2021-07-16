import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TGeneralState} from "../../interfaces";

const initialState: TGeneralState = {
    isTurnedOn: false,
    brightness: 1
}

const generalPhoneSlice = createSlice({
    name: "general",
    initialState: initialState,
    reducers: {
        setTurnedOn(state: TGeneralState, action: PayloadAction) {
            state.isTurnedOn = true
        },
        setTurnedOff(state: TGeneralState, action: PayloadAction) {
            state.isTurnedOn = false;
        },
        setBrightness(state: TGeneralState, action: PayloadAction<number>) {
            state.brightness = action.payload;
        }
    }
});

export const { setTurnedOn, setTurnedOff, setBrightness } = generalPhoneSlice.actions;
export default generalPhoneSlice.reducer;

