import {PhoneKeyboard} from "../../hoc/phone-keyboard/phone-keyboard";
import {useEffect, useState} from "react";
import {PhoneNumbersInput} from "../../hoc/phone-numbers-input/phone-numbers-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newCallScreenCss from "./phone-screen-new-call.module.css"
import {Call} from "../../../../classes/call";
import {TCallsState, TGeneralState, TMessagesState} from "../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";
import {ICall, IMessage} from "../../../../classes/interfaces";
import {Messages} from "../../../../classes/message";

export const screenRoute = "new-call";

export const PhoneScreenNewCall = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const phoneCallState: TCallsState = useSelector((state: IReducersState) => state.callsState);
    const messagesState: TMessagesState = useSelector((state: IReducersState) => state.messagesState);
    const dispatch = useDispatch();

    const [numbers, setNewNumber] = useState<string[]>([]);
    const [currentInputNumbers, setCurrentInputNumbers] = useState<string>("");
    const [filter, setFilter] = useState<boolean>(false);

    const onMouseClickNumberButtonCallback = (clickedNumber: string) => {
        setNewNumber(prevNumbersArr => [...prevNumbersArr, clickedNumber])
    }

    const onInputNumbersChange = (inputNumbers: string) => {
        setCurrentInputNumbers(inputNumbers);
    }

    const onMouseClickCallButton = async () => {
        const call: ICall = new Call(
            phoneGeneralState,
            phoneCallState,
            messagesState,
            dispatch
        );
        call.setNumber(currentInputNumbers);
        call.call(filter);
    }

    const onMouseClickFilterCheck = () => {
        setFilter(state => !state);
    }

    return (
        <div>
            <PhoneNumbersInput values={ numbers } callback={ onInputNumbersChange }></PhoneNumbersInput>
            <PhoneKeyboard callback={ onMouseClickNumberButtonCallback }></PhoneKeyboard>

            <div className={ newCallScreenCss.callButtonsLine }>
                <FontAwesomeIcon icon={["fas","phone"]}
                                 style={phoneGeneralState.airplane.status ? { cursor: "not-allowed", opacity: "0.9", background: "#c4c4c4", color: "grey" } : {}}
                                 className={ newCallScreenCss.callButton } onMouseDown={ onMouseClickCallButton }></FontAwesomeIcon>

                <FontAwesomeIcon icon={["fas","filter"]}
                                 className={ `${filter ? newCallScreenCss.filterActivated : ''} ${newCallScreenCss.filterCheck}` }
                                 onMouseDown={ onMouseClickFilterCheck }></FontAwesomeIcon>
            </div>
        </div>
    )
}

