import React from 'react';
import { View, Text,TouchableOpacity,  StyleSheet, } from 'react-native';

export default function Button({onPress}) {
  return (
    <View>
        <TouchableOpacity 
        style={styles.touch} 
        onPress={onPress}
        >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  touch: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
})