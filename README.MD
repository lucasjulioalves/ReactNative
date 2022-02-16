# How to start
```sh
run expo start
```


# Template
```sh
import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const Template = () => {

    return <View style={styles.container}>
        <Text>Template goes here</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Template;
```