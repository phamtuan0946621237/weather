import { connect, useDispatch, useSelector } from 'react-redux';
import CurrentWeatherPage from '.';
import { getCurrentWeather } from '../../redux/CurrentWeather/actions';
import { getFourDayWeather } from '../../redux/FourDayWeather/actions';
const CurrentWeatherPagePresenter = props => {
    // const { currentWeather, dispatch, fourDayWeather } = props;
    const dispatch = useDispatch();
    const getCurrentWeatherAction = (payload) => dispatch(getCurrentWeather(payload));
    const getFourDayWeatherAction = (payload) => dispatch(getFourDayWeather(payload));
    
    const currentWeather = useSelector(state => state.currentWeather.list);//
    const fourDayWeather = useSelector(state => state.fourDayWeather.dataFourDayWeather); //

    return CurrentWeatherPage({
        onGetCurrentWeatherAction: getCurrentWeatherAction,
        onGetFourDayWeatherAction: getFourDayWeatherAction,
        fourDayWeather: fourDayWeather,
        currentWeather: currentWeather,
    })
}

// const mapStateToProps = state => ({
//     currentWeather: state.currentWeather.list, // currentWeather lấy ở rootReducer , list là state ở "redux/curentWeather/reducer"
//     fourDayWeather: state.fourDayWeather.dataFourDayWeather // fourDayWeather lấy ở rootReducer , dataFourDayWeather là state ở "redux/fourDayWeather/reducer"
// });

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapDispatchToProps)(CurrentWeatherPagePresenter);