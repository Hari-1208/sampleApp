import React from "react";
import { StyleSheet,Text,View,Button } from "react-native";


const CounterApp =(props) => {
        return(
            <View style={styles.container}>
                <Button 
                   onPress={props.increment}
                   title="Increase Count"
                   color='blue'
                   accessibilityLabel='Increase Count' />
                <Text style={styles.num}>{props.count}</Text>
                <Button 
                   onPress={props.decrement}
                   title="Decrease Count"
                   color='blue'
                   accessibilityLabel='Decrease Count' />
            </View>
        );
    }


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    num:{
        color:'black',fontSize:20,padding:10
    }
})

export default CounterApp;