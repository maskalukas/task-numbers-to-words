import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phoneProgressCallCss from "./phone-progress-call.module.css";
import {Call} from "../../../../../../classes/call";
import {TCallsState, TGeneralState, TMessagesState} from "../../../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../../../redux/store";

/**
 * Component representing that the phone is currently calling.
 * It shows the element over the whole screen with numbers and the cancel request button.
 * @param props = numbers => This number will be shown on the screen.
 */
export const PhoneProgressCall = (props: {numbers: string}) => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const phoneCallState: TCallsState = useSelector((state: IReducersState) => state.callsState);
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);
    const dispatch = useDispatch();

    /**
     * Event: Abort the call (request)
     */
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
