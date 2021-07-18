import phoneViewCss from "./phone-view.module.css";
import PhoneTopBar from "./components/phone-top-bar/phone-top-bar";
import {BrowserRouter, Route, Router} from "react-router-dom";
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

const PhoneView = () => {

    return (
        <BrowserRouter>
            <div className={phoneViewCss.phoneView}>
                <PhoneTopBar></PhoneTopBar>
                <Route path={'/' + mainMenuScreenRoute}>
                    <PhoneScreenMainMenu></PhoneScreenMainMenu>
                </Route>
                <Route path={'/' + newCallScreenRoute}>
                    <PhoneScreenNewCall></PhoneScreenNewCall>
                </Route>

                <Route path={ '/'+ messageScreenRoute+'/:messageId' } component={ PhoneScreenMessageDetail }/>
                <Route path={ '/'+  messagesListScreenRoute + '/:type' } component={ PhoneScreenMessagesList } />
            </div>
        </BrowserRouter>
    )
}

export default PhoneView;
