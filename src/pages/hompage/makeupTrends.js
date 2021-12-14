import React from "react";
import {View,Text,Image,StyleSheet,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const makeupPage =(props) => {
    const makeupslides = [
        {},
        {},
        {}
    ];
    const RenderMakeupSlide =({item}) => {
        return(
        
           <View >
            <Image source={item.image} style={{width:"92%",height:"85%",marginLeft:"4%",borderRadius:8}}
               source={item.image} />
           </View>
    );
    };
    return(
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
            <View style={{flex:0.08,backgroundColor:'black',flexDirection:'row'}}>
              <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Image source={require('../../assets/images/threeLineIcon.png')} style={styles.menu} />
              </TouchableOpacity>
                <Image source={require('../../assets/images/homePageTitle.png')} style={styles.titlelogo}/>
            </View>
            <View style={{flex:0.1,flexDirection:'row'}}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Image style={styles.backbutton} source={require('../../assets/images/backArrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Makeup Trends</Text>
            </View>
            <View style={{flex:0.36}}>
                  <ScrollView horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              pagingEnabled={true}
                              showsHorizontalScrollIndicator={false}
                            >
                          <Image source={require('../../assets/images/hairImage1.png')} style={styles.topSlides}/>
                          <Image source={require('../../assets/images/hairImage1.png')} style={styles.topSlides}/>
                          <Image source={require('../../assets/images/hairImage1.png')} style={styles.topSlides}/>
                  </ScrollView>
                  <AppIntroSlider
                   style={{marginBottom:'10%'}}
                   data={makeupslides}
                   renderItem={RenderMakeupSlide}
                   showNextButton={false}
                   showDoneButton={false}
                   activeDotStyle={{backgroundColor:"#D3B24D",width:'6%',height:'30%'}}
                   dotStyle={{backgroundColor:"#E8E8E8",height:'30%',width:'1.5%'}} 
                  />
            </View>
            <View style={{flex:0.3,flexDirection:'column'}}>
                <Text style={styles.title2}>Title 1 Hair Style</Text>
                <Text style={styles.firstLinetext}>Lorem Lorem ipsum dolor sit amet, consectetur</Text>
                <Text style={styles.text}>Adipiscing elit, sed do eiusmod tempor incididunt Ut</Text>
                <Text style={styles.text}>Labore et dolore magna aliquaLorem Lorem ipsum</Text>
                <Text style={styles.text}>Dolor sit amet, consectetur adipiscing elit, sed do</Text>
                <Text style={styles.text}>Eiusmod tempor incididunt ut labore et dolore</Text>
                <Text style={styles.text}>Magna aliqua Read more..Lorem Lorem ipsum dolor</Text>
                <Text style={styles.text}>Sit amet, consecteturadipiscing elit, sed do</Text>
                <Text style={styles.text}>Eiusmod tempor incididunt ut labore et dolore</Text>
                <Text style={styles.text}>Magna aliquaLorem Lorem ipsum dolor sit amet,</Text>
                <TouchableOpacity >
                <Text style={styles.lasttext}>Read More..</Text>
                </TouchableOpacity>
                <Text style={styles.fee}>Service Fee <Text style={{color:'#D3B24D',fontSize:18}}>$20.00</Text></Text>
            </View>
            <View style={{flex:0.1}}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("booking")}>
                        <Text style={styles.continue} >Book Now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   topSlides:{
       width:195,marginLeft:15,height:210,borderRadius:8
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
        fontSize:20,color:'#000000',marginTop:'5%',fontWeight:'500',marginLeft:'-8%'
    },
    title2:{
        fontSize:18,color:'#000000',textAlign:'left',paddingLeft:20,fontWeight:'500',marginTop:'-3%'
    },
    firstLinetext:{
        fontSize:13,color:'#000000',textAlign:'left',paddingLeft:20,marginTop:'3%'
    },
    text:{
        fontSize:13,color:'#000000',textAlign:'left',paddingLeft:20
    },
    lasttext:{
        fontSize:13,color:'#D3B24D',textAlign:'left',paddingLeft:20
    },
    button:{
        borderRadius:8,backgroundColor:'#D3B24D',width:'90%',height:'65%',alignSelf:'center',marginTop:'10%'
    },
    continue:{
        textAlign:'center',color:'#FFFFFF',fontSize:18,marginTop:'3%'
    },
    fee:{
        color:'#000000',fontSize:18,paddingLeft:20,marginTop:'3%'
    }


})

export default makeupPage;