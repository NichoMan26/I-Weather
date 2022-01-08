import cls from './Card.module.css'
import CardHeader from './CardHeader/CardHeader';
import Temperature from './Temperature/Temperature';

function Card(props) {
  return (
    <div className={cls.wrapper}>
      <div className={cls.body}>
        <CardHeader app={props.app} weather={props.weather}/>
        <Temperature app={props.app} weather={props.weather}/>
      </div>
    </div>
  );
}

export default Card;
