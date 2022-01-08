import cls from './App.module.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import HeaderContainer from "./Components/Header/HeaderContainer";
import CardContainer from './Components/Card/CardContainer';
import NotificationContainer from './Components/Notification/NotificationContainer';



function App() {
  // const setPositions = (params) => {
  //   console.log('coord');
  //     setPlace({lat:params.coords.latitude, lon:params.coords.longitude})
  // }
  // navigator.geolocation.getCurrentPosition(setPositions)
  // console.log('place: ', place);
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderContainer/>
        <CardContainer/>  
        <NotificationContainer/>
      </div>
    </Provider>
  );
}

export default App;
