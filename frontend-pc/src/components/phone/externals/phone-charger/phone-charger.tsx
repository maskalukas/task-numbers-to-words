import phoneChargerCss from "./phone-charger.module.css";
import React, {BaseSyntheticEvent, SyntheticEvent, useState} from "react";
import {PHONE_ID} from "../../../../constants/elements-ids";

const PhoneCharger = () => {

    const cabelHeightInitial = 40;
    const [positionBottom, setPositionBottom] = useState(80);
    const [cabelHeight, setCabelHeight] = useState(cabelHeightInitial);


    const onMouseDown = (event: any) => {
        const phoneElement = document.getElementById(PHONE_ID) as HTMLElement;
        const phoneElementHeight = phoneElement.offsetHeight;
        const phoneElementTop = phoneElement.offsetTop;
        const phoneElementBottom = phoneElementHeight + phoneElementTop;

        const start = window.innerHeight - event.clientY - positionBottom;
        let cabelTop = 0;

        const onMouseMove = (event: any) => {
            const newPositionBottom = window.innerHeight - event.clientY - start;
            const newCabelHeight = newPositionBottom - cabelHeightInitial;
            cabelTop = newCabelHeight + 32 + 5;
            let newCabelTop = window.innerHeight - cabelTop;
            let isClosest = newCabelTop - phoneElementBottom;

            console.log(isClosest);

            if(newPositionBottom >= 0 && newCabelHeight >= 0 && isClosest >= 0) {
                setPositionBottom(newPositionBottom);
                setCabelHeight(newCabelHeight);
            }
        }
        window.addEventListener("mousemove", onMouseMove);

        const onMouseUp = () => {
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("mousemove", onMouseMove);
        }
        window.addEventListener("mouseup", onMouseUp);
    }

    return (
        <div>
            <div className={phoneChargerCss.charger} onMouseDown={onMouseDown} style={{ bottom: 0 }}>
                <div className={phoneChargerCss.chargerPlug}></div>
                <div className={phoneChargerCss.chargerPlugBox}></div>
                <div className={phoneChargerCss.chargerCable} style={{ height: cabelHeight }}></div>
            </div>
        </div>
    )
}

export default PhoneCharger;