import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useCallback, useMemo} from "react";
import {IconName} from "@fortawesome/fontawesome-common-types";
import phoneMainMenuCss from "./phone-screen-main-menu.module.css";
import {useHistory} from "react-router";
import { screenRoute as newCallScreenRoute } from "../phone-screen-new-call/phone-screen-new-call";
import { screenRoute as messagesListScreenRoute } from "../phone-screen-messages-list/phone-screen-messages-list";
import {TMessagesListType} from "../../../../redux/interfaces";

export const screenRoute = "main-menu";
const messagesListTypeParameter: TMessagesListType = "all";

const buttons: { icon: IconName, link: string }[] = [{
    icon: "phone",
    link: newCallScreenRoute
},{
    icon: "envelope",
    link: messagesListScreenRoute + "/" + messagesListTypeParameter
}]

export const PhoneScreenMainMenu = () => {

    const history = useHistory();
    const handleOnClick = (event: MouseEvent, route: string) => history.push({
        pathname: '/' + route,
    });


    return (
        <div className={ phoneMainMenuCss.phoneMainMenuWrapper }>
            <div>
                {buttons.map((button, i) => {
                    return <FontAwesomeIcon key={i}
                                            icon={["fas", button.icon]}
                                            className={phoneMainMenuCss.mainMenuBtn}
                                            onMouseDown={(e: any) => { handleOnClick(e, button.link)}}/>
                })}
            </div>
        </div>
    )
}

