import {TMessageItem} from "../types";
import {TMessagesState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";

/**
 * The initial store for data of messages.
 */
export const messagesReducerInitial: TMessagesState = {
    /**
     * List of all messages.
     */
    messages: [],
    /**
     * List of new message identifiers.
     */
    newMessagesIds: [],
    /**
     * Current counter of messages.
     * It serves as an id for messages.
     */
    counterMessages: 0
}


/**
 * Reducer methods for changes of messages.
 */
export const messagesReducerMethods = {
    /**
     * Adds a message to list of all messages.
     */
    addMessage(state: TMessagesState, action: PayloadAction<TMessageItem>): any {
        const date = new Date();

        state.messages.unshift({
            id: state.counterMessages + 1,
            number: action.payload.number,
            response: action.payload.response,
            time: `${date.getHours()}:${date.getMinutes()}`
        });
    },

    /**
     * Remove an id of message from the list of new messages, if there is.
     * @param action =  The message id that must be removed.
     */
    markMessageAsRead(state: TMessagesState, action: PayloadAction<number>): void {
        const indexOfId = state.newMessagesIds.indexOf(action.payload);

        if(indexOfId != -1) {
            state.newMessagesIds.splice(indexOfId,1);
        }
    },

    /**
     * Adds a new message id to the list of new messages.
     * @param action = The message id that must be added to the ids list.
     */
    addNewMessageIds(state: TMessagesState, action: PayloadAction<number>) {
      state.newMessagesIds.unshift(action.payload);
    },

    /**
     * Incremenets the counter by 1.
     */
    incrementCounter(state: TMessagesState): void {
        state.counterMessages += 1;
    },

    /**
     * Decrements the counter by 1.
     */
    decrementCounter(state: TMessagesState): void {
        state.counterMessages -= 1;
    }
}
