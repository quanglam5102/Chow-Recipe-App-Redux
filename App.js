import { Provider } from 'react-redux';
import store from './redux/store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './components/Products';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'; 
import Recipes from './components/Recipes';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("hellow world")
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name = "Register" component={Register}/>
        <Stack.Screen name = "Recipes" component={Recipes}/>
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
