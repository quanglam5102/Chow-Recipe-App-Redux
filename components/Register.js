import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Register({navigation, route}) {
    return (
      <View>
        <Text>This is the Regsiter Page</Text>
        <Button title="Go to Login Page" onPress={() => {
        navigation.navigate("Login")
      }} />
      </View>
    );
}