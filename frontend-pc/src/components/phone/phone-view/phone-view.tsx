import phoneViewCss from "./phone-view.module.css";
import PhoneKeyboard from "./components/phone-keyboard/phone-keyboard";
import PhoneTopBar from "./components/phone-top-bar/phone-top-bar";

const PhoneView = () => {
    return (
        <div className={phoneViewCss.phoneView}>
            <PhoneTopBar></PhoneTopBar>
            <PhoneKeyboard></PhoneKeyboard>
        </div>
    )
}

export default PhoneView;
