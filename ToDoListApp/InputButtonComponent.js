// InputButtonComponent
import React, { useState } from 'react';
import { View, TextInput, Platform, TouchableOpacity, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

const InputButtonComponent = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  // askip TouchableNativeFeedback pour Android et TouchableOpacity pour les autres plateformes
  const ButtonComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Saisir un objectif"
      />
      <ButtonComponent style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default InputButtonComponent;
