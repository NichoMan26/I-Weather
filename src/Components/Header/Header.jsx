import { useEffect } from 'react';
import { getCityCode, getWeatherByCityCode } from '../../assets/functions';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import cls from './Header.module.css'


function Header(props) {
  function errorNotification(text){
    props.setIsNotification()
    props.setNotificationText(text)
  }
   useEffect(() => {
    getCityCode('Helsinki',errorNotification)
      .then((CityCode) => {
        getWeatherByCityCode(CityCode)
          .then((weatherObj) => {
            props.setWeather(weatherObj)
          })
    })
  },[])
  return (
    <div className={cls.wrapper}>
     <Logo/>
     <Search 
      setIsNotification={ props.setIsNotification} 
      setNotificationText={props.setNotificationText} 
      setWeather={props.setWeather} 
      setCity={props.setCity} 
      setCitySearch={props.setCitySearch} 
      city={props.app.city}
      />
    </div>
  );
}

export default Header;
