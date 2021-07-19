import {TButtonItem} from "./keyboard";
import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 65 + (Dimensions.get("window").width - 320) ,
        backgroundColor: "#00a991",
        borderRadius: 10,
        marginBottom: 10,
    },
    number: {
        color: "#001512",
        textAlign:"center",
        textAlignVertical: "center",
        fontWeight: "700",
        fontSize: 25,
    },
    chars: {
        fontSize: 15,
        color: "#001512",
        textAlign: "center"
    }
})

const KeyboardButton = (props: { button: TButtonItem }) => {
    return (
        <TouchableOpacity style={ styles.button }>
            <Text style={ styles.number }>{props.button.value}</Text>
            <Text style={ styles.chars }>{props.button.chars}</Text>
        </TouchableOpacity>
    )
}

export default KeyboardButton;
