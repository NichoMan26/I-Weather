import { getDate } from '../../../assets/functions';
import cls from './CardHeader.module.css'

function CardHeader(props) {

  return (
        <div className={cls.headerWrapper}>
          <h1 className={cls.cityName}>{props.app.citySearch}</h1>
          <span className={cls.date}>{getDate( props.weather.DailyForecasts[0].Date)}</span>
        </div>
  );
}

export default CardHeader;
