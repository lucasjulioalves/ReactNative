import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { NativeText } from 'react-native/Libraries/Text/TextNativeComponent';
import InputField from '../components/InputField/InputField';
import RoundedButton from '../components/RoundedButton/RoundedButton';

const Focus = ({
    setFocusSubject,
    ...props
}) => {
    [task, setTask] = useState(null);
    
    const onPressButton = () => {
        setFocusSubject(task);
    }
    
    return <View style={styles.container}>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>No que você gostaria de focar?</Text>
        </View>
        <View style={styles.containerInput}>
            <InputField 
                inputValue={task} 
                onSubmitInput={onSubmitInput} 
                onChangeState={onChangeState}
            />
            <RoundedButton 
                style={styles.button} 
                title="+" 
                size={60} 
                onPressButton={onPressButton}
                >
            </RoundedButton>
        </View>
    </View>
}


const onSubmitInput = (nativeEvent) => {
    const {text} = nativeEvent;
    setTask(text);
    setFocusSubject(text);
}

const onChangeState = (text) => {
    setTask(text);
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },  
    containerTitle: {
        width: '100%',
        alignItems: 'center'
    },  
    title: {
        color: '#FFFFFF',
        fontWeight : 'bold', 
        fontSize: 25,
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {

    },
    button : {
        marginTop: 15
    }
});

export default Focus;