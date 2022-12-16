import * as React from 'react';
import { useEffect, useState,useRef } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Animated,
  Easing
 
} from 'react-native';

const SearchByName = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

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



//  A filter to match the text that you inserted
  const searchFilterFunction = (text) => {
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

 

  const getItem = (item) => {
    // Function for click on an item
    alert('Meal : ' + item.strMeal + '  Category : ' + item.strCategory +' Instruction: '+ item.strInstructions );
  };

  const header = useRef(new Animated.ValueXY({ x:5 , y: 200 })).current;  useEffect(() => {    
    Animated.timing(header, {easing: Easing.bounce,toValue: 10,duration: 1000, useNativeDriver: false}).start();
  }, );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'beige', }}>
      <View style={styles.container}>
      <Animated.View        
    style={{          
      position: 'center',          
      top: header.x,          
      left: header.y,          
      backgroundColor: '#6E8898',         
      padding: 20,     
      borderRadius:30,
       margin: 25,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
       }}>        
       <Text style={styles.ani}>Search Recipe By Name</Text>      
       </Animated.View>
      
      

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
          
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
  },
  itemStyle: {
    fontSize:15,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderRadius:20,
    borderColor: '#6E8898',
    color:'#6E8898',
    margin: 10,
    
    
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 110,
    margin: 1,
    borderColor: '#6E8898',
    backgroundColor: '#FFFFFF',
    borderRadius:20,
    color:'#6E8898',
    
    
    
    
   
  },
  ani:{
    fontSize:23,
    color:'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  

  }
  
});

export default SearchByName;