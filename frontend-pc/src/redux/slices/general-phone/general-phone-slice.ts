import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TGeneralState} from "../../interfaces";

const initialState: TGeneralState = {
    isTurnedOn: false
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
        }
    }
});

export const { setTurnedOn, setTurnedOff } = generalPhoneSlice.actions;
export default generalPhoneSlice.reducer;

