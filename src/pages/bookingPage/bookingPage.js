import React, { useState } from "react";
import {View,Text,Image,StyleSheet,SafeAreaView,TouchableOpacity,TextInput,ScrollView, Alert} from 'react-native';
import {Calendar} from 'react-native-calendars';

const bookingingPage =(props) => {
    const [selectedDate,setSelectedDate]=useState();

return(
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
        <View style={styles.titleView}>
          <TouchableOpacity onPress={ () =>  props.navigation.openDrawer()}>
            <Image source={require('../../assets/images/threeLineIcon.png')} style={styles.menu} />
          </TouchableOpacity>
            <Image source={require('../../assets/images/homePageTitle.png')} style={styles.titlelogo}/>
        </View>
        <View style={{flex:0.1,flexDirection:'row'}}>
            <TouchableOpacity onPress={() => props.navigation.goBack()} >
              <Image style={styles.backbutton} source={require('../../assets/images/backArrow.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Book Appointment</Text>
        </View>
        <View style={{flex:0.15}} >
            <Text style={styles.title2} >Summary</Text>
            <Text style={styles.firstLinetext}>Et dolore magna aliqua Read more..Lorem Lorem</Text>
            <Text style={styles.text}>Ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>
            <Text style={styles.text}>Do eiusmod tempor incididunt ut labore et dolor</Text>
            <Text style={styles.text}>Magna aliquaLorem Lorem ipsum</Text>
        </View>
        <View style={{flex:0.1,flexDirection:'column'}}>
            <Text style={styles.title3}>Enter your address</Text>
            <View style={styles.textBox}>
                <TextInput placeholder="5th Street, Vadapalani, Chennai"
                           placeholderTextColor="#D3B24D"
                           style={styles.address} />
                <Image style={styles.mapicon} source={require('../../assets/images/map-pin.png')} />
            </View>
        </View>
        <View style={{flex:0.42,marginTop:'8%'}}>
        <ScrollView>
        <Calendar
        markingType={'custom'}
        onDayPress={(day) => {console.log('saaacac',day)
                              setSelectedDate({
                                  [day.dateString]:{
                                    customStyles: {
                                                    container: {
                                                    backgroundColor: '#D3B24D',
                                                    borderRadius:4
                                                    },
                                                   text: {
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                   }
                                                }

                                                }
                              }),
                               console.log("slectedDtae",selectedDate)
                            }}
        markedDates={selectedDate}
        theme={{
            arrowColor: 'gray',
            dayTextColor:'#000000',
            textSectionTitleColor: '#000000',
            }}
        style={styles.calendar}
        />
        <View style={styles.time}>
            <View style={{flex:1}} >
                <TouchableOpacity >
                    <Text style={styles.tiemtext} >10AM</Text>
                </TouchableOpacity>
            </View>
        <TouchableOpacity>
            <Image source={require('../../assets/images/downArrow.png')} style={styles.downarrow}/>
        </TouchableOpacity>
        </View>
        <View>
            <Text></Text>
        </View>
        </ScrollView>
        </View>
        <View style={{flex:0.08}}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => Alert.alert('You Have Successfully Booked Appointment')}>
                        <Text style={styles.continue} >Book Now</Text>
                </TouchableOpacity>
        </View>
            
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleView:{
        flex:0.08,backgroundColor:'black',flexDirection:'row'
    },
    menu:{
        width:"25%",height:"27%",marginLeft:'20%',marginTop:'30%'
    },
    titlelogo:{
        marginTop:'1.5%',width:"30%",height:"84%",marginLeft:"17%"
    },
    backbutton:{
        width:'11%',height:'25%',marginTop:'30%',marginLeft:'22%'
    },
    title:{
        fontSize:20,color:'#000000',marginTop:'5%',fontWeight:'bold',marginLeft:'-8%'
    },
    title2:{
        fontSize:18,color:'#000000',textAlign:'left',paddingLeft:20,fontWeight:'bold',marginTop:'-3%'
    },
    firstLinetext:{
        fontSize:13,color:'#000000',textAlign:'left',paddingLeft:20,marginTop:'3%'
    },
    text:{
        fontSize:13,color:'#000000',textAlign:'left',paddingLeft:20
    },
    title3:{
        color:'#000000',fontSize:18,fontWeight:'bold',paddingLeft:20
    },
    textBox:{
        flexDirection:'row',width:"90%",height:'75%',borderRadius:4,shadowColor:'lightgray',elevation:3,alignSelf:'center',marginTop:'2%',shadowOpacity:0.5,shadowOffset:{height:20}
    },
    address:{
        flex:1,paddingLeft:20,color:'#D3B24D'
    },
    mapicon:{
        width:'5.5%',height:'32%',marginTop:'6.5%',marginRight:'8%'
    },
    button:{
        borderRadius:4,backgroundColor:'#D3B24D',width:'90%',height:'78%',alignSelf:'center',marginTop:'7%'
    },
    continue:{
        textAlign:'center',color:'#FFFFFF',fontSize:18,marginTop:'3%'
    },
    time:{
        width:"90%",height:'13%',borderRadius:4,shadowColor:'lightgray',elevation:3.5,alignSelf:'center',flexDirection:'row',shadowOffset:{height:20}
    },
    tiemtext:{
        fontSize:15,textAlign:'left',color:'#000000',marginTop:'6%',paddingLeft:20
    },
    downarrow:{
        width:'28%',height:'15%',marginTop:'50%',marginLeft:'15%'
    },
    calendar:{
        flex:0.25,
        shadowColor:'gray',
        shadowRadius:3,
        elevation:5,
        shadowOffset:{width:20,height:10},
        borderRadius:4,
        width:'88%',
        alignSelf:'center'
    }
    
})

export default bookingingPage;