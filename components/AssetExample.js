import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function AssetExample({navigation, route}) {
  return (
    <View style={styles.container}>
      <Button title="Go to Products Page" onPress={() => {
        navigation.navigate("Products", {message: 'message from AssetExample page'})
      }}/>
      <Button title="Go back but delete message" onPress={() => {
        navigation.navigate("Products");
      }} />
      <Text>{route?.params?.message ?? undefined ? route.params.message : ""}</Text>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
