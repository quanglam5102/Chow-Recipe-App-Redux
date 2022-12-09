import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Home({navigation, route}) {
    return (
      <View>
        <Text>This is the HomePage</Text>
        <Button title="Go to Recipes Page" onPress={() => {
        navigation.navigate("Recipes")
      }} />
      </View>
    );
}