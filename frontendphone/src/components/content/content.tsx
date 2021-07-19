import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#e0e0e0",
        margin: 15,
        borderRadius: 10,
        padding: 20,
        display: "flex",
    },
    word: {
        fontSize: 20,
        backgroundColor: "#9a9a9a",
        alignSelf: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5,
        borderRadius: 10
    }
});

const contentHeight = (Dimensions.get("window").height - 540);

const Content = (props: { response: string[] }) => {
    return (
        <View style={ styles.content }>
            <ScrollView style={{ height: contentHeight }}>
                {
                    props.response.map((word,i) => {
                        return (
                            <View key={ i } style={styles.word}>
                                <Text>{ word }</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Content;
