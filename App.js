import React from 'react';  
import { View, Text, Button } from 'react-native';  
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 
import Homescreen from './screens/Homescreen';
import DateTimescreen from './screens/DateTimescreen';
import Cartscreen from './screens/Cartscreen';
const AppNavigator = createStackNavigator(  
  {  
    Homescreen: {
      screen:Homescreen,
      navigationOptions: {
        headerShown: false,
      },
    }, 
    DateTimescreen: {
      screen:DateTimescreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Cartscreen: {
      screen:Cartscreen,
      navigationOptions: {
        headerShown: false,
      },
    }, 
  },  
  {  
      initialRouteName: "Homescreen"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}