import React, { createContext, useState } from "react";
import { View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import Child from "./consumer";

export const globalContext = createContext();

const provider = () => {
    const [initialValue, setInitialValue] = useState('InitialValue');
    return (
        <View style={styles.mainView}>
            <globalContext.Provider value={initialValue}>
                <View style ={{flex:0.42}}/>
                <View style = {{flex:0.08}} >
                    <TouchableOpacity onPress={()=>setInitialValue('Changed Value')} >
                        <Text style={styles.buttonText}>click to change</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.08}}>
                    <Child />
                </View>
                <View style ={{flex:0.42}}/>
            </globalContext.Provider>
        </View>
    );
};



const styles = StyleSheet.create({
    mainView: {
        flex: 1, backgroundColor: 'white'
    },
    buttonText: {
        color: 'red', fontSize: 23,textAlign:'center'
    }
})

export default provider;