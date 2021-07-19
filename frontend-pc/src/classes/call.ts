import {ICall, IMessage, ISound} from "./interfaces";
import {
    TAirplaneReducerProps,
    TCallHistoryReducerProps,
    TCallProgressReducerProps,
    TVolumeReducerProps
} from "../redux/reducers/types";
import {Dispatch} from "redux";
import {callsStoreActions} from "../redux/slices/calls-phone-slice";
import {CallService} from "../services/call-service";
import {TCallsState, TGeneralState, TMessagesState} from "../redux/interfaces";
import {Messages} from "./message";
import Sound from "./sound";

export class Call implements ICall {

    private generalState: TGeneralState;
    private callState: TCallsState;
    private messagesState: TMessagesState;
    private dispatch: Dispatch;
    private number: string | undefined;

    public constructor(
        generalState: TGeneralState,
        callState: TCallsState,
        messagesState: TMessagesState,
        dispatch: Dispatch) {

        this.generalState = generalState;
        this.callState = callState;
        this.messagesState = messagesState;
        this.dispatch = dispatch;
    }

    public setNumber(inputNumber: string): void {
        this.number = inputNumber;
    }

    public call(): boolean {
        if(this.number && !this.generalState.airplane.status) {
            this.dispatch(callsStoreActions.callProgres.call());
            this.dispatch(callsStoreActions.callHistory.addCall(this.number));

            const callService = new CallService();
            callService.call(this.number)
                .then((response) => {
                    console.log(response);
                    const sms: IMessage = new Messages(this.messagesState, this.dispatch);
                    sms.addNewMessage(response, this.number as string);

                    const sound: ISound = new Sound(this.generalState.volume, "sms-short.mp3");
                    sound.runSound();
                })
            return true;
        }

        return false
    }

}
