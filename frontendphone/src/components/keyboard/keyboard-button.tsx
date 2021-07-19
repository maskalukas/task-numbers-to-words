import {TButtonItem} from "./keyboard";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

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
    },
    buttonDisabled: {
        opacity: 0.5
    }
})

const KeyboardButton = (props: { button: TButtonItem, callback: Function  }) => {

    const onClickButton = (e: any) => {
        props.callback(props.button.value);
    }

    return (
        <View pointerEvents={!props.button.chars ? 'none' : 'auto'} style={ [styles.button, !props.button.chars ? styles.buttonDisabled : {}]}>
            <TouchableOpacity  onPress={onClickButton}>
                <Text style={ styles.number }>{props.button.value}</Text>
                <Text style={ styles.chars }>{props.button.chars}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default KeyboardButton;
