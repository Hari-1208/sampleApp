import  React from 'react';
import {View,Text, SafeAreaView,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tabhome from '../pages/bookingPage/tabHome';
import Tabupcoming from '../pages/bookingPage/tabUpcomings';
import Tabcompleted from '../pages/bookingPage/tabCompleted';



const Tab = createMaterialTopTabNavigator();
  
const tabNav = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
    <View style={{flex:0.08,backgroundColor:'black',flexDirection:'row'}}>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Image source={require('../assets/images/threeLineIcon.png')} style={styles.menu} />
      </TouchableOpacity>
        <Image source={require('../assets/images/homePageTitle.png')} style={styles.titlelogo}/>
    </View>
    <View style={{flex:0.06}}>
        <Text style={styles.title}>My Bookings</Text>
    </View>
    <View style={{flex:0.8,marginTop:'1%'}}>
        <Tab.Navigator
                   screenOptions={{
                   tabBarActiveTintColor: '#D3B24D',
                   tabBarInactiveTintColor:'#737373',
                   tabBarIndicatorStyle:{backgroundColor:'#D3B24D',height:3}

                   }}>
                    <Tab.Screen name="Pending" component={Tabhome} />
                    <Tab.Screen name="Upcomings" component={Tabupcoming} />
                    <Tab.Screen name="Completed" component={Tabcompleted} />
        </Tab.Navigator>
    </View>
</SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    menu:{
        width:"25%",height:"27%",marginLeft:'20%',marginTop:'30%'
    },
    titlelogo:{
        marginTop:'1.5%',width:"30%",height:"84%",marginLeft:"17%"
    },
    title:{
        fontSize:20,color:'#000000',marginTop:'3%',fontWeight:'bold',paddingLeft:20
    },
})


export default tabNav;

