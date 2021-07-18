import {TMessageItem} from "../types";
import {TMessagesState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {stat} from "fs";

export const messagesReducerInitial: TMessagesState = {
    messages: [],
    newMessagesIds: [],
    counterMessages: 0
}


export const messagesReducerMethods = {
    addMessage(state: TMessagesState, action: PayloadAction<TMessageItem>): any {
        const date = new Date();
        state.messages.unshift({
            id: state.counterMessages + 1,
            number: action.payload.number,
            response: action.payload.response,
            time: `${date.getHours()}:${date.getMinutes()}`
        });
    },

    markMessageAsRead(state: TMessagesState, action: PayloadAction<number>): void {
        const indexOfId = state.newMessagesIds.indexOf(action.payload);
        if(indexOfId != -1) {
            state.newMessagesIds.splice(indexOfId,1);
        }
    },

    addNewMessageIds(state: TMessagesState, action: PayloadAction<number>) {
      state.newMessagesIds.unshift(action.payload);
    },

    incrementCounter(state: TMessagesState): void {
        state.counterMessages += 1;
    },

    decrementCounter(state: TMessagesState): void {
        state.counterMessages -= 1;
    }
}
