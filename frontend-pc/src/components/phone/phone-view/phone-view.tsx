import phoneViewCss from "./phone-view.module.css";
import PhoneTopBar from "./components/phone-top-bar/phone-top-bar";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {screenRoute as newMessageScreenRoute, PhoneScreenNewMessage} from "../screens/phone-screen-new-message/phone-screen-new-message";
import { PhoneScreenMainMenu, screenRoute as mainMenuScreenRoute } from "../screens/phone-screen-main-menu/phone-screen-main-menu";

const PhoneView = () => {

    return (
        <BrowserRouter>
            <div className={phoneViewCss.phoneView}>
                <PhoneTopBar></PhoneTopBar>
                <Route path={'/' + mainMenuScreenRoute}>
                    <PhoneScreenMainMenu></PhoneScreenMainMenu>
                </Route>
                <Route path={'/' + newMessageScreenRoute}>
                    <PhoneScreenNewMessage></PhoneScreenNewMessage>
                </Route>
            </div>
        </BrowserRouter>
    )
}

export default PhoneView;
