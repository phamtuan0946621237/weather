import React from 'react';
import { Modal, Text, View,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Image3, SunnyIcon } from '../../assets';
// import BackgroundViewComponent from '../../common/components/BackgroundViewComponent';
// import { Homepage, ListCity } from '../../navigation'
// import style from './style';

import moment from "moment";
const ModalSelectedTimeComponent = (props) => {
  // Variable]
  const fm = 'YYYY-MM-DD';
  const today = new Date();
  
  var yearNow = today.getFullYear()
  var monthNow = parseInt(today.getMonth() + 1) < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`
  var dayNow = parseInt(today.getDate()) < 10 ? `0${today.getDate()}` : `${today.getDate()}`
  var dateNow = yearNow + '-' + monthNow + '-' + dayNow;
  const tomorow = moment(today.getTime() + (1 * 24 * 60 * 60 * 1000)).format(fm);
  const afterTomorrow = moment(today.getTime() + (2 * 24 * 60 * 60 * 1000)).format(fm);
  const afterTomorrow2 = moment(today.getTime() + (3 * 24 * 60 * 60 * 1000)).format(fm);
  // Lyfe Cycle

  // action 
  function _onclickSelectedafterTomorrow2(afterTomorrow2) {
    props._onClickAfterTomorrow2(afterTomorrow2)
  }
  function _onclickSelectedToday(dateNow) {
    props.onClickToday(dateNow)
  }
  function _onclickSelectedTomorow(tomorow) {
    props.onClickTomorow(tomorow)
  }
  function _onclickSelectedAfterTomorrow(afterTomorrow) {
    props.onClickAfterTomorrow(afterTomorrow)
  }
  // Layout

  function _buildModalItem(title,onclickSelectedTime,bottom) {
    return (
      <TouchableOpacity style={[style.itemContainer,bottom === true ? null : style.line]} onPress={onclickSelectedTime}>
              <Text style={style.textModal}>{title}</Text>
      </TouchableOpacity>
    )
  }
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
      >
          <View style={style.modalRoot} >
            <View style={style.modalView}>
              {_buildModalItem("Hôm nay",() => _onclickSelectedToday(dateNow))}
              {_buildModalItem("Ngày mai",() => _onclickSelectedTomorow(tomorow))}
              {_buildModalItem("Ngày kia",() => _onclickSelectedAfterTomorrow(afterTomorrow))}
              {_buildModalItem("Ngay kia nữa",() => _onclickSelectedafterTomorrow2(afterTomorrow2),true)}
            </View>
            </View>
      </Modal>
  );
}

export default ModalSelectedTimeComponent;
const style = StyleSheet.create({
  modalRoot : {
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection:'row',
    alignItems : 'center',
    justifyContent : 'center'
},
itemContainer : {
    padding : 16,
    flexDirection:'row',
    justifyContent: 'center',
},
line : {
 borderBottomColor : '#EDEEEF',
 borderBottomWidth : 1   
},
textModal : {
    color: 'orange',
    fontSize: 16,
},
modalView : {
  backgroundColor:'white',
  marginHorizontal: 24,
  flex: 1,
  borderRadius: 12

},
})