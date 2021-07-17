import phoneCss from "../phone.module.css";
import phoneLayoutCss from "./phone-layout.module.css"
import {PhoneHeader} from "../phone-header/phone-header";
import {PhonePowerButton} from "../phone-power-button/phone-power-button";
import {PhoneContent} from "../phone-content/phone-content";
import {PHONE_ID} from "../../../constants/elements-ids";
import React, {useRef} from "react";


const PhoneLayout = () => {
    return (
        <div id={PHONE_ID} className={ `${phoneCss.phoneEdge} ${phoneLayoutCss.phoneLayout}` }>
            <PhoneHeader></PhoneHeader>
            <PhonePowerButton></PhonePowerButton>
            <PhoneContent></PhoneContent>
        </div>
    )
}


export  { PhoneLayout };
