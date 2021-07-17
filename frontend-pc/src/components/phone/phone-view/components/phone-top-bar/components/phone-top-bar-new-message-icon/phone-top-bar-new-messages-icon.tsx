import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {BaseSyntheticEvent} from "react";
import {faChevronLeft, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import newMessageCss from "./phone-top-bar-new-message-icon.module.css";

const PhoneTopBarNewMessagesIcon = () => {
    const onMouseUp = (event: BaseSyntheticEvent) => {
        event.stopPropagation();
    }

    return (
        <div className={newMessageCss.phoneMessageIconBox} onMouseDown={onMouseUp}>
            <span>0</span>
            <FontAwesomeIcon icon={faEnvelope}/>
        </div>
    )
}

export default PhoneTopBarNewMessagesIcon;
