import { useState, useRef, useEffect } from 'react';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Button,
  Alert,
  Animated
} from 'react-native';


function Seperator() {
  return <View style={styles.seperator}></View>;
}
const FadeIn = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};
function HomeScreen({ navigation }) {
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
  const logo = useRef(new Animated.ValueXY({ x: 5, y: 200 })).current;
  useEffect(() => {});
  return (
    <View style={styles.container}>
       <ScrollView>
       <TouchableOpacity
        onPress={() => navigation.navigate('SearchEngine')}>
        <Text style={styles.buttonText}> Search Engine </Text>
      </TouchableOpacity>
      <FadeIn>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      </FadeIn>
         <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert(
            'Attention',
            'Are you sure you want to continue?',
            button1
          );
        }}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {}}>
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.modalText}>
            Welcome to CHOW food recipes where you’ll be able to learn how to make amazing dishes with the help of our many features. You’ll be able to browse through dozens of recipes with the ingredients to go with it. You’ll also be able to search for specific meals you want to to enjoy from all over the world all here. We love to make cooking EASY!
          </Text>
          <Button title="Close" onPress={() => setShowModal(!showModal)} />
        </View>
      </Modal>
         <Seperator/>
        
      <Image style={styles.logo} source={require('../assets/pasta.jpeg')} />
       <Image style={styles.logo} source={require('../assets/sushi.jpeg')} />
       <Image style={styles.logo} source={require('../assets/noodles.jpeg')} />
       <Image style={styles.logo} source={require('../assets/rice.jpeg')} />
       <Image style={styles.logo} source={require('../assets/sandwitch.jpeg')} />
       </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFBE0',
    padding: 30,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  logo: {
    height: 350,
    width: 300,
    
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#6E8898',
    shadowColor: '#6E8898',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 30,
  },
  buttonText:{
    fontSize:20, 
    color:'black',
    
  },
  modalText:{
    fontSize: 20
  },
  seperator: { margin: 10 },
});
export default HomeScreen;
