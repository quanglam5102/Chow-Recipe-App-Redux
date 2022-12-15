import * as React from 'react';
import { useState} from 'react'
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

function SignupScreen({ navigation }) { 
  const [first, onChangeText] = React.useState('');
  const [last, onChangeLast] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [showModal, setShowModal] = useState(false);
  var button1 = [
    {
      text: 'Yes',
      onPress: () => {
        setShowModal(!showModal);
      },
    },
    { text: 'No', onPress: () => {} },
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
      <Seperator/> 
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SearchById')}>
        <Text style={styles.buttonText}> Begin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Category')}>
        <Text style={styles.buttonText}> Category</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {}}>
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.modalText}>
            You have successfully signed up and created a chow account! Click Start and enjoy learning more recipes with us.
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
    backgroundColor: '##6E8898',
    shadowColor: '##6E8898',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 25,
  },
  buttonText:{
    fontSize:25,
    // fontFamily: "arial"
    
  },
    seperator: { margin: 10 }
});
export default SignupScreen;