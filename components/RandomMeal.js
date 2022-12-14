import React, { useEffect, useState, useRef, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Button,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import ProgressBar from './ProgressBar';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(100);

  function MakeIngredients(a) {
    const ingredientsData = {
      1: [a['meals'][0].strMeasure1, a['meals'][0].strIngredient1],
      2: [a['meals'][0].strMeasure2, a['meals'][0].strIngredient2],
      3: [a['meals'][0].strMeasure3, a['meals'][0].strIngredient3],
      4: [a['meals'][0].strMeasure4, a['meals'][0].strIngredient4],
      5: [a['meals'][0].strMeasure5, a['meals'][0].strIngredient5],
      6: [a['meals'][0].strMeasure6, a['meals'][0].strIngredient6],
      7: [a['meals'][0].strMeasure7, a['meals'][0].strIngredient7],
      8: [a['meals'][0].strMeasure8, a['meals'][0].strIngredient8],
      9: [a['meals'][0].strMeasure9, a['meals'][0].strIngredient9],
      10: [a['meals'][0].strMeasure10, a['meals'][0].strIngredient10],
      11: [a['meals'][0].strMeasure11, a['meals'][0].strIngredient11],
      12: [a['meals'][0].strMeasure12, a['meals'][0].strIngredient12],
      13: [a['meals'][0].strMeasure13, a['meals'][0].strIngredient13],
      14: [a['meals'][0].strMeasure14, a['meals'][0].strIngredient14],
      15: [a['meals'][0].strMeasure15, a['meals'][0].strIngredient15],
      16: [a['meals'][0].strMeasure16, a['meals'][0].strIngredient16],
      17: [a['meals'][0].strMeasure17, a['meals'][0].strIngredient17],
      18: [a['meals'][0].strMeasure18, a['meals'][0].strIngredient18],
      19: [a['meals'][0].strMeasure19, a['meals'][0].strIngredient19],
      20: [a['meals'][0].strMeasure20, a['meals'][0].strIngredient20],
    };

    const ingredients = [];

    for (i = 1; i < 21; i++) {
      const ingredient = ingredientsData[i];
      if (
        ingredient[0] !== '' &&
        ingredient[0] !== null &&
        ingredient[0] !== ' '
      ) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setTimeout(setLoading(false),2000));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    {/* <ScrollView> */}
      {isLoading ? (
        <ProgressBar
          progress={progress}
          max={100}
          min={0}
          backColor={'#6B1818'}
          barColor={'#dbdb9f'}
          borderColor={'#6b4118'}
        />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text>
            <Text style={styles.h1Text}>{data['meals'][0].strMeal}</Text>
            {'\n'}
            <Text style={styles.h2Text}>{data['meals'][0].strCategory}</Text>
            {'\n'}
            <Text style={styles.h3Text}>{data['meals'][0].strArea}</Text>
            {'\n'}
            {'\n'}
            <Text style={styles.h4Text}>Ingredients:{'  '}</Text>
            </Text>
            <FlatList
              style={styles.contentText}
              data={MakeIngredients(data)}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <Text>
                  •{item[1]} [{item[0]}]{' '}
                </Text>
              )}
            />
            <Text>
            <Text style={styles.h4Text}>Instructions:{'\n'}</Text>
            <Text style={styles.contentText}>
              {data['meals'][0].strInstructions}
            </Text>
          </Text>
        </View>
      )}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
  },
  contentText: {
    fontSize: 18,
  },
  h1Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6B1818',
  },
  h2Text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6b4118',
  },
  h3Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B1818',
  },
  h4Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6b4118',
  },
});
