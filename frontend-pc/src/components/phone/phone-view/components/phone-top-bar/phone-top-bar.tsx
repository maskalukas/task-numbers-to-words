import phoneTopBarCss from "./phone-top-bar.module.css";
import { useEffect, useState} from "react";
import {faChevronLeft, faWifi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PhoneTopBarBrightnessSlider from "./components/phone-top-bar-brightness-slider/phone-top-bar-brightness-slider";
import PhoneTopBarButton from "./components/phone-top-bar-button/phone-top-bar-button";

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


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);


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


    return (
        <div className={phoneTopBarCss.phoneTopBar} style={{ height: height }} onMouseDown={onMouseDown} >
            <div className={ phoneTopBarCss.phoneTopBarMainLine } style={{ height: topBarHeightDefault }}>
                <span>{ time }</span>
                <FontAwesomeIcon icon={faWifi}/>
            </div>
            {
                expanded && contentShowed &&
                <div className={phoneTopBarCss.phoneTopBarExpandedContent}>
                    <div style={{ marginBottom: "10px" }}>
                        <PhoneTopBarButton iconName="plane"></PhoneTopBarButton>
                    </div>
                    <PhoneTopBarBrightnessSlider></PhoneTopBarBrightnessSlider>
                </div>
            }
        </div>
    )
}

export default PhoneTopBar;
