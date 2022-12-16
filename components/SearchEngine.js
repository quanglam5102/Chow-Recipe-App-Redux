import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

function Seperator() {
  return <View style={styles.seperator}></View>;
}

function SearchEngine({ navigation, addUser }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SearchById')}>
        <Text style={styles.buttonText}> Search By ID </Text>
      </TouchableOpacity>
      <Seperator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SearchByName')}>
        <Text style={styles.buttonText}> Search By Name</Text>
      </TouchableOpacity>
      <Seperator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SearchByArea')}>
        <Text style={styles.buttonText}> Search By Area</Text>
      </TouchableOpacity>
      <Seperator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Category')}>
        <Text style={styles.buttonText}> Category</Text>
      </TouchableOpacity>
      <Seperator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RandomMeal')}>
        <Text style={styles.buttonText}> Random Meal</Text>
      </TouchableOpacity>
      <Seperator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SearchByIngredient')}>
        <Text style={styles.buttonText}> Search By Ingredient</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
  },
  logo: {
    height: 250,
    width: 200,
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#9FB1BC',
  },
  buttonText: {
    fontSize: 25,
    color:'white',
  },
  seperator: { margin: 10 },
});

export default SearchEngine;