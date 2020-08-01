import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './navigation'
// import createStore from './createReduxStore'
// import { Provider } from 'react-redux'
// import store from './redux/store'

function App() {
  return (
    // <Provider >
    <HomeNavigation />
    // </Provider>
  );
}

export default App;
