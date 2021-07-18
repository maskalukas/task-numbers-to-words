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
    addMessage(state: TMessagesState, action: PayloadAction<TMessageItem>): void {
        const date = new Date();

        state.messages.push({
            id: state.counterMessages + 1,
            number: action.payload.number,
            response: action.payload.response,
            time: `${date.getHours()}:${date.getMinutes()}`
        });
    },

    addNewMessageIds(state: TMessagesState, action: PayloadAction<number>) {
      state.newMessagesIds.push(action.payload);
    },

    incrementCounter(state: TMessagesState): void {
        state.counterMessages += 1;
    },

    decrementCounter(state: TMessagesState): void {
        state.counterMessages -= 1;
    }
}
