import { Provider } from 'react-redux';
import store from './redux/store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import SignupScreen from './components/SignupScreen';
import Category from './components/Category';
import SearchById from './components/SearchById';
import SearchByName from './components/SearchByName';
import SearchByArea from './components/SearchByArea';
import RandomMeal from './components/RandomMeal';
import SearchEngine from './components/SearchEngine';
import SearchByIngredient from './components/SearchByIngredient';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={
              { title: "Sign Up Page" }
            }
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="SearchEngine"
            component={SearchEngine}
          />
          <Stack.Screen
            name="Category"
            component={Category}
          />
          <Stack.Screen
            name="SearchById"
            component={SearchById}
          />
          <Stack.Screen
            name="SearchByName"
            component={SearchByName}
          />
          <Stack.Screen
            name="SearchByArea"
            component={SearchByArea}
          />
          <Stack.Screen
            name="RandomMeal"
            component={RandomMeal}
          />
          <Stack.Screen
            name="SearchByIngredient"
            component={SearchByIngredient}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

