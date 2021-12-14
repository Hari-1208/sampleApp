import React, {useRef} from "react";
import {View,Text,Image,StyleSheet,TextInput,TouchableOpacity,SafeAreaView} from 'react-native';


const otppage2 = (props) => {
    // const [textinput,settextinput] = useState("");
    const firstinput = useRef()
    const secondinput = useRef()
    const thirdinput = useRef()
    const fourthinput = useRef()

    return(
        
        <SafeAreaView style={{flex:1,backgroundColor:"#FFFFFF"}}>
            <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
                <View style={{flex:0.2,marginTop:'20%'}} >
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} /> 
                </View>
                <View style={{flex:0.1,marginTop:'20%'}}>
                    <Text style={styles.caption}>Verify your one time password sent</Text>
                    <Text style={styles.caption2}>to +91 9176821805</Text>
                </View>
                <View style={{flex:0.15,flexDirection:'row',marginTop:'15%'}}>
                <View styl={{flex:0.25}}>
                        <TextInput style={styles.textBox1}
                                   placeholder="-"
                                   placeholderTextColor='#4F4F4F'
                                   keyboardType="number-pad"
                                   maxLength={1}
                                   ref={firstinput}
                                   onChangeText={(text)=> {
                                       text && secondinput.current.focus()
                                   }}  />
                    </View>
                    <View styl={{flex:0.25}}>
                        <TextInput style={styles.textBox1}
                                   placeholder="-"
                                   placeholderTextColor='#4F4F4F'
                                   keyboardType="number-pad"
                                   maxLength={1}
                                   ref={secondinput}
                                   onChangeText={(text)=> {
                                    text ?  thirdinput.current.focus(): firstinput.current.focus()
                                    }} />
                    </View>
                    <View styl={{flex:0.25}}>
                        <TextInput style={styles.textBox1}
                                   placeholder="-"
                                   placeholderTextColor='#4F4F4F'
                                   keyboardType="number-pad"
                                   maxLength={1}
                                   ref={thirdinput}
                                   onChangeText={(text)=> {
                                    text ? fourthinput.current.focus(): secondinput.current.focus() 
                                    }} />
                    </View>
                    <View styl={{flex:0.25}}>
                        <TextInput style={styles.textBox1}
                                   placeholder="-"
                                   placeholderTextColor='#4F4F4F'
                                   keyboardType="number-pad"
                                   maxLength={1}
                                   ref={fourthinput}
                                   onChangeText={(text)=> {
                                   !text && thirdinput.current.focus()
                                    }} />
                    </View>
                    {/* <View style={{flex:1}}>
                        <TextInput style={styles.textBox2}
                                   placeholder="Enter your mobile number"
                                   placeholderTextColor='#4F4F4F'
                                   onChangeText={text => settextinput(text)}
                                   defaultValue={textinput}
                                   maxLength={10} />
                    </View> */}
                </View>
                <View style={{flex:0.08,alignSelf:'center',flexDirection:'row',marginTop:'7%'}}>
                    <Text style={styles.OTPtext}>Din't recive OTP? </Text>
                    <TouchableOpacity>
                        <Text style={styles.resendButton}>Resend</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flex:0.15,marginTop:'15%'}}>
                    {/* {textinput.length ==10 ?
                    <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("signup")}>
                        <Text style={styles.continue} >Send OTP</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.continue} >Send OTP</Text>
                    </TouchableOpacity>
                     }    */}
                    <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("start")}>
                        <Image style={styles.checkIcon} source={require('../../assets/images/check.png')} />
                    </TouchableOpacity>
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
        width:"70%",height:'80%',fontSize:15,color:'#333333',alignSelf:'center'
    },
    caption2:{
        width:"70%",height:'80%',fontSize:15,color:'#333333',marginLeft:'30%'
    },
    textBox1:{
        borderRadius:8,backgroundColor:'#E8E8E8',width:'70%',height:'80%',marginLeft:'16.7%',textAlign:"center",color:'#4F4F4F'
    },
    // textBox2:{
    //     borderRadius:8,backgroundColor:'#E8E8E8',width:'100%',height:'100%',marginLeft:'-7%',color:'#4F4F4F'
    // },
    OTPtext:{
        fontSize:14,color:'#4F4F4F'
    },
    resendButton:{
        fontSize:14,color:'#D3B24D',borderBottomWidth:1,borderColor:'#D3B24D'
    },
    checkIcon:{
        alignSelf:'center',width:"8%",height:'40%',marginTop:'5.5%'
    },
    button1:{
        borderRadius:8,backgroundColor:'#D3B24D',width:'90%',height:'80%',alignSelf:'center'
    },
    // button2:{
    //     borderRadius:8,backgroundColor:'#BDBDBD',width:'90%',height:'100%',alignSelf:'center'
    // },
    bottomText:{
        fontSize:12,color:'#828282'
    },
    boldText:{
        fontSize:12,color:'#4F4F4F'
    }

})
export default otppage2;