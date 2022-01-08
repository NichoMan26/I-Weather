import { KEY, PORT } from "../config";

export const getCityCode = (userRequest, errorNotifiction) => {
  
  return fetch (PORT + '/locations/v1/cities/search?apikey=' + KEY + '&q=' + userRequest + '&details=true', 
      { method: 'get' })
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      return JSON.parse(data)[0].Key
    })
    .catch(error => errorNotifiction('Something happened! Try again.'))
}
export const getWeatherByCityCode = (CityCode) => {

  return fetch(PORT + '/forecasts/v1/daily/1day/' + CityCode + '?apikey=' + KEY + '&details=true&metric=true', 
          { method: 'get' })
            .then((response) => {
              return response.text()
            })
            .then((data) => {
              return JSON.parse(data);
            })
}

export const getDate = (date) => {
  let daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]
  let dateObj = new Date(date)
  let result = `${dateObj.getDate()}.${dateObj.getMonth() + 1} ${daysOfWeek[dateObj.getDay()]}`
  return result
}
