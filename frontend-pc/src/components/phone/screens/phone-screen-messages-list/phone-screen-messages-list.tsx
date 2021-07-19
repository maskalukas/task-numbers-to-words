import { TMessagesListType, TMessagesState} from "../../../../redux/interfaces";
import {BaseSyntheticEvent, useEffect, useState} from "react";
import { useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";
import {Messages} from "../../../../classes/message";
import {IMessage} from "../../../../classes/interfaces";
import {TMessageItem} from "../../../../redux/reducers/types";
import {RouteComponentProps, useHistory} from "react-router";
import messagesListCss from "./phone-screen-messages-list.module.css";
import {PhoneScreenTopBar} from "../../hoc/phone-screen-top-bar/phone-screen-top-bar";
import { screenRoute as messageDetailScreenRoute } from "../phone-screen-message-detail/phone-screen-message-detail";
import {PhoneScreenTotalNumbers} from "../../hoc/phone-screen-total-numbers/phone-screen-total-numbers";

const messagesTitles = {
    all: "List of all messages",
    news: "List of new messages"
}


type TMessagesListUrlProps = {
    type: TMessagesListType;
}

/**
 * The route that represents this screen.
 */
export const screenRoute = "messages-list";

/**
 * Screen: Shows the list of messages by type: all | news
 * @param props = type = all => Shows all the messages. news => Shows only the news messages.
 * @constructor
 */
export const PhoneScreenMessagesList = (props: RouteComponentProps<TMessagesListUrlProps>) => {
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);
    const history = useHistory();

    // the list of messages
    const [messagesList, setMessagesList] = useState<TMessageItem[]>([]);

    useEffect(() => {
        const messages: IMessage = new Messages(messagesState, null as any);
        setMessagesList(messages.getMessagesListByType(props.match.params.type));
    },[props.match.params.type])

    /**
     * Event: After clicking we will be redirected on the detail of clicked message.
     */
    const onMouseClickMessageItem = (event: BaseSyntheticEvent, messageItem: TMessageItem) => {
        history.push({
            pathname: '/' + messageDetailScreenRoute + "/" + messageItem.id,
        });
    }

    return (
        <div style={{ height: "100%" }}>
            <PhoneScreenTopBar>
                <span className="title">{ messagesTitles[props.match.params.type] }</span>
            </PhoneScreenTopBar>

            <PhoneScreenTotalNumbers length={messagesList.length}></PhoneScreenTotalNumbers>

            <div style={{ padding: 20, height: "289px", overflowY: "auto" }}>
                {
                    messagesList.map(message => {
                        return (
                            <div title={ message.number } key={ message.id } className={ messagesListCss.messageListItem }
                                 onMouseDown={ (e) => onMouseClickMessageItem(e, message)}>
                                <span>{ message.number }</span>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
