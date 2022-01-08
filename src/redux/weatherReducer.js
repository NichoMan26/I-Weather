const SET_WEATHER = 'SET_WEATHER'

let dateNow = new Date()
let initState = {
  DailyForecasts:[{
    Date: dateNow,
    Temperature:{
      Maximum:{
        Value:0,
        Unit:'C'
      },
      Minimum:{
        Value:0,
        Unit:'C'
      }
    }
  }],
  Headline:{
    
  }
}

const weatherReducer = (state = initState, action) => {  
    switch(action.type){
        case SET_WEATHER:          
          return {...action.weatherObj}
        // case SET_APP_MODE:   
        //   return {...state, app:{...state.app, appMode:action.appMode}}
        // case SET_NOTIFICATION:   
        //   return {...state, app:{...state.app, notification:action.notificatiomObj}}
        // case IS_FETCH:   
        //   return {...state, app:{...state.app, isFetch:action.fetching}}
        default:
            return state
    }
}
export const setWeather = (weatherObj) => ({type:SET_WEATHER, weatherObj})
// export const setAppMode = (appMode) => ({type:SET_APP_MODE, appMode})
// export const setNotification = (notificatiomObj) => ({type:SET_NOTIFICATION, notificatiomObj})
// export const setIsFetch = (fetching) => ({type:IS_FETCH, fetching})
export default weatherReducer