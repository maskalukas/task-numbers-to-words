import {  TBrightnessProps} from "../types";
import {TGeneralState} from "../../interfaces";

export const brightnessInitial: TBrightnessProps = {
    number: 1
}

export const brightnessMethods = {
    setBrightness(state: TGeneralState, action: any): void {
        state.brightness.number = action.payload;
    }
}
