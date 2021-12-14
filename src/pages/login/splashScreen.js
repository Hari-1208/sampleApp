import React, {useEffect} from 'react';
import { View,ImageBackground ,StyleSheet ,Image } from 'react-native';
import myImage0 from '../../assets/images/splashBackGround.png';
import myImage1 from '../../assets/images/splash.png';

const splash = (props) => {
  useEffect(()=>{
    setTimeout(()=> {
      props.navigation.navigate("userLoginS1");
    },2000) 
  });
  return(
    <View style={styles.container}>
    <ImageBackground source={myImage0} style={styles.image}>
    <View style={styles.container1}>
      <Image style={styles.logo} source={myImage1} />
    </View>
    </ImageBackground>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  image: {
    flex: 1,
  },
  container1:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  logo:{
    height:136,
    width:299
  }
  
});

export default splash;