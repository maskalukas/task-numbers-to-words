import React, {useState} from "react";
import phoneKeyboardButtonCss from "./phone-keyboard.module.css";
import Sound from "../../../../classes/sound";
import {TGeneralState} from "../../../../redux/interfaces";
import {useSelector} from "react-redux";
import {IReducersState} from "../../../../redux/store";

type TButtonItem = {
    value: number;
    chars: string|null;
}

const items: TButtonItem[] = [{
    value: 1,
    chars: null
},{
    value: 2,
    chars: "ABC"
},{
    value: 3,
    chars: "DEF"
},{
    value: 4,
    chars: "GHI"
},{
    value: 5,
    chars: "JKL"
},{
    value: 6,
    chars: "MNO"
},{
    value: 7,
    chars: "PQRS"
},{
    value: 8,
    chars: "TUV"
},{
    value: 9,
    chars: "WXYZ"
}];


export const PhoneKeyboard = (props: { callback: (num: string) => any }) => {
    const phoneGeneralState: TGeneralState = useSelector((state: IReducersState) => state.generalState);

    const onMouseClick = (event: any, buttonItem: TButtonItem) => {
        const sound = new Sound(phoneGeneralState.volume);
        sound.runSound()

        props.callback(buttonItem.value.toString());
    }

    return (
        <div className={ phoneKeyboardButtonCss.phoneKeyboardButtonWrap }>
            {items.map((item) => {
                return (
                    <div className={ phoneKeyboardButtonCss.phoneKeyboardButton } key={item.value} onMouseDown={(event) => onMouseClick(event, item)}>
                        <span>{ item.value }</span>
                        <span className={ phoneKeyboardButtonCss.chars }>{ item.chars }</span>
                    </div>
                )
            })}
        </div>
    )
}
