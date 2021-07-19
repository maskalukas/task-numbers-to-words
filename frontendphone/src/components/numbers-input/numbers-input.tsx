import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#d4d4d4",
        height: 100,
        display:"flex",
        justifyContent: "center",
    }
})

export const NumbersInput = () => {
    return (
        <View style={ styles.input }>
            <TextInput showSoftInputOnFocus={false}></TextInput>
        </View>
    )
}
