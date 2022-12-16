import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Appbar, Searchbar, Paragraph, Card } from 'react-native-paper';

export default function Category({navigation}) {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const getMeals = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.categories);
  };
  useEffect(() => {
    getMeals();
  }, []);

  const onChangeSearch = (query) => setSearch(query);
  return (
    <View>
      <Appbar style={{ backgroundColor: '#6E8898'}}>
      {/* button for navigation, with the styling 
      to place the button in the top right corner. 
      Left the navigation empty for whatever the next page might be
      */}
      {/* <TouchableOpacity
        style={styles.reviewbutton}
        onPress={() => navigation.navigate('')}>
        <Text style={{fontSize: 20, left: 300}}>
            Next
          </Text>
      </TouchableOpacity> */}
        <Appbar.Content title="Chow!" textAlign="center" />
        <Appbar.Header
          style={{ backgroundColor: '#6E8898'}}></Appbar.Header>
      </Appbar>
      <Searchbar
        placeholder="search here"
        value={search}
        onChangeText={onChangeSearch}
      />
      <ScrollView>
        {meals.map((meal) => (
          <Card key={meal.idCategory}>
            <Card.Cover source={{ uri: meal.strCategoryThumb }} />
            <Card.Title style={{ backgroundColor: 'beige'}} title={meal.strCategory} />
            <Card.Content>
              <Paragraph style={{ backgroundColor: 'white'}}>{meal.strCategoryDescription}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
