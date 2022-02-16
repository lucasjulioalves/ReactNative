import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


const InputField = ({
    inputText,
    onSubmitInput,
    onChangeState,
    ...props}) => {
    
    return <View style={styles.container}>
        <Text style={props.text ? styles.title : ''}>{props.text}</Text>
        <View style={styles.input}>
            <TextInput 
                onSubmitEditing={event => onSubmit(event, onSubmitInput)} 
                onChangeText={text => onChangeInputState(text, onChangeState)}
            />
        </View>
    </View>
}

const onSubmit = ({nativeEvent}, parentEvent) => {
    if(!parentEvent) return;
    parentEvent(nativeEvent);
}

const onChangeInputState = (text, parentEvent) => {
    if(!parentEvent) return;
    parentEvent(text);
}
const styles = StyleSheet.create({
    container : {
        paddingVertical: 10
    },
    title: {
        color: '#FFFFFF',
        fontWeight : 'bold', 
        fontSize: 16
    },
    input: {
        minWidth: '85%',
        maxWidth: '85%'
    }
});


export default InputField;