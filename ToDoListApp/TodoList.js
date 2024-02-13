// TodoList.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput, Text } from 'react-native';
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
  const [selectedGoal, setSelectedGoal] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [originalGoal, setOriginalGoal] = useState(''); 



  const handleAddTask = (task) => {
    setGoals([task, ...goals]);
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const handleEditGoal = (goal, index) => {
    /*console.log("item:", goal); 
    console.log("index:", index); */
    setSelectedGoal(goal);
    setOriginalGoal(goal);
    setIsModalVisible(true);
  };

  const handleSaveGoal = () => {
    console.log("Goal to be updated:", selectedGoal); 
    const updatedGoals = goals.map((goal) => {
      // cond ternaire
      //return goal === selectedGoal ? selectedGoal : goal;
    if (goal === originalGoal) {
      return selectedGoal;
    } else {
      return goal;
    }
    });
  
    //modif du state
    setGoals(() => updatedGoals); 
    console.log("updated goals:", updatedGoals);
    setIsModalVisible(false); 
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
            onEdit={() => handleEditGoal(item, index)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            value={selectedGoal}
            onChangeText={ setSelectedGoal}
            placeholder="Modifier l'objectif"
          />
          <TouchableOpacity onPress={handleSaveGoal}>
            <Text style={styles.saveButton}>Sauvegarder</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
});

export default TodoList;
