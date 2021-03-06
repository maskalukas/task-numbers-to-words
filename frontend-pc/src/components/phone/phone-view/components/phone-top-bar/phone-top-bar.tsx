import phoneTopBarCss from "./phone-top-bar.module.css";
import {useEffect, useRef, useState} from "react";
import {faChevronLeft, faChevronUp, faPlane, faSignal, faWifi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PhoneTopBarBrightnessSlider from "./components/phone-top-bar-brightness-slider/phone-top-bar-brightness-slider";
import PhoneTopBarButton from "./components/phone-top-bar-button/phone-top-bar-button";
import {TGeneralState} from "../../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../../redux/store";
import PhoneTopBarNewMessagesIcon from "./components/phone-top-bar-new-message-icon/phone-top-bar-new-messages-icon";
import React from "react";
import PhoneTopBarBattery from "./components/phone-top-bar-battery/phone-top-bar-battery";
import {Battery} from "../../../../../classes/battery";
import {generalStoreActions} from "../../../../../redux/slices/general-phone-slice";
import Sound from "../../../../../classes/sound";
import {ISound} from "../../../../../classes/interfaces";

const getCurrentTime = (): string => {
    const CurrentDate = new Date();
    return CurrentDate.getHours() + ":" + CurrentDate.getMinutes();
}

/**
 * Completely upper bar
 */
const PhoneTopBar = () => {
    const topBarHeightDefault = 17;
    // new height
    const [height, setHeight] = useState(topBarHeightDefault);
    // if the top bar is expanded
    const [expanded, setExpanded] = useState(false);
    // if the content is show after the top bar is expanded
    const [contentShowed, setContentShowed] = useState(false);
    // current time
    const [time, setTime] = useState(getCurrentTime());

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const dispatch = useDispatch();


    useEffect(() => {
        const battery = new Battery(phoneGeneralState.battery, dispatch);

        const interval = setInterval(() => {
            // setting the time
            setTime(getCurrentTime());
            // dicharging of the battery
            battery.dischargeBattery();
        }, 1000);

        return () => clearInterval(interval);
    }, [time,phoneGeneralState.battery.isCharging, phoneGeneralState.battery.statusNumber]);


    /**
     * Click on the top bar and that will expand it
     */
    const onMouseDown = () => {
        if(!expanded) {
            setHeight(120);
            setExpanded(true);
            // timeout is here due to animation
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

    /**
     * Change state of the airplane mode.
     */
    const airplaneChangeState = (e: any) => {
        const newAirplaneState = !phoneGeneralState.airplane.status;
        if(newAirplaneState) {
            dispatch(generalStoreActions.airplane.setOn());
        } else {
            dispatch(generalStoreActions.airplane.setOff());
        }
    }

    /**
     * Change state of the volume.
     */
    const volumeChangeState = (e: any) => {
        const newVolumeState = !phoneGeneralState.volume.status;
        if (newVolumeState) {
            dispatch(generalStoreActions.volume.setOn());
        } else {
            dispatch(generalStoreActions.volume.setOff());
        }
    }

    const isFirstRun = useRef(true);
    useEffect (() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        } else {
            const sound: ISound = new Sound(phoneGeneralState.volume);
            sound.runSound();
        }
    },[phoneGeneralState.volume]);


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
