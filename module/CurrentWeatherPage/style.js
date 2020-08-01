import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1
    },
    time: {
        textAlign: 'center',
        fontSize: 20,
        color: '#828282'
    },
    buttonChooseDate : {
        borderColor: 'orange',
        padding: 16,
        marginVertical: 50,
        marginHorizontal: 32,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonText : {
        color: 'orange',
        fontSize: 16
    },
    modalView : {
        backgroundColor:'white',
        marginHorizontal: 24,
        flex: 1,
        borderRadius: 12

    },
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
    }
});