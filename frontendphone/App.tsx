import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {Component, useState} from 'react';
import Keyboard from "./src/components/keyboard/keyboard";
import {NumbersInput} from "./src/components/numbers-input/numbers-input";
import Content from "./src/components/content/content";

const styles = StyleSheet.create({
    contentBox: {
        justifyContent:"flex-end",
        flex: 1,
    }
})

const App = () => {


    return (
        <View style={{ height: "100%" }}>
            <NumbersInput></NumbersInput>
            <View style={ styles.contentBox }>
                <Content></Content>
                <Keyboard></Keyboard>
            </View>
        </View>
    )
}

export default App;
