import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


const InputField = (props) => {

    return <View>
        <View style={styles.titleContainer}>
            <Text>{props.text}</Text>
        </View>
        
        <TextInput />
    </View>
}

const styles = StyleSheet.create({
    titleContainer : {
        color: 'white',
        flex: 0.5,
        justifyContent: "center"
    },
    title: {
        color: white
    }
});


export default InputField;