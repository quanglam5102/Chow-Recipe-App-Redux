import { Provider } from 'react-redux';
import store from './redux/store/index';
import Products from './components/Products';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AssetExample from './components/AssetExample';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("hellow world")
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="AssetExample" component={AssetExample} />
        {/* <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Recipes" component={RecipeList}/>
        <Stack.Screen name = "Login" component={Login}/> */}
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
