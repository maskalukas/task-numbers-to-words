import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import KeyboardButton from "./keyboard-button";

/**
 * Button type
 */
export type TButtonItem = {
    value: number;
    chars: string|null;
}

/**
 * The list of keyboard buttons
 */
const buttons: TButtonItem[]  = [{
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

const styles = StyleSheet.create({
    keyboard: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: 50
    }
})


/**
 * Keyboard
 * @param props = callback = callback is called when some button is clicked.
 */
const Keyboard = (props: { callback: Function }) => {
    return (
        <View style={styles.keyboard}>
            {
                buttons.map(button => {
                    return <KeyboardButton key={ button.value } button={ button } callback={props.callback}></KeyboardButton>
                })
            }
        </View>
    )
}

export default Keyboard;
