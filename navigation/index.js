import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentWeatherPage from '../module/CurrentWeatherPage'
import ListCityPage from '../module/ListCityPage'
import MainPage from '../module/MainPage'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export const CurrentWeather = 'currentWeatherPage'
export const ListCity = 'listCityPage'
export const Main = 'mainPage'
// export const SettingPage = 'settingPage'
console.log("toi day ban oi")
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainPage} screenOptions={ScreenOptions}>
      <Stack.Screen
        options={{title : 'Trang chủ'}}
        key={Main} name={Main} component={MainPage} />
        <Stack.Screen
        options={{title : 'Weather Forecast'}}
        key={CurrentWeather} name={CurrentWeather} component={CurrentWeatherPage} />
        <Stack.Screen key={ListCity} name={ListCity} component={ListCityPage} 
        options={{title : 'Danh Sách Địa Điểm'}}
        />
      </Stack.Navigator>
   </NavigationContainer> 
  );
}

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen key={MainPage} name={MainPage} component={Main} />
//         <Tab.Screen name={SettingPage} key={SettingPage} component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
export default App;

export const ScreenOptions = {
  // headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  // headerTintColor: AppColors.white,
  // headerBackTitleVisible: false,
  // headerShown : false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    paddingHorizontal: 16,
    fontSize : 20,
    color: 'orange'

  },
  // headerLeft :"hello"
  // headerBackground : 'blue'
};
