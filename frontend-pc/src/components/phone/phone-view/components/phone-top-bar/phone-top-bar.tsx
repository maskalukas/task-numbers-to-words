import phoneTopBarCss from "./phone-top-bar.module.css";
import {BaseSyntheticEvent, SyntheticEvent, useEffect, useState} from "react";
import {faChevronLeft, faWifi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {phoneContentId} from "../../../../../constants/elements-ids";

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
                <div>
                    <div>
                        <input type="range" />
                    </div>
                </div>
            }
        </div>
    )
}

export default PhoneTopBar;
