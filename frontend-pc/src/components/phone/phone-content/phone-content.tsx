import phoneContentCss from "./phone-content.module.css";
import {useState} from "react";

const PhoneContent = () => {

    // Whether the phone is turned on or off.
    const [ phoneState, setPhoneState ] = useState(false);

    return (<div className={ phoneContentCss.phoneContent }>s</div>)

}

export { PhoneContent }
