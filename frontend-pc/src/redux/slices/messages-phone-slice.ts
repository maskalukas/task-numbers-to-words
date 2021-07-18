import {createSlice} from "@reduxjs/toolkit";
import {messagesReducerInitial, messagesReducerMethods} from "../reducers/messages/messages";

const messagesPhoneSlice = createSlice({
    name: "messages",
    initialState: messagesReducerInitial,
    reducers: {
        // messages
        messagesAddMessage: messagesReducerMethods.addMessage,
        messagesAddMessageIds: messagesReducerMethods.addNewMessageIds,
        messagesIncrementCounter: messagesReducerMethods.incrementCounter,
        messagesDecrementCounter: messagesReducerMethods.decrementCounter
    }
});

export const messagesStoreActions  = {
    messages: {
        addMessage: messagesPhoneSlice.actions.messagesAddMessage,
        addMessageIds: messagesPhoneSlice.actions.messagesAddMessageIds,
        incrementCounter: messagesPhoneSlice.actions.messagesIncrementCounter,
        decrementCounter: messagesPhoneSlice.actions.messagesDecrementCounter,
    }
}

export default messagesPhoneSlice.reducer;
