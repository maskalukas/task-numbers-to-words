import {BaseSyntheticEvent, useEffect, useState} from "react";
import phoneNumbersInputCss from "./phone-numbers-input.module.css";

const maxLength = 10;

export const PhoneNumbersInput = (props: { values: string[], callback: Function }) => {

    const [value, setValue] = useState("");


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
