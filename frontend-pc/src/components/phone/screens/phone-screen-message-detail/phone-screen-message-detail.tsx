import {TMessageItem} from "../../../../redux/reducers/types";
import {useEffect, useLayoutEffect, useState} from "react";
import { RouteComponentProps} from "react-router";
import {TMessagesState} from "../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";
import {Messages} from "../../../../classes/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import messageDetailCss from "./phone-screen-message-detail.module.css";
import {PhoneScreenTopBar} from "../../hoc/phone-screen-top-bar/phone-screen-top-bar";
import {PhoneScreenTotalNumbers} from "../../hoc/phone-screen-total-numbers/phone-screen-total-numbers";
import {IMessage} from "../../../../classes/interfaces";

/**
 * The route that represents this screen.
 */
export const screenRoute = "message-detail";

/**
 *
 */
type TMessageDetailUrlProps = {
    messageId: string;
}
/**
 * Screen: The defail of certain message
 * @param props = messageId => According to id the component can find the message.
 */
export const PhoneScreenMessageDetail = (props: RouteComponentProps<TMessageDetailUrlProps>) => {
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);
    const dispatch = useDispatch();
    // The message for this detail.
    const [messageItem, setMessageItem] = useState<TMessageItem>();

    useLayoutEffect(() => {
        const message: IMessage = new Messages(messagesState, dispatch);
        const messageIdNumber = Number(props.match.params.messageId);

        setMessageItem(message.getMessage(messageIdNumber));
        message.markMessageAsRead(messageIdNumber);

        console.log(message.getMessage(messageIdNumber), messagesState);
    },[messageItem]);

    return (
        <div className={ messageDetailCss.phoneMessageDetailWrapper }>
            <PhoneScreenTopBar>
                <div className={ messageDetailCss.phoneMessageDetailTopBar } style={{ height: "100%", width: "100%" }}>
                    <FontAwesomeIcon icon={["fas","user-circle"]}></FontAwesomeIcon>
                    <span className={ messageDetailCss.phoneMessageDetailTitle } title={ messageItem?.number }>From: { messageItem?.number }</span>
                </div>
            </PhoneScreenTopBar>

            <PhoneScreenTotalNumbers length={messageItem?.response.length as number}></PhoneScreenTotalNumbers>

            <div style={{ padding: 15, overflowY: "scroll", height: 299 }}>
                <div className={ messageDetailCss.phoneMessageDetailResponseBox }>
                    { messageItem?.response.map((response, index) => {
                        return <span  key={ index } title={ response } style={{ overflow: "hidden" }}>{ response }</span>
                    })}
                </div>
            </div>
        </div>
    )
}
