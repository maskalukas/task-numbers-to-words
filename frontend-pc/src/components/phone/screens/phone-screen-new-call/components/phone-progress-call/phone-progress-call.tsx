import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phoneProgressCallCss from "./phone-progress-call.module.css";
import phoneNewCallCss from "../../phone-screen-new-call.module.css";
import {IApiRequest} from "../../../../../../services/interfaces";
import {Call} from "../../../../../../classes/call";
import {TCallsState, TGeneralState, TMessagesState} from "../../../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../../../redux/store";
import configure from "../../../../../../configure";

export const PhoneProgressCall = (props: {numbers: string}) => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const phoneCallState: TCallsState = useSelector((state: IReducersState) => state.callsState);
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);
    const dispatch = useDispatch();

    const onMouseClickCancel = () => {
        const call = new Call(phoneGeneralState, phoneCallState, messagesState, dispatch);
        call.cancelCall();
    }

    return (
        <div className={phoneProgressCallCss.phoneCallProgressBackground}>
            <div className={phoneProgressCallCss.phoneCallProgressNumberBox}>
                <span>{ props.numbers }</span>
                <img style={{ width: 32 }} src={ process.env.PUBLIC_URL + "/ellipsis.gif" } />
            </div>
            <FontAwesomeIcon className={phoneProgressCallCss.phoneCallCancelButton}
                             icon={["fas","phone-slash"]} onMouseDown={onMouseClickCancel}></FontAwesomeIcon>
        </div>
    )
}
