import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    onPressButton = () => 0,
    title = 'title',
    ...props
}) => {

    return (
        <TouchableOpacity 
            style={[styles(size).radius, style]}
            onPress={() => onPressButton()}
        >
            <Text style={[styles(size).text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = (size) => StyleSheet.create({
    radius : {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});

export default RoundedButton;