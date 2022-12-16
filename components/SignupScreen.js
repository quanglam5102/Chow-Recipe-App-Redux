import * as React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/index';
import { useState } from 'react'
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native';

function Seperator() {
  return <View style={styles.seperator}></View>;
}

function SignupScreen({ navigation, addUser }) {
  const [first, onChangeText] = React.useState('');
  const [last, onChangeLast] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  var button1 = [
    {
      text: 'Yes',
      onPress: () => {
        setShowModal(!showModal);
        addUser(username, pass)
      },
    },
    { text: 'No', onPress: () => { } },
  ];
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text>Sign Up To Start </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={first}
        placeholder="First name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeLast}
        value={last}
        placeholder="Last name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
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
        onPress={() => {
          Alert.alert(
            'Attention',
            'You are about to create an account, are you sure you want to continue?',
            button1
          );
        }}>
        <Text style={styles.buttonText}> Sign Up! </Text>
      </TouchableOpacity>
      <Seperator />
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => { }}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.modalText}>
            You have successfully signed up and created a chow account! Click Start and enjoy learning more recipes with us.
          </Text>
          <Button title="Close" onPress={() => {
            setShowModal(!showModal);
            navigation.navigate('Login');
          }} />
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
    borderRadius: 10
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige"
  },
  logo: {
    height: 250,
    width: 200
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);