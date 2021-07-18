import {PhoneKeyboard} from "../../hoc/phone-keyboard/phone-keyboard";
import {useEffect, useState} from "react";
import {PhoneNumbersInput} from "../../hoc/phone-numbers-input/phone-numbers-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newCallScreenCss from "./phone-screen-new-call.module.css"
import {Call} from "../../../../classes/call";
import {TCallsState, TGeneralState} from "../../../../redux/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";

export const screenRoute = "new-call";

export const PhoneScreenNewCall = () => {

    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);
    const phoneCallStateState: TCallsState = useSelector((state: IReducersState) => state.callsState);
    const dispatch = useDispatch();

    const [numbers, setNewNumber] = useState<string[]>([]);
    const [currentInputNumbers, setCurrentInputNumbers] = useState<string>("");

    const onMouseClickNumberButtonCallback = (clickedNumber: string) => {
        setNewNumber(prevNumbersArr => [...prevNumbersArr, clickedNumber])
    }

    const onInputNumbersChange = (inputNumbers: string) => {
        setCurrentInputNumbers(inputNumbers);
    }

    const onMouseClickCallButton = async () => {
        const call = new Call(
            phoneGeneralState.volume,
            phoneGeneralState.airplane,
            phoneCallStateState.callProgress,
            dispatch
        );
        call.setNumber(currentInputNumbers);
        const result = await call.call();
        console.log(result, phoneCallStateState);
    }

    useEffect(() => {
    },[phoneCallStateState.callProgress.status])

    return (
        <div>
            <PhoneNumbersInput values={ numbers } callback={ onInputNumbersChange }></PhoneNumbersInput>
            <PhoneKeyboard callback={ onMouseClickNumberButtonCallback }></PhoneKeyboard>

            <div className={ newCallScreenCss.callButtonsLine } onMouseDown={ onMouseClickCallButton }>
                <FontAwesomeIcon icon={["fas","phone"]} className={ newCallScreenCss.callButton }></FontAwesomeIcon>
            </div>
        </div>
    )
}

