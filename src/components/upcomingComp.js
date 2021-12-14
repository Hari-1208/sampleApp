import React from "react";
import  { Text, View,StyleSheet, Image } from 'react-native';


const upcomingComp=(props) => {
      return (
        <View style={{flex:1}}>
        <View style={styles.total}>
          <View style={{flex:0.33,paddingLeft:15}}>
            <Image source={props.mainImage} style={styles.icons} />
          </View>
          <View style={{flexDirection:'column',flex:0.8}} >
            <View style={{flex:1}}>
              <Text style={styles.heading}>{props.heading}</Text>
            </View>
            <View style={{flexDirection:'row',flex:1,paddingLeft:10,marginTop:'5%'}}>
              <View style={{flex:0.15,marginTop:'1%'}} >
              <Image source={require('../assets/images/calendar.png')} style={styles.ccicon} />
              </View>
              <View style={{flex:0.7}} >
              <Text style={styles.texts}>20/10/2021</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',flex:1,paddingLeft:10}}>
              <View style={{flex:0.15}} >
              <Image source={require('../assets/images/clock.png')} style={styles.ccicon} />
              </View>
              <View style={{flex:0.7}} >
              <Text style={styles.texts}>5 p.m </Text>
              </View>
            </View>
            <View style={{flexDirection:'row',flex:1,paddingLeft:10}}>
              <View style={{flex:0.15}} >
              <Image source={require('../assets/images/artist.png')} style={styles.ccicon} />
              </View>
              <View style={{flex:0.7,flexDirection:'row'}} >
              <Text style={styles.texts}>{props.artist}</Text>
              <Text style={styles.texts2}>{props.profession}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      );
    };
    const styles = StyleSheet.create({
      total:{
        flex:0.2,flexDirection:'row',marginTop:'3%',backgroundColor:'#FFFAE9',borderRadius:4,width:'90%',height:133,alignSelf:'center'
      },
      icons:{
        width:'95%',height:'80%',marginTop:'13.5%',borderRadius:4
      },
      heading:{
        color:'#1B1515',fontSize:15,fontWeight:'bold',paddingLeft:10,marginTop:'5%'
      },
      ccicon:{
        width:'57%',height:'58%'
      },
      texts:{
        fontSize:14,textAlign:'left',fontWeight:"normal",color:'#929292'
      },
      texts2:{
        fontSize:14,textAlign:'left',fontWeight:"normal",color:'#D3B24D'
      }
    })

    export default upcomingComp;