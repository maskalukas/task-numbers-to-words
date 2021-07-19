/**
 * The properties of the battery store.
 */
export type TBatteryReducerProps = {
    /**
     * The phone is currently charging.
     */
    isCharging: boolean;
    /**
     * Current state of the battery.
     */
    statusNumber: number;
    /**
     * If it is displayed the no battery icon.
     * It will appear when the statusNumber reaches to 0.
     */
    isShowedNoBatteryIcon: boolean;
}

/**
 * The properties of the volume store.
 */
export type TVolumeReducerProps = {
    /**
     * If the volume is on or off.
     * Accordingly to that, then it is possibly
     * hear sound of new messages and clicking on the keyboard.
     */
    status: boolean;
}

/**
 * The properties of the airplane store.
 */
export type TAirplaneReducerProps = {
    /**
     * If it is the airplane mode on.
     */
    status: boolean;
}


/**
 * The properties of the brightness store.
 */
export type TBrightnessReducerProps = {
    /**
     * Current brightness.
     * Number that is passed into a css style.
     */
    number: number;
}

/**
 * The properties of the power store.
 */
export type TPowerReducerProps = {
    /**
     * If the phone is on or off.
     */
    status: boolean;
}

/**
 * The properties of the call progress store.
 */
export type TCallProgressReducerProps = {
    /**
     * If the phone is currently calling.
     * It means, if the phone waits on some response.
     */
    status: boolean;
}


/**
 * Represents the message object.
 */
export type TMessageItem = {
    /**
     * The identification of the message.
     */
    id?: number;
    /**
     * The number that need to be converted.
     */
    number: string;
    /**
     * The response that contains converted words.
     */
    response: string[];
    /**
     * The time when the message has been created.
     */
    time?: string;
}



