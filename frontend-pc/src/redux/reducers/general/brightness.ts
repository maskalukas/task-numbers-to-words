import {TGeneralState} from "../../interfaces";
import {ActionCreatorWithPayload, PayloadAction} from "@reduxjs/toolkit";
import {TBrightnessReducerProps} from "../types";

export const brightnessReducerInitial: TBrightnessReducerProps = {
    number: 1
}

export const brightnessReducerMethods = {
    setBrightness(state: TGeneralState, action: PayloadAction<number>): void {
        state.brightness.number = action.payload;
    }
}
