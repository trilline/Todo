import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import TodoList from './TodoList'; 

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/th.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <TodoList /> 
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    paddingVertical: 40, 
    paddingHorizontal: 20,
  },
});
