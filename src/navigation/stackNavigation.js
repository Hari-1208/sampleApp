import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../pages/login/splashScreen'
import LoginScreen from '../pages/login/slideScreen';
import BasicInfo from '../pages/login/loginScreen';
import SingUpPage from '../pages/login/signup1';
import OTPVerificationPage from '../pages/login/OTPverification';
import OTPVerificationPage2 from '../pages/login/OTPverification2';
import StartPage from '../pages/login/getstartpage';
import HomePage from '../pages/hompage/homepage';
import Drawer from '../navigation/drawerNvigation';
import HairPage from '../pages/hompage/hairTrends';
import MakeupPage from '../pages/hompage/makeupTrends';
import NailPage from '../pages/hompage/nailTrends';
import BookingPage from '../pages/bookingPage/bookingPage';
import TabNav from './tabNavigation';
import Sample from '../api/apiSample';
import FlatList from '../api/flatListAPI';
import ReduxWelcomeScreen from '../redux/reduxWelcomeScreen';
import ReduxHomeScreen from '../redux/reduxHomeScreen';
import GoogleSignin from '../googleSignin/googleSignin';
import List from '../googleSignin/dataListPage';
import PostPage from '../googleSignin/postPage';


const Stack = createNativeStackNavigator();
const myapp = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
                {/* <Stack.Screen name="splashScreen" component={Splash} />
                <Stack.Screen name="userLoginS1" component={LoginScreen} />
                <Stack.Screen name="basicinfo" component={BasicInfo} />
                <Stack.Screen name="signup" component={SingUpPage} />
                <Stack.Screen name="OTPpage" component={OTPVerificationPage} />
                <Stack.Screen name="OTPpage2" component={OTPVerificationPage2} />
                <Stack.Screen name="start" component={StartPage} />
                <Stack.Screen name="drawer" component={Drawer} options={{gestureEnabled:true}} />
                <Stack.Screen name="hair" component={HairPage} options={{gestureEnabled:true}} />
                <Stack.Screen name="makeup" component={MakeupPage} />
                <Stack.Screen name="nail" component={NailPage} />
                <Stack.Screen name="booking" component={BookingPage} />
                <Stack.Screen name="tab" component={TabNav} /> */}
                {/* <Stack.Screen name="flatlist" component={FlatList} />
                <Stack.Screen name="sample" component={Sample} /> */}
                {/* <Stack.Screen name="reduxWelcome" component={ReduxWelcomeScreen} />
                <Stack.Screen name="reduxHome" component={ReduxHomeScreen} /> */}
                {/* <Stack.Screen name="reduxDetails" component={ReduxDetailScreen} /> */}
                <Stack.Screen name="googleSignin" component={GoogleSignin} />
                <Stack.Screen name="list" component={List} />
                <Stack.Screen name="post" component={PostPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default myapp;