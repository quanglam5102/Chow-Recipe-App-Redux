import * as React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/index';
import { useState, useEffect } from 'react'
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

function Seperator() {
  return <View style={styles.seperator}></View>;
}

function Login({ navigation, users }) { 
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async() => {
    if(!username.trim() || !pass.trim()) {
      setShowModal(!showModal);
    }
    else {
      users.forEach((item) => {
        if(JSON.stringify({username, pass}) == JSON.stringify(item)) {
          navigation.navigate('Home');
        }
        else {
          alert('Please enter the correct username or password.')
        }
      });
    }
  }

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/logo.png')} />
    <Text>Sign Up To Start </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPass}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}> 
        <Text style={styles.buttonText}> Log In </Text>
      </TouchableOpacity>
      <Seperator/> 
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {}}>
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.modalText}>
            Usename or password is missing. Please fill in the fields below.
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
    justifyContent: "center",
    backgroundColor: "beige"
  },
  logo: {
    height:250,
    width:200
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
    seperator: { margin: 10 }
});

const mapStateToProps = (state) => {
  return {
    users: state.productsReducer.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (username, pass) => dispatch(addUser(username, pass)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);