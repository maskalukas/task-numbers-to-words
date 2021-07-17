import { PhoneKeyboard } from "../../hoc/phone-keyboard/phone-keyboard";
import {useState} from "react";
import {PhoneNumbersInput} from "../../hoc/phone-numbers-input/phone-numbers-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const screenRoute = "new-call";

export const PhoneScreenNewCall = () => {

    const [numbersValue, setNumbersValue] = useState("");

    const onMouseClickButtonCallback = (value: number) => {
        setNumbersValue(value.toString());
    }

    return (
        <div>
            <PhoneNumbersInput value={ numbersValue }></PhoneNumbersInput>
            <PhoneKeyboard callback={ onMouseClickButtonCallback }></PhoneKeyboard>

            <div>
                <FontAwesomeIcon icon={["fas","phone"]}></FontAwesomeIcon>
            </div>
        </div>
    )
}

