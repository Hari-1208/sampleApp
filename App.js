import React from 'react';
import Stack from './src/navigation/stackNavigation';
// import Splash from './src/pages/login/splashScreen';
// import OnBoardingScreen1 from './src/pages/login/userLoginS1';
// import LastSlide from './src/pages/login/slideScreen';
// import SlideScreen3 from './src/pages/login/sildeScreenTest';
// import HomeScreen from './src/pages/hompage/homepage'
// import Login from './src/pages/login/loginScreen';
// import SignUpPage1 from './src/pages/login/signup1';
// import OTPpage from './src/pages/login/OTPverification';
// import OTPpage2 from './src/pages/login/OTPverification2';
// import GetStartPage from './src/pages/login/getstartpage';
// import DrawerPage from './src/pages/hompage/drawerPage';
// import HairPage from './src/pages/hompage/hairTrends';
// import DrawerNav from './src/navigation/drawerNvigation';
// import BookingingPage from './src/pages/bookingPage/bookingPage';
// import Tab from './src/navigation/tabNavigation';
// import Tabhome from './src/pages/bookingPage/tabHome';
// import Tabupcoming from './src/pages/bookingPage/tabUpcomings';
// import SapmpleApi from './src/api/apiSample';
// import FlatList from './src/api/flatListAPI';
// import { PersistGate } from 'redux-persist/es/integration/react';
 import { Provider } from 'react-redux';
// import ConfigStore from './src/redux/store/store';
// import store from './src/counter/Reducers/index';
// import CounterActions from './src/counter/Actions/counterActions';
// import Counter from './src/reduxPersist/counterScreen/counterScr'
// import {store,persistor} from './src/reduxPersist/store/store';
import GlobalContext from './src/contextAPI/globalContext';
import GoogleSignin from './src/googleSignin/googleSignin';
import List from './src/googleSignin/dataListPage';
import PostPage from './src/googleSignin/postPage';
import PushNotification from './src/pushNotification/pushNotication';
import Push from './src/pushNotification/pushController';
import LinkCreation from './src/deepLink/linkCreation';
import Store from './src/reduxSaga/configureStore/store'
import SagaTest from './src/reduxSaga/uiComponent/ui';



// export default App = () => {
//   return (
//     // Redux: Global Store
//     <Provider store={store}>
//       <PersistGate 
//         loading={null}
//         persistor={persistor}
//       >
//         <Counter />
//       </PersistGate>
//     </Provider>
//   );
// };


//const store = ConfigStore()

const app = (props) =>{

  return(
    <Provider store={Store}>
      <SagaTest />
    </Provider>
  );
}

  // return (
  //   <Provider store={store}>
  //     <Stack />
  //   </Provider>
  // )

  //return(
//<Stack />
// <Splash />
// <OnBoardingScreen1 />
// <LastSlide />
// <SlideScreen3 />
// <HomeScreen />
// <Login/>
// <SignUpPage1 />
// <OTPpage />
// <OTPpage2 />
// <GetStartPage />
// <DrawerPage />
// <HairPage />
// <DrawerNav />
// <BookingingPage />
// <Tab />
// <BookingSchedule />
// <Tabhome />
// <Tabupcoming />
// <SapmpleApi/>
// <FromPage />
// <FlatList />
//<GlobalContext />
//<GoogleSignin />
//<List/>
//<PostPage/>
//<PushNotification />
//<Push/>
//<LinkCreation />
   //)
//}

export default app;