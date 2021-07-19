import {
    TAirplaneReducerProps, TBatteryReducerProps,
    TBrightnessReducerProps,  TCallProgressReducerProps, TMessageItem,
    TPowerReducerProps,
    TVolumeReducerProps
} from "./reducers/types";

/**
 * The general store type.
 */
export type TGeneralState = {
    /** @inheritDoc */
    power: TPowerReducerProps;

    /** @inheritDoc */
    brightness: TBrightnessReducerProps,

    /** @inheritDoc */
    airplane: TAirplaneReducerProps;

    /** @inheritDoc */
    volume: TVolumeReducerProps;

    /** @inheritDoc */
    battery: TBatteryReducerProps;
}

/**
 * The call store type.
 */
export type TCallsState = {
    /** @inheritDoc */
    callProgress: TCallProgressReducerProps;
}

/**
 * The message story type.
 */
export type TMessagesState = {
    /**
     * List of all messages.
     */
    messages: TMessageItem[];
    /**
     * List of new message identifiers.
     */
    newMessagesIds: number[];
    /**
     * Current counter of messages.
     * It serves as an id for messages.
     */
    counterMessages: number;
}

/**
 * Represents what the list of messages is type of.
 *  all  => all messages
 *  news => news messages
 */
export type TMessagesListType = "all"|"news";
