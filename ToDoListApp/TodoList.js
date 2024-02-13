// TodoList.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import InputButtonComponent from './InputButtonComponent';
import ListItemComponent from './ListItemComponent';

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
  const [goals, setGoals] = useState(sampleGoals);

  const handleAddTask = (task) => {
    setGoals([task, ...goals]);
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <View style={styles.container}>
      <InputButtonComponent onAddTask={handleAddTask} />
      <FlatList
        data={goals}
        renderItem={({ item, index }) => (
          <ListItemComponent
            item={item}
            onPress={() => handleDeleteGoal(index)}
          />
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
});

export default TodoList;
