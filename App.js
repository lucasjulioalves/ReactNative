import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Focus from './views/Focus';
import Timer from './views/Timer';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  const handleSubjectChange = (text) => {
    setFocusSubject(text);
  }
  
  return (
    <View style={styles.container}> 
      {!focusSubject ? 
        <Focus setFocusSubject={handleSubjectChange}/> :
        <Timer focusSubject={focusSubject}/>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    padding: 20
  },
});
