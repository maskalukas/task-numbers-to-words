import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {BaseSyntheticEvent, useEffect, useLayoutEffect, useState} from "react";
import {faChevronLeft, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import newMessageCss from "./phone-top-bar-new-message-icon.module.css";
import {TMessagesState} from "../../../../../../../redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "../../../../../../../redux/store";

const PhoneTopBarNewMessagesIcon = () => {
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);

    const [newMessage, setNewMessage] = useState(false);

    const onMouseUp = (event: BaseSyntheticEvent) => {
        event.stopPropagation();
    }

    useLayoutEffect(() => {
        if(messagesState.newMessagesIds.length > 0) {
            setNewMessage(true)

            const timeout = setTimeout(() => {
                setNewMessage(false)
            },1500);
            return () => clearTimeout(timeout);
        }

    }, [messagesState.newMessagesIds])

    return (
        <div className={`${newMessageCss.phoneMessageIconBox} `}
             onMouseDown={onMouseUp}
             style={{ color: messagesState.newMessagesIds.length > 0 ? '#bb672c' : '#3f3f3f' }}>
            <span>{ messagesState.newMessagesIds.length }</span>
            <FontAwesomeIcon icon={faEnvelope} className={newMessage ? newMessageCss.phoneMessageIconBoxNewMessageAnime : ''} />
        </div>
    )
}

export default PhoneTopBarNewMessagesIcon;
