import {faWifi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IconName} from "@fortawesome/fontawesome-common-types";
import phoneMainMenuCss from "./phone-main-menu.module.css";

const PhoneMainMenu = () => {

    const buttons: { icon: IconName }[] = [{
        icon: "envelope"
    },{
        icon: "inbox"
    }]


    return (
        <div className={ phoneMainMenuCss.phoneMainMenuWrapper }>
            {buttons.map((button, i) => {
                return <FontAwesomeIcon icon={["fas", button.icon]} className={phoneMainMenuCss.mainMenuBtn}></FontAwesomeIcon>
            })}
        </div>
    )
}

export default PhoneMainMenu;
