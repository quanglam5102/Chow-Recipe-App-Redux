import React, { useState, useEffect, useRef } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Alert,
  Animated,
  Easing,
} from 'react-native';

const SearchByName = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const vector = useRef(new Animated.ValueXY({ x: 5, y: 200 })).current; useEffect(() => {
    Animated.timing(vector, { easing: Easing.bounce, toValue: 10, duration: 2000, useNativeDriver: false}).start();
  },);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  const searchFilterFunction = (text) => {
    // console.log(masterDataSource)
    if (text) {

      const newData = masterDataSource.filter(function (item) {

        const itemData = item.strMeal
          ? item.strMeal.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {

      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  // the item
  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.strMeal.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#f5ebe0',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    Alert.alert('Meal Details', 'Meal : ' + item.strMeal + '  Category : ' + item.strCategory + ' Instruction: ' + item.strInstructions);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', }}>
      <View style={styles.container}>
        <Animated.View
          style={{
            position: 'center',
            top: vector.x,
            left: vector.y,
            backgroundColor: '#6B1818',
            padding: 20,
            borderRadius: 20,
            margin: 20,

          }}>
          <Text style={styles.ani}>Search By Name</Text>
        </Animated.View>
        {/* <Text style={styles.sHeader}>Search by name</Text> */}
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search a recipe"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(_item, index) => index.toString()}
          // ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 70,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#6B1818',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,


  },
  sHeader: {
    fontSize: 40,
    color: '#6B1818',

  }
});

export default SearchByName;


