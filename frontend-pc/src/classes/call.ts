import {ICall} from "./interfaces";
import {TAirplaneReducerProps, TCallProgressReducerProps, TVolumeReducerProps} from "../redux/reducers/types";
import {TGeneralState} from "../redux/interfaces";
import {Dispatch} from "redux";
import {callsStoreActions} from "../redux/slices/calls-phone-slice";

export class Call implements ICall {

    private volumeState: TVolumeReducerProps;
    private airplaneState: TAirplaneReducerProps;
    private callProgressState: TCallProgressReducerProps;
    private dispatch: Dispatch;
    private number: number | undefined;

    public constructor(
        volumeState: TVolumeReducerProps,
        airplaneState: TAirplaneReducerProps,
        callProgress: TCallProgressReducerProps,
        dispatch: Dispatch) {

        this.volumeState = volumeState;
        this.airplaneState = airplaneState;
        this.callProgressState = callProgress;
        this.dispatch = dispatch;
    }

    public setNumber(number: string|number): void {
        this.number = Number(number);
    }

    public call(): Promise<any> {
        if(!this.airplaneState.status) {
            this.dispatch(callsStoreActions.callProgres.call());
        }

        return new Promise((resolve) => {
            resolve(this.number);
        })
    }

}
