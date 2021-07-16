import phoneContentCss from "./phone-content.module.css";
import {TGeneralState} from "../../../redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";
import React from "react";
import PhoneView from "../phone-view/phone-view";
import PhoneBottomMenu from "../phone-view/components/phone-bottom-menu/phone-bottom-menu";
import { phoneContentId } from "../../../constants/elements-ids";

const PhoneContent = () => {
    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);

    return (
        <div id={phoneContentId} className={` ${phoneContentCss.phoneContent} ${ phoneGeneralState.isTurnedOn ? phoneContentCss.on : phoneContentCss.off  } `}>

            {phoneGeneralState.isTurnedOn &&
                <React.Fragment>
                    <PhoneView></PhoneView>
                    <PhoneBottomMenu></PhoneBottomMenu>
                </React.Fragment>
            }
        </div>
    )
}

export { PhoneContent }
