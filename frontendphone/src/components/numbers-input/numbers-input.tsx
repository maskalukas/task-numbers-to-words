import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#d4d4d4",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    numbers: {
        fontSize: 35,
    }
})

/**
 * Shows the clicked numbers
 */
export const NumbersInput = (props: { numbers: string }) => {

    return (
        <View style={ styles.input }>
            <Text style={styles.numbers}>{ props.numbers }</Text>
        </View>
    )
}
