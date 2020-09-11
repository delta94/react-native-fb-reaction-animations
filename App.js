import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AnimationScreen from './src/Animation/Animation.Screen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen
            name="AnimationScreen"
            component={AnimationScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
