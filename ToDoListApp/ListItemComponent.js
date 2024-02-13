// ListItemComponent
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // expo/vector-icons à checker
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItemComponent = ({ item, onPress, onEdit }) => {
    return (
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>{item}</Text>
          <TouchableOpacity onPress={onEdit}>
            <AntDesign name="edit" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <AntDesign name="delete" size={20} color="red" />
          </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  taskText: {
    flex: 1,
    marginRight: 10,
    color: 'white',
  },
});

export default ListItemComponent;
