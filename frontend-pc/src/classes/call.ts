import {ICall} from "./interfaces";
import {
    TAirplaneReducerProps,
    TCallHistoryReducerProps,
    TCallProgressReducerProps,
    TVolumeReducerProps
} from "../redux/reducers/types";
import {Dispatch} from "redux";
import {callsStoreActions} from "../redux/slices/calls-phone-slice";

export class Call implements ICall {

    private volumeState: TVolumeReducerProps;
    private airplaneState: TAirplaneReducerProps;
    private callProgressState: TCallProgressReducerProps;
    private callHistoryState: TCallHistoryReducerProps;
    private dispatch: Dispatch;
    private number: string | undefined;

    public constructor(
        volumeState: TVolumeReducerProps,
        airplaneState: TAirplaneReducerProps,
        callProgress: TCallProgressReducerProps,
        callHistory: TCallHistoryReducerProps,
        dispatch: Dispatch) {

        this.volumeState = volumeState;
        this.airplaneState = airplaneState;
        this.callProgressState = callProgress;
        this.callHistoryState = callHistory;
        this.dispatch = dispatch;
    }

    public setNumber(inputNumber: string): void {
        this.number = inputNumber;
    }

    public call(): Promise<any> {
        if(this.number && !this.airplaneState.status) {
            this.dispatch(callsStoreActions.callProgres.call());
            this.dispatch(callsStoreActions.callHistory.addCall(this.number));
        }

        return new Promise((resolve) => {
            resolve(this.number);
        })
    }

}
