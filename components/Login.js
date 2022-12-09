import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Login({navigation, route}) {
    return (
      <View>
        <Text>This is the Login Page</Text>
        <Button title="Go to Home Page" onPress={() => {
        navigation.navigate("Home")
      }} />
      <Button title="Go to Register Page" onPress={() => {
        navigation.navigate("Register")
      }} />
      </View>
    );
}