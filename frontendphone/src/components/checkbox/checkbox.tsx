import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

const styles = StyleSheet.create({
    checkbox: {
        height: 40,
        width: 40,
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    checkboxChecked: {
        backgroundColor: "#2cac71",
        width: 30,
        height: 30,
        borderRadius: 10
    },
    title: {
        marginBottom: 5
    }
})
export const CustomCheckbox = (props: { title: string, callback: (changedValue: boolean) => any }) => {
    const [checked, setChecked] = useState(false);

    const changeChecked = () => {
        setChecked(!checked);
        props.callback(checked);
    }

    return (
        <View>
            <Text style={ styles.title }>{ props.title }</Text>
            <TouchableOpacity style={ styles.checkbox } onPress={changeChecked}>
                <View style={ checked ? styles.checkboxChecked : {} }>
                </View>
            </TouchableOpacity>
        </View>

    )
}
