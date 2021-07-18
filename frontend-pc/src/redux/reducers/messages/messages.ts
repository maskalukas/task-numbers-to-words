import {TMessageItem} from "../types";
import {TMessagesState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {stat} from "fs";

export const messagesReducerInitial: TMessagesState = {
    messages: [],
    newMessagesIds: [],
    counterMessages: 0
}

for(let x = 0; x < 100; x++) {
    const test: TMessageItem = {
        id: x,
        number: "51265",
        response: [],
        time :"14:15"
    };

    for(let i = 0; i < 80; i++) {
        test.response.push("abc"+i);
    }

    messagesReducerInitial.messages.push(test);
}

messagesReducerInitial.newMessagesIds.push(1,4);


export const messagesReducerMethods = {
    addMessage(state: TMessagesState, action: PayloadAction<TMessageItem>): any {
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
