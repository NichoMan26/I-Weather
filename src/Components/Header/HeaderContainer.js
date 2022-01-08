import {connect} from 'react-redux'
import Header from './Header.jsx'
import {setWeather} from '../../redux/weatherReducer.js'
import {setCity, setCitySearch} from '../../redux/appReducer.js'
import {setNotificationText, setIsNotification} from '../../redux/appReducer.js'


let mapStateToProps = (state) => {
    return {
        weather: state.weather,
        app: state.app,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setWeather: (weatherObj) => {
            dispatch(setWeather(weatherObj))
        },
        setCity: (city) => {
            dispatch(setCity(city))
        },
        setCitySearch: () => {
            dispatch(setCitySearch())
        },
        setNotificationText: (text) => {
          dispatch(setNotificationText(text))
        },
        setIsNotification: () => {
            dispatch(setIsNotification())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)