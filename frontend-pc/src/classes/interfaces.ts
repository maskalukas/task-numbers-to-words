import {TMessageItem} from "../redux/reducers/types";
import {TMessagesListType} from "../redux/interfaces";

/**
 * The parts of battery.
 * According to that, then it is placed in font-awesome icon
 * for the changing battery icon at top bar during discharging and charging.
 */
export type TBatteryPartsNames = "battery-empty"|"battery-quarter"|"battery-half"|"battery-three-quarters"|"battery-full";

/**
 * The battery part object.
 */
export type TBatteryPart = {
    /** @inheritDoc */
    name: TBatteryPartsNames;

    /**
     * Every part has some color according to the numberStatus
     * from the battery store.
     */
    color: string;
}

/**
 * Interface for the battery class.
 * Manages core about the battery.
 */
export interface IBattery {
    /**
     * Returns the current battery part according to the numberStatus.
     */
    getCurrentBatteryPart(): TBatteryPart;

    /**
     * Charges (increases the numberStatus) the battery every one second.
     */
    chargeBattery(): void;

    /**
     * Dischargees (decreases the numberStatus) the battery every one second.
     */
    dischargeBattery(): void;

    /**
     * Accroding to passed value is either the no battery icon displayed or not.
     * @param value = true => the icon is displayed, false = the icon is not displayed.
     */
    showNoBatteryIcon(value: boolean): any;
}

/**
 * Interface for the call class.
 * Manages core about calling.
 */
export interface ICall {
    /**
     * Sets the number that will be send on the server.
     * @param inputNumber = The number that will be send.
     */
    setNumber(inputNumber: string): void;

    /**
     * Calls (sends a request on the server) for converting number to words.
     * @param filter = if it is true, then the filter will be used for real worlds.
     */
    call(filter: boolean): Promise<string[]> | undefined;

    /**
     * Cancels current request.
     */
    cancelCall(): void;
}

/**
 * Interface for the message class.
 * Manages core about messages.
 */
export interface IMessage {
    /**
     * Adds a new message.
     * @param response = The converted words.
     * @param number = The number that was used for converting.
     */
    addNewMessage(response: string, number: string): void;

    /**
     * Returns some message by its id.
     * @param messageId = The message identification to obtain the message.
     */
    getMessage(messageId: number): TMessageItem| undefined;

    /**
     * Returns a list of the new messages.
     */
    getNewMessages(): TMessageItem[];

    /**
     * Returns a list of the messages by specified type.
     * @param type = The list type.
     */
    getMessagesListByType(type: TMessagesListType): TMessageItem[];

    /**
     * Marks some messages as readed.
     * @param messageId = The message identification that must be marked as read.
     */
    markMessageAsRead(messageId: number): void
}

/**
 * Interface for the sound class.
 * Manages core about sound.
 */
export interface ISound {
    /**
     * Triggers sound if it is not muted.
     */
    runSound(): void;
}

