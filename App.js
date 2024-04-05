import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hello from './app/pages/Hello';


const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{ headerShown: false }} name='hello' component={Hello} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

