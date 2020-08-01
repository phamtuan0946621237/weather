import React, { useState } from 'react';
import { Text, View } from 'react-native';
// import {HomePage,ListPage} from '../../navigation/HomeNavigation/index'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Data from '../../data/data.json';
import { CurrentWeather } from '../../navigation';
import style from './style';
function ListCityPage({ navigation }) {
  const [state, setState] = useState(
    {
      data : Data
    }
);
  // Action
  function _onClickSelectCity(index) {
    console.log(index)
    navigation.navigate(CurrentWeather,{
      index : index,
      id : Data[index].id
    })
  }

  // Layout
  function _buildListCityItem(name,index) {
    return (
      <TouchableOpacity style={style.buttonContainer} onPress={() => _onClickSelectCity(index)}>
        <Text style={style.text}>
          {name}
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={style.layout}>
      <ScrollView >
      
        {Data.map((item,index)=> {
            return (
              <View key={index}>
              {_buildListCityItem(item.name,index)}
              </View>
            )
        })}
      </ScrollView>
    </View>
  );
}

export default ListCityPage;
