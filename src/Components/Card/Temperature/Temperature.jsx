import cls from './Temperature.module.css'
import dayIcon from '../../../img/01-s.png'
import nightIcon from '../../../img/33-s.png'
function Temperature(props) {
  let temp = props.weather.DailyForecasts[0].Temperature

  return (
    <div className={cls.wrapper}>
      <span className={cls.temperatureHeader}>Temperature:</span>
      <span className={cls.dayTemperature}>
        <img src={dayIcon} alt='day'/>
        {temp.Maximum.Value}
        <span className={cls.degree}>
          {temp.Maximum.Unit}
          <sup>o</sup>
        </span>
      </span>
      <span className={cls.dayTemperature}>
      <img src={nightIcon} alt='night'/>
        {temp.Minimum.Value}
        <span className={cls.degree}>
          {temp.Minimum.Unit}
          <sup>o</sup>
        </span>
      </span>
    </div>
  );
}

export default Temperature;
