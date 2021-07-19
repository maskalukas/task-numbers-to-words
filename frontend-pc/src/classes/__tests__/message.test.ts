import {Messages} from "../message";
import {TMessageItem} from "../../redux/reducers/types";


let message: Messages;

beforeEach(() => {
    message = new Messages({
        messages: [{
            id: 4,
            number: "4444",
            response: ["csa","das"]
        },{
            id: 2,
            number: "2222",
            response: ["csa","das"]
        },{
            id: 3,
            number: "3333",
            response: []
        }],
        newMessagesIds: [2,3],
        counterMessages: 4
    }, null as any)
})

test("Should return the message with id 4.",() => {
    const searchedMessage = message.getMessage(4);
    expect(searchedMessage?.number).toBe("4444")
});


test("Should return the new messages",() => {
    const newMessages: TMessageItem[] = message.getNewMessages();
    expect(newMessages.length).toBe(2);
});

test("Should return the message list by the right type.",() => {
    expect(message.getMessagesListByType("all").length).toBe(3);
    expect(message.getMessagesListByType("news").length).toBe(2);
})
