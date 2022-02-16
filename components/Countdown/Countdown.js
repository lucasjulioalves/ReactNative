import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    text : {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
        padding: 20,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
        textAlign: 'center'
    }
});


const Countdown = ({
    minutes = 20,
    isPaused = false,
    ...props
}) => {
    const interval = React.useRef(null);
    const [millis, setMillis] = useState(minutesToMillis(minutes));
    const [isPausedTimer, setIsPausedTimer] = useState(isPaused);
    const countDown = () => setMillis(time => calculateTimeLeft(time))

    const calculateTimeLeft = (time) => {
        if(time === 0 || isPaused) {
            return time;
        }
        const timeLeft = time - 1000;
        return timeLeft;
    }
    useEffect(() => {
        interval.current = setInterval(countDown, 1000);
        return () => clearInterval(interval.current);
    }, [isPaused])
    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;


    return <View style={styles.container}>
        <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    </View>
}

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;



export default Countdown;