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
    setNumber(inputNumber: string): void;
    call(filter: boolean): void;
}

export interface IMessage {
    addNewMessage(response: any, number: string): void;
    getMessage(messageId: number): TMessageItem| undefined;
    getNewMessages(): TMessageItem[];
    getMessagesListByType(type: TMessagesListType): TMessageItem[];
    markMessageAsRead(messageId: number): void
}

export interface ISound {
    runSound(): void;
}

