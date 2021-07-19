import {
    TAirplaneReducerProps, TBatteryReducerProps,
    TBrightnessReducerProps,  TCallProgressReducerProps, TMessageItem,
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
}

export type TMessagesState = {
    messages: TMessageItem[],
    newMessagesIds: number[],
    counterMessages: number
}

export type TMessagesListType = "all"|"news";
