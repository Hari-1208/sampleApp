import  React from 'react';
import { View, Text,Image ,StyleSheet} from 'react-native';

const drawerComp = (props) => {
    return(
        <View style={{flexDirection:'row',marginTop:'10%'}}>
            <View style={{flex:0.15}}>
              <Image source={props.icon} style={styles.icons} />
            </View>
            <View style={{flex:0.78}}>
              <Text style={styles.Text}>{props.text}</Text>
            </View>
            <View style={{flex:0.07}}>
              <Image style={styles.arrow} source={props.arrow} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icons:{
        width:30,height:30,marginTop:'1%',marginLeft:'35%'
    },
    Text:{
        fontSize:15,color:'#000000',textAlign:'left',marginTop:'1.8%',marginLeft:'10%'
    },
    arrow:{
        width:'35%',height:'55%',marginTop:'40%'
    }
    
})

export default drawerComp;