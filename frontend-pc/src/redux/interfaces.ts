import {PayloadAction} from "@reduxjs/toolkit";
import {TAirplaneProps, TBatteryProps, TBrightnessProps, TVolumeProps} from "./core/types";


export type TGeneralState = {
    isTurnedOn: boolean;
    brightness: TBrightnessProps,
    airplane: TAirplaneProps;
    volume: TVolumeProps;
    battery: TBatteryProps;
}


