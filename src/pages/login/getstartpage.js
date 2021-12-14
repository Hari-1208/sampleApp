import React from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';

const start = (props) => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style ={{flex:1,backgroundColor:'#FFFFFF'}}>
                <View style={{flex:0.2,marginTop:'10%'}}>
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                </View>
                <View style={{flex:0.2,marginTop:'1%'}}>
                    <Text style={styles.caption}>Creat A Perfect Flawless For You!</Text>
                </View>
                <View style={{flex:0.4}}>
                    <Image style={styles.startimage} source={require('../../assets/images/startlogo.png')} />
                </View>
                <View style={{flex:0.15,marginTop:'10%'}}>
                    <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("drawer")}>
                        <Text style={styles.continue} >Let's Get Started</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.15}} />
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    logo:{
        width:'70%',height:'55%',alignSelf:'center'
    },
    caption:{
        fontSize:16,color:'#333333',textAlign:'center'
    },
    startimage:{
        width:'85%',height:'100%',alignSelf:'center'
    },
    button1:{
        borderRadius:8,backgroundColor:'#D3B24D',width:'90%',height:'60%',alignSelf:'center'
    },
    continue:{
        textAlign:'center',color:'white',marginTop:'5%'
    }
})

export default start;