import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import InputField from '../components/InputField';

const Focus = () => {

    return <View style={styles.container}>
        <InputField text='What would you like to focus on?'/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Focus;