import {TGeneralState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {TBrightnessReducerProps} from "../types";

/**
 * The initial store for data of the brightness.
 */
export const brightnessReducerInitial: TBrightnessReducerProps = {
    /**
     * Current brightness.
     * Number that is passed into a css style.
     */
    number: 1
}

/**
 * Reducer methods for changes of the brightness store.
 */
export const brightnessReducerMethods = {
    /**
     * Sets brightness of the phone.
     * @param action = Number of brightness.
     */
    setBrightness(state: TGeneralState, action: PayloadAction<number>): void {
        state.brightness.number = action.payload;
    }
}
