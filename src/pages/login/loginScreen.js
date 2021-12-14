import React from "react";
import {View,Text,Image,StyleSheet,SafeAreaView,TextInput,TouchableOpacity} from 'react-native';


const loginScreen = (props) => {
return(
    <SafeAreaView style={{backgroundColor:'#FFFFFF',flex:1}}>
        <View style={{flex:0.4}}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}></Image>
            <Text style={styles.caption}>Tell us a little about youurself to creat a perfect Flawless for you!</Text>
            <Text style={styles.register}>Register</Text>
            <View style={styles.textView}>
                <Image source={require('../../assets/images/user.png')} style={styles.usericon} />
                <TextInput style={styles.text} placeholder="      First Name" placeholderTextColor="#4F4F4F" />
            </View>
            <View style={styles.textView}>
                <Image source={require('../../assets/images/user.png')} style={styles.usericon} />
                <TextInput style={styles.text} placeholder="      Last Name" placeholderTextColor="#4F4F4F" />
            </View>
            <View style={styles.textView}>
                <Image source={require('../../assets/images/mail.png')} style={styles.mailicon} />
                <TextInput style={styles.text} placeholder="      Email ID" placeholderTextColor="#4F4F4F" />
            </View>
            <View style={styles.textView}>
                <Image source={require('../../assets/images/phone.png')} style={styles.phoneicon} />
                <TextInput style={styles.text} placeholder="      Phone Number" placeholderTextColor="#4F4F4F" />
            </View>
            <View style={styles.textView}>
                <Image source={require('../../assets/images/location.png')} style={styles.locationicon} />
                <TextInput style={styles.text} placeholder="      Address" placeholderTextColor="#4F4F4F" />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("signup")}>
                 <Text style={styles.continue} >Continue</Text>
           </TouchableOpacity>
        </View>
    </SafeAreaView>
);
};
            
const styles = StyleSheet.create ({
    logo:{
        width:"70%",height:"30%",alignSelf:'center',marginTop:"5%"
    },
    caption:{
        padding:20,fontSize:15,color:"#333333",alignSelf:'center',marginTop:"1%"
    },
    register:{
        fontSize:17,color:"#000000",alignSelf:'center',marginTop:"5%",fontWeight:'500'
    },
    textView:{
        flexDirection:'row',borderRadius:8,backgroundColor:"#E8E8E8",width:"90%",height:"15%",alignSelf:"center",marginTop:"7%"
    },
    text:{
        flex:1
    },
    usericon:{
        width:"6%",height:"50%",marginLeft:"5%",marginTop:"3.5%"
    },
    mailicon:{
        width:"6%",height:"40%",marginLeft:"5%",marginTop:"3.5%"
    },
    phoneicon:{
        width:"5.6%",height:"41%",marginLeft:"5%",marginTop:"3.5%"

    },
    locationicon:{
        width:"5.7%",height:"55%",marginLeft:"4%",marginTop:"3%"
    },
    button:{
        backgroundColor:"#D3B24D",borderRadius:8,width:"90%",height:"15%",alignSelf:"center",marginTop:'7%'
    },
    continue:{
        textAlign:'center',color:'white',marginTop:"3%"
    }

})
export default loginScreen;
