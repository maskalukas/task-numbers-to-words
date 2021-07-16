import phoneContentCss from "./phone-content.module.css";
import {TGeneralState} from "../../../redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";
import  PhoneBottomMenu from "../phone-bottom-menu/phone-bottom-menu";

const PhoneContent = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);


    return (
        <div className={` ${phoneContentCss.phoneContent} ${ phoneGeneralState.isTurnedOn ? phoneContentCss.on : phoneContentCss.off  } `}>

            {phoneGeneralState.isTurnedOn &&
                <PhoneBottomMenu></PhoneBottomMenu>
            }
        </div>
    )
}

export { PhoneContent }
