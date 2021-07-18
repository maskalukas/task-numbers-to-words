import {TMessageItem} from "../../../../redux/reducers/types";
import {useEffect, useLayoutEffect, useState} from "react";
import { RouteComponentProps} from "react-router";
import {TMessagesState} from "../../../../redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";
import {Messages} from "../../../../classes/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import messageDetailCss from "./phone-screen-message-detail.module.css";
import {PhoneScreenTopBar} from "../../hoc/phone-screen-top-bar/phone-screen-top-bar";

export const screenRoute = "message-detail";

type TMessageDetailUrlProps = {
    messageId: string;
}

export const PhoneScreenMessageDetail = (props: RouteComponentProps<TMessageDetailUrlProps>) => {
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);
    const [messageItem, setMessageItem] = useState<TMessageItem>()

    useLayoutEffect(() => {
        const message = new Messages(messagesState, null as any);
        const messageIdNumber = Number(props.match.params.messageId);
        setMessageItem(message.getMessage(messageIdNumber));
    },[messageItem]);

    return (
        <div className={ messageDetailCss.phoneMessageDetailWrapper }>
            <PhoneScreenTopBar>
                <div className={ messageDetailCss.phoneMessageDetailTopBar } style={{ height: "100%", width: "100%" }}>
                    <FontAwesomeIcon icon={["fas","user-circle"]}></FontAwesomeIcon>
                    <span>From: { messageItem?.number }</span>
                </div>
            </PhoneScreenTopBar>
            <div style={{ padding: 15, overflowY: "scroll", height: 321 }}>
                <div className={ messageDetailCss.phoneMessageDetailResponseBox }>
                    { messageItem?.response.map((response, index) => <span key={ index }>{ response }</span>) }
                </div>
            </div>
        </div>
    )
}
