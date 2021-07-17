import {PayloadAction} from "@reduxjs/toolkit";
import {
    TAirplaneReducerProps, TBatteryReducerProps,
    TBrightnessReducerProps,
    TPowerReducerProps,
    TVolumeReducerProps
} from "./reducers/types";


export type TGeneralState = {
    power: TPowerReducerProps;
    brightness: TBrightnessReducerProps,
    airplane: TAirplaneReducerProps;
    volume: TVolumeReducerProps;
    battery: TBatteryReducerProps
}


