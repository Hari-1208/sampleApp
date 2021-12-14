import React from "react";
import  { View,ScrollView } from 'react-native';
import BookingComp from "../../components/bookingComp";


const tabhome=() => {
      return (
        <ScrollView style={{flex:1,backgroundColor:'white'}}
                    showsVerticalScrollIndicator={false}>
          <View  style={{flex:1}}>
            <BookingComp mainImage={require('../../assets/images/hairImage1.png')}
                         heading="Hair colouring" />
            <BookingComp mainImage={require('../../assets/images/nailColouringImage2.png')}
                         heading="Nail Design" />
            <BookingComp mainImage={require('../../assets/images/makeupImage1.png')}
                         heading="Hair colouring" />
            <BookingComp mainImage={require('../../assets/images/hairImage1.png')}
                         heading="Hair Straightening" />
            <BookingComp mainImage={require('../../assets/images/makeupImage2.png')}
                         heading="Makeup" />
            <BookingComp mainImage={require('../../assets/images/makeupImage2.png')}
                         heading="Makeup" />
          </View>
        </ScrollView>
      ); 
    };

    export default tabhome;