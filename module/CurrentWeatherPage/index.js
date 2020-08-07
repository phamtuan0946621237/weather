import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Image3, SunnyIcon } from '../../assets';
import BackgroundViewComponent from '../../common/components/BackgroundViewComponent';
import dataCity from '../../data/data.json';
import ModalSelectedTimeComponent from './component/ModalSelectedTimeComponent';
// import { Homepage, ListCity } from '../../navigation'
import style from './style';
const CurrentWeatherPage = (props) => {
  // Variable
  const [dataFiveDayWeather, setDataFiveDayWeather] = useState()
  const route = useRoute().params
  const indexCity = route?.index;
  const idCity = route?.id;
  const [filterDateToday, setFilterDateToday] = useState()
  const today = new Date();
  const fm = 'YYYY-MM-DD';
  const [nameDate,setNameDate] = useState("Hôm nay")
  var yearNow = today.getFullYear()
  var monthNow = parseInt(today.getMonth() + 1) < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`
  var dayNow = parseInt(today.getDate()) < 10 ? `0${today.getDate()}` : `${today.getDate()}`
  var dateNow = yearNow + '-' + monthNow + '-' + dayNow;
  const [isShow,setIsShow] = useState(false)
  const {onGetCurrentWeatherAction,currentWeather,onGetFourDayWeatherAction,fourDayWeather} = props

  // Lyfe Cycle
  useEffect(() => {
    let param = {
      idCity,
      appId: 'd6cc72542a1131963fd7780fba627db1'
    }
    onGetCurrentWeatherAction(param)
    onGetFourDayWeatherAction(param)
  }, [])

  useEffect(()=> {
    
  },[currentWeather])
  
  useEffect(() => {
    if(!fourDayWeather) return;
    if(fourDayWeather !== undefined) {
      setDataFiveDayWeather(fourDayWeather)
      const filter = fourDayWeather.list.filter((item) => item.dt_txt.slice(0, 10) === dateNow)
      setFilterDateToday(filter)
    }
    
  },[fourDayWeather])

  // Action 
  function _onClickAfterTomorrow2(date) {
    setNameDate("Ngày kia nữa")
    setIsShow(false)
    const filter = dataFiveDayWeather.list.filter((item) => item.dt_txt.slice(0, 10) === date)
    setFilterDateToday(filter)
  }
  function _onClickToday(date) {
    setNameDate("Hôm nay")
    setIsShow(false)
    const filter = dataFiveDayWeather.list.filter((item) => item.dt_txt.slice(0, 10) === date)
    setFilterDateToday(filter)
  }
  function _onClickTomorow(date) {
    setNameDate("Ngày mai")
    setIsShow(false)
    const filter = dataFiveDayWeather.list.filter((item) => item.dt_txt.slice(0, 10) === date)
    setFilterDateToday(filter)
  }
  function _onClickAfterTomorrow(date) {
    setNameDate("Ngày kia")
    setIsShow(false)
    const filter = dataFiveDayWeather.list.filter((item) => item.dt_txt.slice(0, 10) === date)
    setFilterDateToday(filter)
  }
  function _onClickSelectDate() {
    setIsShow(true)
  }

  // Layout
  return (
    <View style={style.container}>
      <Text style={{ color: '#828282', fontSize: 25, textAlign: 'center', marginTop: 5 }}>Hiện tại</Text>
      <BackgroundViewComponent />
      <Image source={Image3} style={{ position: 'absolute', top: 420 }} />
      <View style={{ paddingHorizontal: 40 }}>
        <Text style={{ fontSize: 70, color: '#828282' }}>{currentWeather !== undefined ? currentWeather.main.temp : null}°F</Text>
        <Text style={{ fontSize: 20, color: '#828282', marginTop: 10 }}>Current Weather in {dataCity[indexCity].name}</Text>
        <Text style={{ fontSize: 18, color: '#828282', marginTop: 100 }}>Dự báo thời tiết {nameDate}</Text>
      </View>

      <ScrollView horizontal={true} style={{ backgroundColor: 'white', marginTop: 20 }} showsHorizontalScrollIndicator={false}>
        {filterDateToday !== undefined ?
          filterDateToday.map((item, index) => {
            return (
              <View style={{ marginHorizontal: 30 }} key={index}>
                <Text style={{ color: '#828282' }}>{item.dt_txt.slice(11, 13)} {parseInt(item.dt_txt.slice(11, 13)) > 12 ? "am" : "pm"}</Text>
                <Image source={SunnyIcon} style={{ width: 40, height: 36, marginVertical: 20 }} />
                <Text style={{ color: '#828282' }}>{item.weather.main}</Text>
              </View>
            )
          })
          : null
        }
      </ScrollView>
      <TouchableOpacity style={style.buttonChooseDate} onPress={_onClickSelectDate}>
        <Text style={style.buttonText}>Choose Date</Text>
      </TouchableOpacity>
      <ModalSelectedTimeComponent visible={isShow}
        _onClickAfterTomorrow2={_onClickAfterTomorrow2}
        onClickToday={_onClickToday}
        onClickTomorow={_onClickTomorow}
        onClickAfterTomorrow={_onClickAfterTomorrow}
      />

    </View>
  );
}

export default CurrentWeatherPage;