import {Dispatch} from "redux";
import {TMessageItem} from "../redux/reducers/types";
import {TMessagesListType, TMessagesState} from "../redux/interfaces";

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


export interface ICall {
    call(): void;
    setNumber(inputNumber: string): void;
}

export interface IMessage {
    addNewMessage(response: any): void;
    getMessage(messageId: number): TMessageItem| undefined;
    getNewMessages(): TMessageItem[];
    getMessagesListByType(type: TMessagesListType): TMessageItem[];
}

export interface ISound {
    runSound(): void;
}

