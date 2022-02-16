import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Countdown from '../components/countdown/Countdown';
import RoundedButton from '../components/RoundedButton/RoundedButton';
const Timer = ({
    focusSubject,
    ...props
}) => {
    const [isPaused, setIsPaused] = useState(false);

    const pauseTimer = () => setIsPaused(true);
    const continueTimer = () => setIsPaused(false);
    const handleState = () => isPaused
    return <View style={styles.container}>
            <View>
                <Countdown isPaused={isPaused} handleState={handleState} />
                <Text style={styles.title}>Se concentrando na ativade</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <RoundedButton size={80} title='start' onPressButton={continueTimer}/>
                <RoundedButton size={80} title='pause' onPressButton={pauseTimer}/>
                <RoundedButton size={80} title='reset' />
            </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    buttonContainer : {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        color: 'white',
        fontSize: 24,
        textAlign : 'center',
        marginTop: 20
    },
    task : {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15
    }
});

export default Timer;