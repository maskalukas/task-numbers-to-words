import {BaseSyntheticEvent, useEffect, useState} from "react";
import phoneNumbersInputCss from "./phone-numbers-input.module.css";


export const PhoneNumbersInput = (props: { value: string }) => {

    const [value, setValue] = useState(props.value);

    const onChange = (event: BaseSyntheticEvent) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        setValue(value + props.value);
    },[props.value]);

    return (
        <div className={ phoneNumbersInputCss.phoneNumbersInputWrap }>
            <input className={ phoneNumbersInputCss.phoneNumbersInput } type="number"  value={ value } onChange={onChange} />
        </div>
    )
}
