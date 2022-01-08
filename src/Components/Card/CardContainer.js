import {connect} from 'react-redux'
import Card from './Card.jsx'
import {setWeather} from '../../redux/weatherReducer.js'


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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)