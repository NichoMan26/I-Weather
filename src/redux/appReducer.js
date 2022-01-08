const SET_CITY = 'SET_CITY'
const SET_CITY_SEARCH = 'SET_CITY_SEARCH'
const SET_NOTIFICATION_TEXT = 'SET_NOTIFICATION_TEXT'
const SET_IS_NOTIFICATION = 'SET_IS_NOTIFICATION'

let initState = {
  city: '',
  citySearch:'Helsinki',
  notification:{
    isNotification: false,
    textNotification: ''
  }
}

const appReducer = (state = initState, action) => {  
    switch(action.type){
        case SET_CITY:          
          return {...state, city:action.city,}
        case SET_CITY_SEARCH:          
          return {...state, citySearch:state.city}
        case SET_NOTIFICATION_TEXT:          
          return {...state, notification:{...state.notification, textNotification:action.text}}
        case SET_IS_NOTIFICATION:          
          return {...state, notification:{...state.notification, isNotification:!state.notification.isNotification}}
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
export const setCity = (city) => ({type:SET_CITY, city})
export const setCitySearch = () => ({type:SET_CITY_SEARCH})
export const setNotificationText = (text) => ({type:SET_NOTIFICATION_TEXT, text})
export const setIsNotification = () => ({type:SET_IS_NOTIFICATION})
// export const setAppMode = (appMode) => ({type:SET_APP_MODE, appMode})
// export const setNotification = (notificatiomObj) => ({type:SET_NOTIFICATION, notificatiomObj})
// export const setIsFetch = (fetching) => ({type:IS_FETCH, fetching})
export default appReducer