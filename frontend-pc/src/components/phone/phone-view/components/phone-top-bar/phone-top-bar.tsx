import phoneTopBarCss from "./phone-top-bar.module.css";
import {useEffect, useState} from "react";
import {faChevronLeft, faWifi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const getCurrentTime = (): string => {
    const CurrentDate = new Date();
    return CurrentDate.getHours() + ":" + CurrentDate.getMinutes();
}

const PhoneTopBar = () => {

    const [time, setTime] = useState(getCurrentTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);


    return (
        <div className={phoneTopBarCss.phoneTopBar}>
            <span>{ time }</span>
            <FontAwesomeIcon icon={faWifi}/>
        </div>
    )
}

export default PhoneTopBar;
