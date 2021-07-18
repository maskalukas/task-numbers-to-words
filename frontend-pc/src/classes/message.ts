import {TMessagesState} from "../redux/interfaces";
import {Dispatch} from "redux";
import {messagesStoreActions} from "../redux/slices/messages-phone-slice";
import {IMessage} from "./interfaces";
import {TMessageItem} from "../redux/reducers/types";

export class Message implements IMessage {

    private messagesState: TMessagesState;
    private dispatch: Dispatch;


    public constructor(messagesState: TMessagesState, dispatch: Dispatch) {
        this.messagesState = messagesState;
        this.dispatch = dispatch;
    }

    public addNewMessage(response: any): void {
        this.dispatch(messagesStoreActions.messages.addMessage({ number: "23", response: "cus" }));
        this.dispatch(messagesStoreActions.messages.addMessageIds(this.messagesState.counterMessages+1));
        this.dispatch(messagesStoreActions.messages.incrementCounter());
    }




}
