import phoneContentCss from "./phone-content.module.css";
import {TGeneralState} from "../../../redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "../../../redux/store";

const PhoneContent = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);


    return (<div className={` ${phoneContentCss.phoneContent} ${ phoneGeneralState.isTurnedOn ? phoneContentCss.on : phoneContentCss.off  } `}>

    </div>)
}

export { PhoneContent }
