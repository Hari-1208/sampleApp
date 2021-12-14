import  React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerComp from '../../components/drawerComp';

const drawer =(props)=> {
  return (
    <SafeAreaView style={{flex:1}}>
    <DrawerContentScrollView {...props} >
      <View style={{flex:0.2,flexDirection:'row',marginTop:'8%'}}>
          <View style={{marginLeft:'5%',backgroundColor:'#D3B24D',width:'25%',height:70,borderRadius:40,elevation:20,shadowOpacity:5,shadowRadius:2,shadowOffset:{height:10}}}>
              <Text style={{textAlign:'center',marginTop:'30%',fontSize:18,fontWeight:'500',color:'#FFFFFF'}}>RR</Text>
          </View>
          <View style={{flexDirection:'column',marginLeft:'8%',marginTop:'5%'}}>
              <Text style={{color:'#333333'}}>Swetha</Text>
              <Text style={{color:'#D3B24D'}}>View Profile</Text>
          </View>
      </View>
      <View style={{flexDirection:'column',flex:0.8}}>
          <View style={{flex:0.5}}>
          <TouchableOpacity onPress={()=> props.navigation.navigate('booking')} >
              <DrawerComp icon={require('../../assets/images/Icon1.png')}
                          text="Appoinment"
                          arrow={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
          </View>
          <View style={{flex:0.5}}>
          <TouchableOpacity onPress={()=> props.navigation.navigate('tab')} >
              <DrawerComp icon={require('../../assets/images/Icon1.png')}
                          text="Your Orders"
                          arrow={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
          </View>
          <View style={{flex:0.5}}>
          <TouchableOpacity  >
              <DrawerComp icon={require('../../assets/images/Icon1.png')}
                          text="Products"
                          arrow={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
          </View>
          <View style={{flex:0.5}}>
          <TouchableOpacity  >
              <DrawerComp icon={require('../../assets/images/Icon1.png')}
                          text="Wish List"
                          arrow={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
          </View>
          <View style={{flex:0.5}}>
          <TouchableOpacity >
              <DrawerComp icon={require('../../assets/images/Icon1.png')}
                          text="Payment Method"
                          arrow={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
          </View>
          <View style={{flex:0.5}}>
          <TouchableOpacity >
              <DrawerComp icon={require('../../assets/images/Icon1.png')}
                          text="Profile"
                          arrow={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
          </View>
          <View style={{flex:0.5}}>
          <TouchableOpacity >
              <DrawerComp icon={require('../../assets/images/Icon1.png')}
                          text="Logout"
                          arrow={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
          </View>
      </View>
    </DrawerContentScrollView>
    </SafeAreaView>
  );
};



// const styles = StyleSheet.create({
//     icons:{
//         width:30,height:30,marginTop:'1%',marginLeft:'35%'
//     },
//     Text:{
//         fontSize:15,color:'#000000',textAlign:'left',marginTop:'1.8%',marginLeft:'10%'
//     },
//     arrow:{
//         width:'35%',height:'55%',marginTop:'15%'
//     }
    
// })

export default drawer; 