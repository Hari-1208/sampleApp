import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import {globalContext} from './globalContext';


const Child =()=>{
    return (
            <globalContext.Consumer>
                {data =><Text style={styles.text}>Data: {data}</Text>}
            </globalContext.Consumer>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black', fontSize:20,textAlign:'center'
    }
})

export default Child;