import {PayloadAction} from "@reduxjs/toolkit";

export type IBatteryState = {
    status: number;
    isCharging: boolean;
}

export type TGeneralState = {
    isTurnedOn: boolean;
    brightness: number,
    airplane: boolean;
    volume: boolean;
    battery: TBatteryProps;
}



export type TBatteryProps = {
    isCharging: boolean;
}
