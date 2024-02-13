// ListItemComponent
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItemComponent = ({ item, onPress }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item}</Text>
      <TouchableOpacity onPress={onPress}>
        <Icon name="times" size={20} color="red" />
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
  },
});

export default ListItemComponent;
