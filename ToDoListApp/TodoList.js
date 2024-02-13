import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Button, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

const TodoList = () => {
  const [task, setTask] = useState('');
  const [goals, setGoals] = useState(sampleGoals);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setGoals([task, ...goals]);
      setTask('');
    }
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Saisir un objectif"
      />
      <Button title="Ajouter" onPress={handleAddTask} />
      <FlatList
        data={goals}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteGoal(index)}>
              <Icon name="times" size={20} color="red" />
            </TouchableOpacity>
            {/*<Button title="Supprimer" onPress={() => handleDeleteGoal(index)} />*/}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  taskText: {
    flex: 1,
    marginRight: 10,
  },
});

export default TodoList;
