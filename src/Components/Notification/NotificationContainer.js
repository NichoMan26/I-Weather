import {connect} from 'react-redux'
import Notification from './Notification.jsx'
import {setNotificationText, setIsNotification} from '../../redux/appReducer.js'


let mapStateToProps = (state) => {
    return {
        notification: state.app.notification,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setNotificationText: (text) => {
            dispatch(setNotificationText(text))
        },
        setIsNotification: () => {
            dispatch(setIsNotification())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification)