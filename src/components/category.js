import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native';

const categ =(props) => {
    return (
        <View style={styles.mianView} >
          <View style={{height:90,width:158,marginLeft:2.5,flex:2}}>
            <Image source={props.scrollImage} style={styles.scrollImage} />
          </View>
          <View style={styles.scrollText}>
              <Text style={styles.text}>{props.name}</Text>
          </View>
          </View>
    );
};

const styles= StyleSheet.create({
  mianView:{
    marginLeft:15,marginTop:20
  },
  scrollImage:{
    width:"95%",height:"100%",borderRadius:8
  },
  scrollText:{
    flex:1,width:156,marginTop:-10,marginLeft:-0.2,height:40,borderRadius:6,borderBottomLeftRadius:12,borderBottomRightRadius:12,shadowColor:'gray',shadowRadius:3,shadowOpacity:10,elevation:3
  },
  text:{
    fontSize:12,marginTop:10,marginLeft:10,color:"black"
  }
})

export default categ;