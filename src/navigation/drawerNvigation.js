import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../pages/hompage/homepage';
import Drawe from '../pages/hompage/drawerPage';

const Drawer = createDrawerNavigator();

const MyDrawer =()=> {
  return (
    
    <Drawer.Navigator initialRouteName={'home'}
      screenOptions={{headerShown:false,drawerStyle:{borderTopRightRadius:10,borderBottomRightRadius:10}}}
      drawerContent={(props) => <Drawe {...props} />}
    >
      <Drawer.Screen name="home" component={HomePage} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;