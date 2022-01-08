import cls from './Notification.module.css'

function Notification(props) {

  const clickCancelHander = () => {
    props.setIsNotification()
  }
  return (
    <div className={cls.wrapper}>
      {props.notification.isNotification
        ? <div className={cls.body}>
            {props.notification.textNotification}
            <div onClick={() => clickCancelHander()} className={cls.cancelButton}>&#10060;</div>
          </div>
        : null}
    </div>
    
  );
}

export default Notification

;