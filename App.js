import { Provider } from 'react-redux';
import store from './redux/store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './components/Products';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'; 
import Recipes from './components/Recipes';
import SignupScreen from './components/SignupScreen';

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
              {title: "Sign Up Page"}
            }
            />
          <Stack.Screen 
            name="Category"
            component={Category}
            />
           {/* <Stack.Screen 
            name=""
            component={}
            options={
              {title: ""}
            }
          />
          <Stack.Screen
            name=""
            component={}
            options={
              {title: ""}
            }
          /> */}
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

