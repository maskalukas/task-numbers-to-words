import {TGeneralState} from "../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";

export type TBatteryProps = {
    isCharging: boolean;
}

export type TVolumeProps = {
    status: boolean;
}


export type TAirplaneProps = {
    status: boolean;
}


export type TBrightnessProps = {
    number: number;
}

export type TPowerProps = {
    status: boolean;
}
