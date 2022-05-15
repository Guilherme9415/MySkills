import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [green, setGreen] = useState('');

  function handleAddSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentH = new Date().getHours();

    if (currentH < 12) {
      setGreen('Good Morning!');
    } else if (currentH >= 12 && currentH < 18) {
      setGreen('Good afternoon!');
    } else {
      setGreen('Good night!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome, Guilherme </Text>

      <Text style={styles.greenText}> {green} </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkill} />

      <Text
        style={[
          styles.title,
          {
            marginVertical: 50,
          },
        ]}>
        {' '}
        MySkills{' '}
      </Text>

      <FlatList
        data={mySkills}
        keyExtras={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: '#121015',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: 'white',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greenText: {
    color: 'white',
    paddingVertical: 10,
  },
});
