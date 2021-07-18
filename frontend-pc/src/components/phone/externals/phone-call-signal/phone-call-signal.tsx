import {PHONE_ID} from "../../../../constants/elements-ids";
import {useEffect, useLayoutEffect, useState} from "react";
import phoneCallSignalCss from "./phone-call-signal.module.css";

export const PhoneCallSignal = () => {
    const [position, setPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });

    useEffect(() => {
        const phoneElement = document.getElementById(PHONE_ID);
        if(phoneElement) {
            setPosition({
                top: phoneElement.offsetTop,
                left: phoneElement.offsetLeft
            });
        }
    },[position.top, position.left]);

    return (
        <div className={ phoneCallSignalCss.phoneCallSignal } style={{
            top: position.top + 30,
            right: position.left - 55
        }}>
            <span>10101</span>
        </div>
    )
}
