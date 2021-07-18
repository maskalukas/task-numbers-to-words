

export type TBatteryReducerProps = {
    isCharging: boolean;
    statusNumber: number;
    isShowedNoBatteryIcon: boolean;
}

export type TVolumeReducerProps = {
    status: boolean;
}


export type TAirplaneReducerProps = {
    status: boolean;
}


export type TBrightnessReducerProps = {
    number: number;
}

export type TPowerReducerProps = {
    status: boolean;
}

export type TCallProgressReducerProps = {
    status: boolean;
}

export type TCallHistoryReducerProps = TCallHistoryItem[];

export type TCallHistoryItem = {
    number: string;
    time: string;
}

export type TMessageItem = {
    id?: number;
    number: string;
    response: string[];
    time?: string;
}



