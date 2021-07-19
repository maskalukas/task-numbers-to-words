import {BaseSyntheticEvent, useEffect, useState} from "react";
import phoneNumbersInputCss from "./phone-numbers-input.module.css";

// maximum length of numbers in the input
const maxLength = 10;

/**
 * The component for assignment numbers.
 * @param props = values   => the clicked numbers,
 *                callback => It is called when the input changes.
 */
export const PhoneNumbersInput = (props: { values: string[], callback: Function }) => {

    // current numbers
    const [value, setValue] = useState("");


    /**
     * Event: it is called when we change some number.
     * @param event
     */
    const onChange = (event: BaseSyntheticEvent) => {
        if(value.length !== maxLength) {
            setValue(event.target.value);
        } else {
            setValue(value.slice(0,maxLength - 1));
        }

    }

    useEffect(() => {
        if(props.values.length > 0 && value.length !== maxLength) {
            setValue(state => state + props.values.pop());
        } else if(value.length === 1) {
            setValue(value.slice(0,maxLength - 1));
        }

        props.callback(value);
    },[props.values, value])


    return (
        <div className={ phoneNumbersInputCss.phoneNumbersInputWrap }>
            <input className={ phoneNumbersInputCss.phoneNumbersInput }  type="number"  value={ value } onChange={onChange} />
        </div>
    )
}
