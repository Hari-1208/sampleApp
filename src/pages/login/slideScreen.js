import React,{useState} from 'react';
import { Text, View, ImageBackground,Image,StyleSheet,SafeAreaView,TouchableOpacity, Alert,} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from '../hompage/homepage';

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
const onBoardingScreen1 = (props) => {
  
const [showRealApp ,setShowRealApp] = useState(false);
  
const [Key,setKey] = useState();

const selected= (data) => {
    console.log("item",data)
    setKey(data)
  };
const Renderitem =(data) => {
    return(
    
       <View style={styles.container3}>
        <Image source={data.item.image} style={styles.slideImage}
           source={data.item.image} />
          <View style={styles.sildeText}>
            <Text style={styles.titleText}>{data.item.title}</Text>
            <Text style ={styles.textLine1}>Loren Ipsum Dolor Sit Amet, Consectetur</Text>
            <Text style ={styles.textLine2}>Adipscing Elitadipiscing Elit</Text>
          </View>
       </View>
);
};
return(
  <>
   {showRealApp ? (
     <Home/>
   ) : (
<ImageBackground source={require('../../assets/images/onBoarding1.png')} style={styles.onBoardingBG}>
    <SafeAreaView style={styles.onBoardCont} >
    <View style={{flex:0.2}}>
          {
           Key !== 2 && (
          <TouchableOpacity onPress={ () => props.navigation.navigate("drawer")} >
            <Text style={styles.skipText}>skip</Text>
          </TouchableOpacity>
          )}
    </View>
    
    <View style={{flex:1.4,marginTop:-60}}>
        <AppIntroSlider
        data={slides}
        keyExtractor={(item,index) => index.toString()}
        renderItem={Renderitem}
        onSlideChange={selected}
        showNextButton={false}
        showDoneButton={false}
        activeDotStyle={{width:20,backgroundColor:"#D3B24D"}} />
    </View>
    <View style={styles.exploreRegister}>
          {
           Key !== 2? (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explore More</Text>
          </TouchableOpacity>
           ):
           (
             <View>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("basicinfo")}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => props.navigation.navigate("signup")}>
                <Text style={styles.buttonText2}>Login</Text>
            </TouchableOpacity>
            </View>
           )
           }
       </View>
    </SafeAreaView>
</ImageBackground>
 )}
</>
);
};

const styles = StyleSheet.create({
container3:{
  flex:6,alignItems:'center',justifyContent:'center',marginTop:-5,marginRight:15
},
slideImage:{
  width:"95%",height:375,marginLeft:15,borderRadius:4
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
  fontWeight:"500",fontSize:16,marginTop:15,marginRight:17,color:'black',textAlign:'right'
},
button:{
  backgroundColor:"#D3B24D",width:"95%",height:50,borderRadius:6,marginLeft:10,marginTop:-10
},
buttonText:{
  color:'white',fontSize:15,textAlign:'center',marginTop:12
},
button2:{
  backgroundColor:"#FFFFFF",width:"95%",height:50,borderRadius:6,marginLeft:10,marginTop:10,borderWidth:1,borderColor:"#D3B24D"
},
buttonText2:{
  color:'#D3B24D',fontSize:15,textAlign:'center',marginTop:10
},
skipButton:{
 backgroundColor:'white',width:60,height:20,marginLeft:90
},
exploreRegister:{
  flex:0.3
}
})

export default onBoardingScreen1;