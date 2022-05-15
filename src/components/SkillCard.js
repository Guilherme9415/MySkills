import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}> {skill} </Text>{' '}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
