import phoneChargerCss from "./phone-charger.module.css";
import React, {BaseSyntheticEvent, SyntheticEvent, useEffect, useState} from "react";
import {PHONE_ID} from "../../../../constants/elements-ids";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import {Battery} from "../../../../classes/battery";
import {TGeneralState} from "../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";
import {generalStoreActions} from "../../../../redux/slices/general-phone/general-phone-slice";

const PhoneCharger = () => {

    const cabelHeightInitial = 40;
    const [positionBottom, setPositionBottom] = useState(80);
    const [cabelHeight, setCabelHeight] = useState(cabelHeightInitial);
    const [isPlugged, setIsPlugged] = useState(false);

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);

    const dispatch = useDispatch();
    const battery = new Battery(phoneGeneralState.battery, dispatch);

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

            if(newPositionBottom >= 0 && newCabelHeight >= 0 && isClosest >= 0) {
                setPositionBottom(newPositionBottom);
                setCabelHeight(newCabelHeight);

                if(isClosest <= 5) {
                    setIsPlugged(true);
                    dispatch(generalStoreActions.battery.setIsChargingOn(true));
                }
            }

            if(isClosest > 5) {
                setIsPlugged(false);
                dispatch(generalStoreActions.battery.setIsChargingOn(false));
            }
        }
        window.addEventListener("mousemove", onMouseMove);

        const onMouseUp = () => {
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("mousemove", onMouseMove);

        }
        window.addEventListener("mouseup", onMouseUp);
    }

    useEffect(() => {
        if(isPlugged) {
            return battery.chargeBattery();
        }
    },[isPlugged, battery])

    return (
        <div>
            <div className={phoneChargerCss.charger} onMouseDown={onMouseDown} style={{ bottom: 0 }}>
                <div className={phoneChargerCss.chargerPlug}></div>
                <div className={phoneChargerCss.chargerPlugBox}>
                    {isPlugged &&
                        <FontAwesomeIcon icon={faBolt} className={phoneChargerCss.chargerBoltIcon}/>
                    }
                </div>
                <div className={phoneChargerCss.chargerCable} style={{ height: cabelHeight }}></div>
            </div>
        </div>
    )
}

export default PhoneCharger;
