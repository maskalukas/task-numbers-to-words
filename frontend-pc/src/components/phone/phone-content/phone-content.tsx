import phoneContentCss from "./phone-content.module.css";
import {TGeneralState} from "../../../redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";
import React from "react";
import PhoneView from "../phone-view/phone-view";
import PhoneBottomMenu from "../phone-view/components/phone-bottom-menu/phone-bottom-menu";
import { phoneContentId } from "../../../constants/elements-ids";
import {PhoneContentBatteryChange} from "./components/battery/phone-content-battery-change/phone-content-battery-change";
import {BrowserRouter} from "react-router-dom";

/**
 * The main content
 */
const PhoneContent = () => {
    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);

    return (
        <BrowserRouter>
            <div id={phoneContentId}
                 className={` 
                     ${phoneContentCss.phoneContent} 
                     ${ phoneGeneralState.power.status ? phoneContentCss.on : phoneContentCss.off} 
             `     }
                 style={{
                     filter: `brightness(${phoneGeneralState.brightness.number})`,
                 }}>

                {phoneGeneralState.power.status &&
                <React.Fragment>
                    <PhoneView></PhoneView>
                    <PhoneBottomMenu></PhoneBottomMenu>
                </React.Fragment>
                }

                {phoneGeneralState.battery.isShowedNoBatteryIcon &&
                    <PhoneContentBatteryChange></PhoneContentBatteryChange>
                }
            </div>
        </BrowserRouter>
    )
}

export { PhoneContent }
