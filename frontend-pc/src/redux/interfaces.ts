import {PayloadAction} from "@reduxjs/toolkit";
import {TAirplaneProps, TBatteryProps, TBrightnessProps, TPowerProps, TVolumeProps} from "./core/types";


export type TGeneralState = {
    power: TPowerProps;
    brightness: TBrightnessProps,
    airplane: TAirplaneProps;
    volume: TVolumeProps;
    battery: TBatteryProps;
}


