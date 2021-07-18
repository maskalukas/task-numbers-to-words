import {TMessagesListType, TMessagesState} from "../redux/interfaces";
import {Dispatch} from "redux";
import {messagesStoreActions} from "../redux/slices/messages-phone-slice";
import {IMessage} from "./interfaces";
import {TMessageItem} from "../redux/reducers/types";

export class Messages implements IMessage {

    private messagesState: TMessagesState;
    private dispatch: Dispatch;


    public constructor(messagesState: TMessagesState, dispatch: Dispatch) {
        this.messagesState = messagesState;
        this.dispatch = dispatch;
    }

    public addNewMessage(response: any, number: string): void {
        this.dispatch(messagesStoreActions.messages.addMessage({ number: number, response: response }));
        this.dispatch(messagesStoreActions.messages.addMessageIds(this.messagesState.counterMessages+1));
        this.dispatch(messagesStoreActions.messages.incrementCounter());
    }

    public getMessage(messageId: number): TMessageItem | undefined {
        return  this.messagesState.messages.find(msg => msg.id === messageId);
    }

    public getNewMessages(): TMessageItem[] {
        const newMessages: TMessageItem[] = [];

        for(let i = 0; i < this.messagesState.newMessagesIds.length; i++) {
            const message = this.messagesState.messages.find(message => message.id === this.messagesState.newMessagesIds[i]);

            if(message) {
                newMessages.push(message);
            }
        }

        return newMessages;
    }

    public getMessagesListByType(type: TMessagesListType): TMessageItem[] {
        switch (type) {
            case "all": return this.messagesState.messages;
            case "news": return this.getNewMessages();
        }
    }


}
