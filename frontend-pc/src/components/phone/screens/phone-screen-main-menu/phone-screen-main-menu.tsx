import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useCallback, useMemo} from "react";
import {IconName} from "@fortawesome/fontawesome-common-types";
import phoneMainMenuCss from "./phone-screen-main-menu.module.css";
import {useHistory} from "react-router";
import { screenRoute as newMessageScreenRoute } from "../phone-screen-new-message/phone-screen-new-message";

export const screenRoute = "main-menu";

const buttons: { icon: IconName, link: string }[] = [{
    icon: "envelope",
    link: newMessageScreenRoute
},{
    icon: "inbox",
    link: "/"
}]

export const PhoneScreenMainMenu = () => {

    const history = useHistory();
    const handleOnClick = (event: MouseEvent, route: string) => history.push('/' + route);


    return (
        <div className={ phoneMainMenuCss.phoneMainMenuWrapper }>
            {buttons.map((button, i) => {
                return <FontAwesomeIcon key={i}
                                icon={["fas", button.icon]}
                                className={phoneMainMenuCss.mainMenuBtn}
                                onMouseDown={(e: any) => { handleOnClick(e, button.link)}}/>
            })}
        </div>
    )
}

