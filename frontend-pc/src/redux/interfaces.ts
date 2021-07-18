import {PayloadAction} from "@reduxjs/toolkit";
import {
    TAirplaneReducerProps, TBatteryReducerProps,
    TBrightnessReducerProps, TCallHistoryItem, TCallProgressReducerProps, TMessageItem,
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

export type TCallsState = {
    callProgress: TCallProgressReducerProps
    history: TCallHistoryItem[];
}

export type TMessagesState = {
    messages: TMessageItem[],
    newMessagesIds: number[],
    counterMessages: number
}
