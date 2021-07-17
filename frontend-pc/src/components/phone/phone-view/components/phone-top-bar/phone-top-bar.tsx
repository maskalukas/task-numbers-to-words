import phoneTopBarCss from "./phone-top-bar.module.css";
import { useEffect, useState} from "react";
import {faChevronLeft, faChevronUp, faPlane, faSignal, faWifi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PhoneTopBarBrightnessSlider from "./components/phone-top-bar-brightness-slider/phone-top-bar-brightness-slider";
import PhoneTopBarButton from "./components/phone-top-bar-button/phone-top-bar-button";
import {TGeneralState} from "../../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../../redux/store";
import {generalStoreActions} from "../../../../../redux/slices/general-phone/general-phone-slice";
import PhoneTopBarNewMessagesIcon from "./components/phone-top-bar-new-message-icon/phone-top-bar-new-messages-icon";
import React from "react";
import Sound from "../../../../../utils/sound";
import PhoneTopBarBattery from "./components/phone-top-bar-battery/phone-top-bar-battery";

const getCurrentTime = (): string => {
    const CurrentDate = new Date();
    return CurrentDate.getHours() + ":" + CurrentDate.getMinutes();
}

const PhoneTopBar = () => {
    const topBarHeightDefault = 17;

    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState(topBarHeightDefault);
    const [contentShowed, setContentShowed] = useState(false);
    const [time, setTime] = useState(getCurrentTime());

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
            dispatch(generalStoreActions.battery.decreaseNumberByOne());
        }, 1000);

        return () => clearInterval(interval);
    }, [time,phoneGeneralState.battery.statusNumber]);


    const onMouseDown = () => {
        if(!expanded) {
            setHeight(120);
            setExpanded(true);
            const timeout = setTimeout(() => {
                setContentShowed(true);
                clearTimeout(timeout);
            },400);
        } else {
            setHeight(topBarHeightDefault);
            setExpanded(false);
            setContentShowed(false);
        }
    }

    const airplaneChangeState = (e: any) => {
        const newAirplaneState = !phoneGeneralState.airplane.status;
        if(newAirplaneState) {
            dispatch(generalStoreActions.airplane.setOn());
        } else {
            dispatch(generalStoreActions.airplane.setOff());
        }
    }

    const volumeChangeState = (e: any) => {
        const newVolumeState = !phoneGeneralState.volume.status;
        if(newVolumeState) {
            dispatch(generalStoreActions.volume.setOn());
        } else {
            dispatch(generalStoreActions.volume.setOff());
        }

        if(newVolumeState) {
            const sound = new Sound();
            sound.runSound();
        }
    }


    return (
        <div className={phoneTopBarCss.phoneTopBar} style={{ height: height }} onMouseDown={onMouseDown} >
            <div className={ phoneTopBarCss.phoneTopBarMainLine } style={{ height: topBarHeightDefault }}>
                <div className={phoneTopBarCss.phoneTopBarMainLineFakeBg}></div>
                <div>
                    <span>{ time }</span>
                </div>
                <div className={phoneTopBarCss.phoneTopBarMainLineRightPart}>
                    <PhoneTopBarNewMessagesIcon></PhoneTopBarNewMessagesIcon>

                    { !phoneGeneralState.airplane.status
                      ? <React.Fragment>
                            <FontAwesomeIcon icon={faWifi}/>
                            <FontAwesomeIcon icon={faSignal}/>
                        </React.Fragment>
                        : <FontAwesomeIcon icon={faPlane}/>
                    }

                    <PhoneTopBarBattery></PhoneTopBarBattery>

                </div>
            </div>
            {
                expanded && contentShowed &&
                <div className={phoneTopBarCss.phoneTopBarExpandedContent}>
                    <div className={ phoneTopBarCss.phoneTopBarButtonsRow }>
                        <PhoneTopBarButton iconName="plane" isActivated={phoneGeneralState.airplane.status} func={airplaneChangeState}></PhoneTopBarButton>
                        <PhoneTopBarButton iconName="volume-up" isActivated={phoneGeneralState.volume.status} func={volumeChangeState}></PhoneTopBarButton>
                    </div>
                    <PhoneTopBarBrightnessSlider></PhoneTopBarBrightnessSlider>

                    <div className={phoneTopBarCss.phoneTopBarExpendedCloseBtn}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </div>
                </div>
            }
        </div>
    )
}

export default PhoneTopBar;
