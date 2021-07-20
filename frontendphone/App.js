import {Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useState} from "react";
import Keyboard from "./src/components/keyboard/keyboard";
import {NumbersInput} from "./src/components/numbers-input/numbers-input";
import Content from "./src/components/content/content";
import {ConvertorNumbersToCharacters} from "./src/utils/convertor-numbers-to-words";

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#e0e0e0",
        margin: 15,
        borderRadius: 10,
        padding: 20
    },
    buttonsLine: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    mainButton: {
        width: (Dimensions.get("window").width / 3 - 50),
        height: 70,
        backgroundColor: "orange",
        borderRadius: 10,
        display:  "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    mainButtonText: {
        fontWeight: "700"
    }
});

/**
 * The main component
 */
const App = () => {
    // the current clicked list of numbers
    const [numbers, setNumbers]: [string[]] = useState([]);
    // the current converted list of words (response)
    const [responseWords, setResponseWords] = useState([]);

    /**
     * Callback: keyboard press button
     */
    const onPressButtonCallback = (value) => {
        if(numbers.length < 10) {
            setNumbers(prevArr => [...prevArr, value.toString()])
        }
    }

    /**
     * Removes the last number in input
     */
    const removeLastNumber = () => {
        const numbersBeforeLastNumberRemoved = [].concat(numbers)
        numbersBeforeLastNumberRemoved.pop();
        setNumbers(numbersBeforeLastNumberRemoved);
    }

    /**
     * Sends numbers for converting
     */
    const sendNumbers = async () => {
        const convertor = new ConvertorNumbersToCharacters(numbers.join(""));
        const result = convertor.convertWithoutRealWords();
        setResponseWords(result);
    }


    return (
        <View style={{ height: "100%" }}>
            <NumbersInput numbers={numbers}></NumbersInput>
            <Content response={ responseWords }></Content>
            <View style={styles.buttonsLine}>

                <TouchableOpacity style={styles.mainButton} onPress={sendNumbers}>
                    <Text style={styles.mainButtonText}>Send</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mainButton} onPress={removeLastNumber}>
                    <Text style={styles.mainButtonText} >Delete</Text>
                </TouchableOpacity>
            </View>
            <Keyboard callback={onPressButtonCallback}></Keyboard>
        </View>
    )
}

export default App;
