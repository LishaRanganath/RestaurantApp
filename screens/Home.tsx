import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { NavigationProps } from '@/types/types';


export default function Home(props: NavigationProps) {
  const imageloc = require('../assets/images/food.png');

  return (
    <SafeAreaView style={styles.container}>
      <Image source={imageloc} style={styles.image_container} />
      <Text style={styles.text}>Welcome to Restaurant</Text>
      <Text style={styles.text}>Order App</Text>
      <Pressable
        style={styles.button_container}
        onPress={() => {
          props.navigation.navigate('Login'); // Accessing navigation via props
        }}
      >
        <Text style={styles.button_text}>Login to continue -{'>'}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff4d4d',
  },
  text: {
    fontSize: 27,
    color: '#333',
  },
  image_container: {
    marginTop: '40%',
    marginBottom: 30,
    padding: 20,
    height: 200,
    width: 200,
  },
  button_container: {
    margin: 20,
    marginTop: 50,
    backgroundColor: '#ffffe6',
    fontSize: 24,
    borderRadius: 10,
  },
  button_text: {
    fontSize: 27,
    color: '#333',
    padding: 20,
  },
});
