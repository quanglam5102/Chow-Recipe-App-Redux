import React, { useEffect, useState, useRef, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import Constants from 'expo-constants';
import ProgressBar from './ProgressBar';

function Seperator() {
  return <View style={styles.seperator}></View>;
}

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
      .finally(() => setLoading(false));
  }, []);

  const header = useRef(new Animated.ValueXY({ x: 5, y: 200 })).current;
  useEffect(() => {
    Animated.timing(header, {
      easing: Easing.bounce,
      toValue: 10,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  });

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
               <ScrollView>
            <Animated.View
              style={{
                position: 'center',
                top: header.x,
                left: header.y,
                backgroundColor: '#6E8898',
                padding: 20,
                borderRadius: 30,
                margin: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              
              <Text style={styles.h1Text}>{data['meals'][0].strMeal}</Text>
            </Animated.View>
            <Seperator/>

            <Text style={styles.h3Text}>{data['meals'][0].strArea}</Text>
            

            <Text style={styles.h2Text}>{data['meals'][0].strCategory}</Text>
            

            <Image
              source={{
                uri: `${data['meals'][0].strMealThumb}`,
              }}
              style={styles.image}
            />
            <Seperator />
            <Text>
              <Text style={styles.h4Text}>Ingredients:{'  '}</Text>
            </Text>
           
            {MakeIngredients(data).map((item)=> (
                <Text key={item}>
                  •{item[1]} [{item[0]}]{' '}
                  {/* {item['meals'][0].strInstructions} */}
                </Text>
              ))}
            <Text>
              {'\n'}
              <Text style={styles.h4Text}>Instructions:{'\n'}</Text>
              <Text style={styles.contentText}>
                {data['meals'][0].strInstructions}
              </Text>
            </Text>
            </ScrollView>
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
    fontSize: 20,

    //fontFamily: 'roboto',
  },
  h1Text: {
    fontSize: 30,
    //fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'white',
  },
  h2Text: {
    fontSize: 30,
    //fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#2E5266',
  },
  h3Text: {
    fontSize: 30,
    //fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#2E5266',
  },
  h4Text: {
    fontSize: 30,
    //fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#2E5266',
  },
  image: {
    height: 200,
    width: 300,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'transparent',
  },
  seperator: { margin: 10 },
});
