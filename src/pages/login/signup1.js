import React, {useState} from "react";
import {View,Text,Image,StyleSheet,TextInput,TouchableOpacity,SafeAreaView} from 'react-native';


const signuppage1 = (props) => {
    const [textinput,settextinput] = useState("");

    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#FFFFFF"}}>
            <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
                <View style={{flex:0.2,marginTop:'20%'}} >
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} /> 
                </View>
                <View style={{flex:0.1,marginTop:'20%',alignSelf:'center'}}>
                    <Text style={styles.caption}>Verify your Mobile Number</Text>
                </View>
                <View style={{flex:0.15,flexDirection:'row',marginTop:'15%'}}>
                    <View styl={{flex:0.4}}>
                        <TextInput style={styles.textBox1} 
                                   placeholder="+91"
                                   placeholderTextColor='#4F4F4F' 
                                   maxLength={2} />
                    </View>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textBox2}
                                   placeholder="Enter your mobile number"
                                   placeholderTextColor='#4F4F4F'
                                   keyboardType="number-pad"
                                   onChangeText={text => settextinput(text)}
                                   defaultValue={textinput}
                                   maxLength={10} />
                    </View>
                </View>
                <View style={{flex:0.08}} />
                <View style={{flex:0.15,marginTop:'15%'}}>
                    {textinput.length ==10 ?
                    <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("OTPpage",{textinput})}>
                        <Text style={styles.continue} >Send OTP</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.continue} >Send OTP</Text>
                    </TouchableOpacity>
                     }   
                </View>
                <View style={{flex:0.3}}  />
                <View style={{flex:0.1,alignSelf:'center'}}>
                    <Text style={styles.bottomText}>By continuing to use ista consultation you agree to the</Text>
                    <Text style={styles.bottomText}>to our <Text style={styles.boldText}>Terms of use and privacy policy</Text>
                    </Text>
                </View>
            </View>

        </SafeAreaView> 
        
       
    );
};

const styles = StyleSheet.create({
    logo:{
        width:"75%",height:"85%",alignSelf:'center'
    },
    caption:{
        width:"70%",height:'80%',fontSize:15,color:'#333333'
    },
    textBox1:{
        borderRadius:8,backgroundColor:'#E8E8E8',width:'40%',height:'80%',marginLeft:'19%',textAlign:"center",color:'#4F4F4F'
    },
    textBox2:{
        borderRadius:8,backgroundColor:'#E8E8E8',width:'100%',height:'80%',marginLeft:'-7%',color:'#4F4F4F'
    },
    continue:{
        textAlign:'center',color:'white',marginTop:'5%'
    },
    button1:{
        borderRadius:8,backgroundColor:'#D3B24D',width:'90%',height:'80%',alignSelf:'center'
    },
    button2:{
        borderRadius:8,backgroundColor:'#BDBDBD',width:'90%',height:'80%',alignSelf:'center'
    },
    bottomText:{
        fontSize:12,color:'#828282'
    },
    boldText:{
        fontSize:12,color:'#4F4F4F'
    }

})
export default signuppage1;