import {PhoneKeyboard} from "../../hoc/phone-keyboard/phone-keyboard";
import {useState} from "react";
import {PhoneNumbersInput} from "../../hoc/phone-numbers-input/phone-numbers-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newCallScreenCss from "./phone-screen-new-call.module.css"

export const screenRoute = "new-call";

export const PhoneScreenNewCall = () => {

    const [numbers, setNewNumber] = useState<string[]>([]);

    const onMouseClickButtonCallback = (clickedNumber: string) => {
        setNewNumber(prevNumbersArr => [...prevNumbersArr, clickedNumber])
    }

    return (
        <div>
            <PhoneNumbersInput values={ numbers }></PhoneNumbersInput>
            <PhoneKeyboard callback={ onMouseClickButtonCallback }></PhoneKeyboard>

            <div className={ newCallScreenCss.callButtonsLine }>
                <FontAwesomeIcon icon={["fas","phone"]} className={ newCallScreenCss.callButton }></FontAwesomeIcon>
            </div>
        </div>
    )
}

