import {TMessagesState} from "../../../interfaces";
import {TMessageItem} from "../../types";
import reducer, {messagesStoreActions} from "../../../slices/messages-phone-slice";

let messagesState: TMessagesState;

beforeEach(() => {
    messagesState = {
        messages: [],
        newMessagesIds: [],
        counterMessages: 0
    }
});

test("Should add a first message into the messages array with the id of 1.",() => {
    const newMessage: TMessageItem = {
        number: "23",
        response: ["ad","ae"]
    }

    messagesState = reducer(messagesState, messagesStoreActions.messages.addMessage(newMessage));

    expect(messagesState.messages.length).toBe(1);
    expect(messagesState.messages[0].id).toBe(1);
});

test("Should mark a new message as readed.",() => {
    const newMessageId = 4;
    messagesState = reducer(messagesState, messagesStoreActions.messages.addMessageIds(newMessageId))
    messagesState = reducer(messagesState, messagesStoreActions.messages.markMessageAsRead(newMessageId));

    expect(messagesState.newMessagesIds.length).toBe(0);
});

test("Should add a new message id.",() => {
    const newMessageId = 4;
    messagesState = reducer(messagesState, messagesStoreActions.messages.addMessageIds(newMessageId))

    expect(messagesState.newMessagesIds.length).toBe(1);
    expect(messagesState.newMessagesIds[0]).toBe(newMessageId);
});

test("Should increment the counter by 2.",() => {
    messagesState = reducer(messagesState, messagesStoreActions.messages.incrementCounter());
    messagesState = reducer(messagesState, messagesStoreActions.messages.incrementCounter());

    expect(messagesState.counterMessages).toBe(2);
});

test("Should decrement the counter by 1.",() => {
    messagesState = reducer(messagesState, messagesStoreActions.messages.incrementCounter());
    messagesState = reducer(messagesState, messagesStoreActions.messages.incrementCounter());

    messagesState = reducer(messagesState, messagesStoreActions.messages.decrementCounter());

    expect(messagesState.counterMessages).toBe(1);
});

