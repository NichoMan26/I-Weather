import { createStore, combineReducers } from 'redux'
import weatherReducer from './weatherReducer.js'
import appReducer from './appReducer.js'
 

let reducers = combineReducers({
  weather: weatherReducer,
  app: appReducer,
})
let store = createStore(reducers)

window.store = store
export default store  