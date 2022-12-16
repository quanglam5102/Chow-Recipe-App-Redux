import * as React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUser, fetchSearchById } from '../redux/actions/index';
import { Button, View, Text, TextInput, StyleSheet, Image, TouchableOpacity,
Modal, } from 'react-native';

const NotFound = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}

function SearchById({ navigation, fetchSearchById, mealById }) { 
  const [mealId, setMealId] = useState('');
  const [showModal, setShowModal] = useState(true);

  const search = () => {
     fetchSearchById(mealId);
    
  }

  const handleNavigate = () => {
    navigation.navigate('SearchByName')
  }

  const renderMeal = () => {
    return (
      <View style={{marginTop: 10}}>
        <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} />
        <Text>Name: {mealById[0].strMeal}</Text>
        <Text>Category: {mealById[0].strCategory}</Text>
        <Text>Area: {mealById[0].strArea}</Text>
        <Image style={styles.image} source={{
        uri: mealById[0].strMealThumb
      }} />
      </View>
    )
  }

  const notFound = () => {
    setShowModal(!showModal);
    return (
      <View></View>
    )
  }

  return (
  
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text>Enter the meal id to search below </Text>
        <TextInput
            style={styles.input}
            onChangeText={setMealId}
            placeholder="Enter Meal Id"
        />
        <TouchableOpacity
            style={styles.button}
            onPress={search}>
            <Text style={styles.buttonText}> Search </Text>
        </TouchableOpacity>
        {Object.keys(mealById).length > 0 && renderMeal() }
        <Modal
            animationType="slide"
            transparent={false}
            visible={showModal}
            onRequestClose={() => {}}
            >
            <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.modalText}>
                Please enter the exact meal id in order to view the details
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
    backgroundColor: "beige"
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
    backgroundColor: '#9FB1BC',
    shadowColor: '#9FB1BC',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 25,
  },
  buttonText:{
    fontSize:25,
    color:'white',
    
  },
  image: {
    height:100,
    width:200,
    marginTop: 10,
    borderRadius:10,
    borderColor:'transparent',
  },
    
});

const mapStateToProps = (state) => {
  return {
    users: state.productsReducer.users,
    mealById: state.productsReducer.mealById,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchById: (mealId) => fetchSearchById(dispatch, mealId),
    addUser: (username, pass) => dispatch(addUser(username, pass)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchById);