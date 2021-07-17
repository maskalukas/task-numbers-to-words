import phoneViewCss from "./phone-view.module.css";
import PhoneKeyboard from "./components/phone-keyboard/phone-keyboard";
import PhoneTopBar from "./components/phone-top-bar/phone-top-bar";
import PhoneMainMenu from "./components/phone-main-menu/phone-main-menu";

const PhoneView = () => {



    const screens = {
        mainMenu: <PhoneMainMenu></PhoneMainMenu>
    }



    return (
        <div className={phoneViewCss.phoneView}>
            <PhoneTopBar></PhoneTopBar>
            {screens.mainMenu}
        </div>
    )
}

export default PhoneView;
