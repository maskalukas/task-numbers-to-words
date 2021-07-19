import phoneViewCss from "./phone-view.module.css";
import PhoneTopBar from "./components/phone-top-bar/phone-top-bar";
import {BrowserRouter, Redirect, Route, Router} from "react-router-dom";
import { PhoneScreenMainMenu, screenRoute as mainMenuScreenRoute } from "../screens/phone-screen-main-menu/phone-screen-main-menu";
import {PhoneScreenNewCall, screenRoute as newCallScreenRoute} from "../screens/phone-screen-new-call/phone-screen-new-call";
import {
    PhoneScreenMessagesList,
    screenRoute as messagesListScreenRoute
} from "../screens/phone-screen-messages-list/phone-screen-messages-list";

import {
    PhoneScreenMessageDetail,
    screenRoute as messageScreenRoute
} from "../screens/phone-screen-message-detail/phone-screen-message-detail";
import React, {useEffect} from "react";

const PhoneView = () => {


    return (
        <React.Fragment>
            <div className={phoneViewCss.phoneView}>
                <PhoneTopBar></PhoneTopBar>

                <Redirect from={"/"} to={"/"+ mainMenuScreenRoute}></Redirect>
                <Route  path={'/' + mainMenuScreenRoute}>
                    <PhoneScreenMainMenu></PhoneScreenMainMenu>
                </Route>

                <Route path={'/' + newCallScreenRoute}>
                    <PhoneScreenNewCall></PhoneScreenNewCall>
                </Route>

                <Route path={ '/'+ messageScreenRoute+'/:messageId' } component={ PhoneScreenMessageDetail }/>
                <Route path={ '/'+  messagesListScreenRoute + '/:type' } component={ PhoneScreenMessagesList } />
            </div>
        </React.Fragment>
    )
}

export default PhoneView;
