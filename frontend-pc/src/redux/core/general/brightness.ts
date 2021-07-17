import {  TBrightnessProps} from "../types";
import {TGeneralState} from "../../interfaces";
import {ActionCreatorWithPayload, PayloadAction} from "@reduxjs/toolkit";

export const brightnessInitial: TBrightnessProps = {
    number: 1
}

export const brightnessMethods = {
    setBrightness(state: TGeneralState, action: PayloadAction<number>): void {
        state.brightness.number = action.payload;
    }
}
