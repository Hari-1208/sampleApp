import React from 'react';
import { Text, View, ImageBackground,Image,StyleSheet,Pressable,SafeAreaView,TouchableOpacity, InteractionManager} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const onBoardingScreen1 = () => {
  const Renderiteam = ({item}) => {
    return(
      <View style={styles.container3}>
        <Image source={item.image} style={styles.slideImage}
        source={item.image} />
      <View style={styles.sildeText}>
         <Text style={styles.titleText}>{item.title}</Text>
        <Text style ={styles.textLine1}>Loren Ipsum Dolor Sit Amet, Consectetur</Text>
        <Text style ={styles.textLine2}>Adipscing Elitadipiscing Elit</Text>
      </View>
      
      </View>
        
    );
  };
  return (
    <ImageBackground source={require('../../assets/images/onBoarding1.png')} style={styles.onBoardingBG}>
      <SafeAreaView style={styles.onBoardCont} >
        <Text style={styles.skipText} >Skip</Text>
        <View style={{flex:1.2}}>
          <AppIntroSlider
           data={slides}
           renderItem={Renderiteam}
           activeDotStyle={{width:20,backgroundColor:"#D3B24D"}} />
        </View>
        <View style={{flex:0.3}}>
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <Pressable style={styles.button2}>
              <Text style={styles.buttonText2}>Login</Text>
          </Pressable>
        </View>
        
      </SafeAreaView>
    </ImageBackground>
  );
};
const slides = [
  {
    key:1,
    image:require('../../assets/images/onBoard1Logo.png'),
    title:'Style My Hair'
  },
  {
    key:2,
    image:require('../../assets/images/onBoard2Logo.png'),
    title:'Style My Makeup'
  },
  {
    key:3,
    image:require('../../assets/images/onBoard3Logo.png'),
    title:'What We Do'
  }
];

const styles = StyleSheet.create({
container3:{
  alignItems:'center',justifyContent:'center',marginTop:20,marginRight:15
},
slideImage:{
  width:"95%",height:370,marginLeft:15,borderRadius:4
},
sildeText:{
   marginTop:20,alignItems:'center',
},
titleText:{
  fontSize:30,color:'black',marginBottom:30
},
textLine1:{
  fontSize:14, color:'#666161',marginTop:-25
},
textLine2:{
  fontSize:13,color:'#666161'
},
onBoardingBG:{
  flex:1
},
onBoardCont:{
  flex:1
},
skipText:{
  fontWeight:"500",fontSize:16,textAlign:"right",marginTop:15,marginRight:15,color:'black'
},
button:{
  backgroundColor:"#D3B24D",width:"95%",height:50,borderRadius:6,marginLeft:10,marginTop:-20
},
buttonText:{
  color:'white',fontSize:15,marginLeft:140,marginTop:10
},
button2:{
    backgroundColor:"#FFFFFF",width:"95%",height:50,borderRadius:6,marginLeft:10,marginTop:10,borderWidth:1,borderColor:"#D3B24D"
},
buttonText2:{
    color:'#D3B24D',fontSize:15,marginLeft:150,marginTop:10
}
})

export default onBoardingScreen1;