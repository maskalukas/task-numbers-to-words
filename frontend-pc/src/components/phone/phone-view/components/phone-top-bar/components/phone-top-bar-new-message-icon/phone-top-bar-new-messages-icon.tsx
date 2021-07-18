import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {BaseSyntheticEvent, useEffect, useLayoutEffect, useState} from "react";
import {faChevronLeft, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import newMessageCss from "./phone-top-bar-new-message-icon.module.css";
import {TMessagesListType, TMessagesState} from "../../../../../../../redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "../../../../../../../redux/store";
import {useHistory} from "react-router";
import { screenRoute as messagesListScreenRoute } from "../../../../../screens/phone-screen-messages-list/phone-screen-messages-list";

const PhoneTopBarNewMessagesIcon = () => {
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);
    const history = useHistory();
    const [newMessage, setNewMessage] = useState(false);

    const onMouseDown = (event: BaseSyntheticEvent) => {
        event.stopPropagation();

        const messagesListTypeParameter: TMessagesListType = "news";
        history.push({
            pathname: "/" + messagesListScreenRoute + "/" + messagesListTypeParameter
        });
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
             onMouseDown={ onMouseDown }
             style={{ color: messagesState.newMessagesIds.length > 0 ? '#db920c' : '#3f3f3f' }}>
            <span>{ messagesState.newMessagesIds.length }</span>
            <FontAwesomeIcon icon={faEnvelope} className={newMessage ? newMessageCss.phoneMessageIconBoxNewMessageAnime : ''} />
        </div>
    )
}

export default PhoneTopBarNewMessagesIcon;
