import {Dispatch} from "redux";

export type TBatteryPartsNames = "battery-empty"|"battery-quarter"|"battery-half"|"battery-three-quarters"|"battery-full";

export type TBatteryPart = {
    name: TBatteryPartsNames;
    color: string;
}
export interface IBattery {
    getCurrentBatteryPart(): TBatteryPart;
    chargeBattery(): void;
    dischargeBattery(): void;
    showNoBatteryIcon(value: boolean): any;
}
