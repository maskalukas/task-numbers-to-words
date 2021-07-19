import {ICall, IMessage, ISound} from "./interfaces";

import {Dispatch} from "redux";
import {callsStoreActions} from "../redux/slices/calls-phone-slice";
import {CallService} from "../services/call-service";
import {TCallsState, TGeneralState, TMessagesState} from "../redux/interfaces";
import {Messages} from "./message";
import Sound from "./sound";
import {ICallService} from "../services/interfaces";
import {CallAbort} from "../services/call-abort";

/** @inheritDoc */
export class Call implements ICall {
    /** @inheritDoc */
    private generalState: TGeneralState;
    /** @inheritDoc */
    private callState: TCallsState;
    /** @inheritDoc */
    private messagesState: TMessagesState;
    /** @inheritDoc */
    private dispatch: Dispatch;
    /** The number that will be converted */
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

    /** @inheritDoc */
    public setNumber(inputNumber: string): void {
        this.number = inputNumber;
    }

    /** @inheritDoc */
    public call(filter: boolean): Promise<string[]> | undefined {
        if(this.number && !this.generalState.airplane.status) {
            this.dispatch(callsStoreActions.callProgres.call());

            const callService: ICallService = new CallService();
            let callServicePromise: Promise<string[]>;

            // send the request
            if(filter) {
                callServicePromise = callService.callWithFilter(this.number)
            } else {
                callServicePromise = callService.callWithoutFilter(this.number);
            }

            return callServicePromise.then((response) => {
                console.log("Response:", response);

                // save the message
                const sms: IMessage = new Messages(this.messagesState, this.dispatch);
                sms.addNewMessage(response.join(""), this.number as string);

                // trigger sms sound
                const sound: ISound = new Sound(this.generalState.volume, "sms-short.mp3");
                sound.runSound();

                this.dispatch(callsStoreActions.callProgres.cancelCall());

                return response;
            });
        }

        return undefined;
    }

    /** @inheritDoc */
    public cancelCall(): void {
        this.dispatch(callsStoreActions.callProgres.cancelCall());
        CallAbort.getSingleton().abortRequest();
    }


}
