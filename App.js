import { Provider } from 'react-redux';
import store from './redux/store/index';
import Products from './components/Products';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AssetExample from './components/AssetExample';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("Change")
  console.log("hello world")
  console.log("hello world2")
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="AssetExample" component={AssetExample} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
