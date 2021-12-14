import React from "react";
import {View,Text,Image,StyleSheet,SafeAreaView,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Categrory from '../../components/category';

const homePage =(props) => {
    const homeslides = [
        {
          key:1,
          image:require('../../assets/images/homePage1slide.png'),
        },
        {
          key:2,
          image:require('../../assets/images/homePage1slide.png'),
        },
        {
          key:3,
          image:require('../../assets/images/homePage1slide.png'),
        }
      ];
    const RenderHomeSlide1 =({item}) => {
        return(
           <View >
            <Image source={item.image} style={styles.topSlides}
               source={item.image} />
           </View>
    );
    };
    return(
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
            <View style={styles.titleView}>
              <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Image source={require('../../assets/images/threeLineIcon.png')} style={styles.menuIcon} />
              </TouchableOpacity>
                <Image source={require('../../assets/images/homePageTitle.png')} style={styles.titleLogo}/>
            </View>
            <View style={styles.searchBar}>
                <Image source={require('../../assets/images/searchIcon.png')} style={styles.searchIcon} />
                <TextInput style={styles.textBox}
                           placeholder="    search..."
                           placeholderTextColor="#929292">
                 </TextInput>
            </View>
            <View style={{flex:0.25,marginTop:'1.5%'}}>
             <AppIntroSlider
               data={homeslides}
               renderItem={RenderHomeSlide1}
               showNextButton={false}
               showDoneButton={false}
               activeDotStyle={{backgroundColor:"#D3B24D"}} 
               dotStyle={{borderColor:"#D3B24D",borderWidth:1}} 
               />
            </View>
            <View style={{flex:0.6,marginTop:"-7%"}}>
            <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                <View>
                  <TouchableOpacity onPress={()=> props.navigation.navigate("hair")}>
                    <Text style={styles.scrollTitle}>Signature Hair Trends</Text>
                  </TouchableOpacity>
                </View>
                <View style={{height:"28%"}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                   <Categrory scrollImage={require('../../assets/images/hairTrendsImage1.png')}name='Hair Straightening' />
                   <Categrory scrollImage={require('../../assets/images/hairTrendsImage2.png')}name='Hair Colouring' />
                   <Categrory scrollImage={require('../../assets/images/hairTrendsImage1.png')}name='Hair Straightening' />
                  </ScrollView>
                </View>
                <View>
                <TouchableOpacity onPress={()=> props.navigation.navigate("makeup")}>
                    <Text style={styles.scrollTitle2}>Signature Makeup Trends</Text>
                </TouchableOpacity>
                </View>
                <View style={{height:"28%",marginTop:'-2%'}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                   <Categrory scrollImage={require('../../assets/images/makeupImage1.png')}name='title1' />
                   <Categrory scrollImage={require('../../assets/images/makeupImage2.png')}name='title2' />
                   <Categrory scrollImage={require('../../assets/images/makeupImage1.png')}name='title3' />
                  </ScrollView>
                </View>
                <View>
                <TouchableOpacity onPress={()=> props.navigation.navigate("nail")}>
                    <Text style={styles.scrollTitle3}>Signature Nail Trends</Text>
                </TouchableOpacity>
                </View>
                <View style={{height:"28%",marginTop:"-2%"}} showsHorizontalScrollIndicator={false}>
                  <ScrollView horizontal={true}>
                   <Categrory scrollImage={require('../../assets/images/nailColouringImage1.png')}name='title1' />
                   <Categrory scrollImage={require('../../assets/images/nailColouringImage2.png')}name='title2' />
                   <Categrory scrollImage={require('../../assets/images/nailColouringImage1.png')}name='title3' />
                  </ScrollView>
                </View>
            </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
  topSlides:{width:"92%",height:"85%",marginLeft:"4%",borderRadius:8},
  titleView:{flex:0.08,backgroundColor:'black',flexDirection:'row'},
  menuIcon:{ width:"25%",height:"27%",marginLeft:'20%',marginTop:'30%'},
  titleLogo:{marginTop:'1.5%',width:"30%",height:"84%",marginLeft:"17%"},
  searchBar:{flex:0.08,flexDirection:"row",borderRadius:8,elevation:8,shadowColor:'gray',width:'95%',alignSelf:'center',shadowOpacity:0.5},
  searchIcon:{marginLeft:'6%',marginTop:'6%',width:20,height:20},
  textBox:{width:'94%',height:'60%',shadowColor:'#929292',marginTop:"4%"},
  scrollTitle:{fontSize:19,marginLeft:"5.5%",color:'black'},
  scrollTitle2:{fontSize:19,paddingHorizontal:20,color:'black',marginTop:"4%"},
  scrollTitle3:{fontSize:19,paddingHorizontal:20,color:'black',marginTop:"2%"}
})
export default homePage;

// ,shadowOpacity:0.5,elevation:3,borderRadius:8,borderTopLeftRadius:6,borderTopRightRadius:6,borderBottomRightRadius:6,borderBottomLeftRadius:6