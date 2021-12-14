import React from "react";
import  { View,ScrollView } from 'react-native';
import UpComingComp from "../../components/upcomingComp";

const tabcompleted=() => {
    return (
    <ScrollView style={{flex:1,backgroundColor:'white'}}
                showsVerticalScrollIndicator={false}>
        <View  style={{flex:1}}>
        <UpComingComp mainImage={require('../../assets/images/hairImage1.png')}
                      heading="Hair Colouring"
                      artist="clara "
                      profession="Makeup Artist" />
          <UpComingComp mainImage={require('../../assets/images/nailColouringImage2.png')}
                      heading="Nail Design"
                      artist="clara "
                      profession="Nail Artist" />
          <UpComingComp mainImage={require('../../assets/images/makeupImage1.png')}
                      heading="Hair Colouring"
                      artist="clara "
                      profession="Makeup Artist" />
          <UpComingComp mainImage={require('../../assets/images/makeupImage2.png')}
                      heading="Makeup"
                      artist="clara "
                      profession="Makeup Artist" />
        </View>
    </ScrollView>
    );
  };

  export default tabcompleted;