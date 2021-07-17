import phoneViewCss from "./phone-view.module.css";
import PhoneTopBar from "./components/phone-top-bar/phone-top-bar";
import {BrowserRouter, Route, Router} from "react-router-dom";
import { PhoneScreenMainMenu, screenRoute as mainMenuScreenRoute } from "../screens/phone-screen-main-menu/phone-screen-main-menu";
import {PhoneScreenNewCall, screenRoute as newCallScreenRoute} from "../screens/phone-screen-new-call/phone-screen-new-call";

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
            </div>
        </BrowserRouter>
    )
}

export default PhoneView;
