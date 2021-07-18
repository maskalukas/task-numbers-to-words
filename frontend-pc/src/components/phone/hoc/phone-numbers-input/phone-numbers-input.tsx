import {BaseSyntheticEvent, useEffect, useState} from "react";
import phoneNumbersInputCss from "./phone-numbers-input.module.css";


export const PhoneNumbersInput = (props: { values: string[] }) => {

    const [value, setValue] = useState("");

    const onChange = (event: BaseSyntheticEvent) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        if(props.values.length > 0) {
            setValue(state => state + props.values.pop())
        }
    },[props.values])


    return (
        <div className={ phoneNumbersInputCss.phoneNumbersInputWrap }>
            <input className={ phoneNumbersInputCss.phoneNumbersInput } type="number"  value={ value } onChange={onChange} />
        </div>
    )
}
