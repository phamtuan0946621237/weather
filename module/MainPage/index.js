import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BackgroundViewComponent from '../../common/components/BackgroundViewComponent';
import { ListCity } from '../../navigation';
import style from './style';

const MainPage = ({ navigation }) => {
  function onClickSelectCity() {
    navigation.navigate(ListCity)
  }
  return (
    <View style={style.container}>
      <BackgroundViewComponent />
      <TouchableOpacity style={style.chooseCityContainer} onPress={onClickSelectCity}>
        <Text style={style.text}>Chọn địa điểm</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainPage;
