import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#e0e0e0",
        margin: 15,
        borderRadius: 10,
        padding: 20
    }
});

const contentHeight = (Dimensions.get("window").height - 450);

const Content = () => {
    return (
        <View style={ styles.content }>
            <ScrollView style={{ height: contentHeight }}>
                <Text>cau</Text>
            </ScrollView>
        </View>
    )
}

export default Content;
