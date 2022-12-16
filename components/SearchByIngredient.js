import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, View, Text, TextInput, StyleSheet, Image, TouchableOpacity,
Modal, Alert, FlatList, } from 'react-native';

function SearchByIngredient({ navigation }) { 
  const [ingredient, setIngredient] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [meals, setMeal] = useState([]);

  const search = () => {
    setMeal({})
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json())
    .then(result => {

        if(result.meals == null) {
            setShowModal(!showModal);
        }
        else {
            setMeal(result.meals)
        }
    })
  }

  const renderMealByIngredient = ({ item }) => {
    return (
      <View style={{marginTop: 10}}>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} />
        <Text>Id: {item.idMeal}</Text>
        <Text>Name: {item.strMeal}</Text>
        <Image style={styles.image} source={{
        uri: item.strMealThumb
      }} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
        {/* <Image style={styles.logo} source={require('../assets/logo.png')} /> */}
        <Text>Enter the ingredient below </Text>
        <TextInput
            style={styles.input}
            onChangeText={setIngredient}
            placeholder="Enter Ingredient"
        />
        <TouchableOpacity
            style={styles.button}
            onPress={search}>
            <Text style={styles.buttonText}> Search </Text>
        </TouchableOpacity>
        {/* {Object.keys(meal).length > 0 ? renderMeal() : null} */}
        <FlatList
        style={{ height: '30%' }}
        data={meals}
        renderItem={renderMealByIngredient}
        />
        <Modal
            animationType="slide"
            transparent={false}
            visible={showModal}
            onRequestClose={() => {}}>
            <View style={styles.container}>
            
            <Text style={styles.modalText}>
                The meal id does not exist/ Please enter the valid meal id.
            </Text>
            <Button title="Close" onPress={() => setShowModal(!showModal)} />
            </View>
        </Modal>
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
    borderRadius:10
  },
  container: {
    flex:1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "beige",
    paddingTop: 20,
  },
  logo: {
    margin: 0,
    padding: 0,
    height:150,
    width:100
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#6B1818',
    shadowColor: '#6B1818',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 25,
  },
  buttonText:{
    fontSize:25,
    
  },
  image: {
    height:100,
    width:200,
    marginTop: 10,
  },
    
});

export default SearchByIngredient;