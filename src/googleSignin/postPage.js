import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity, Text, RefreshControlBase } from "react-native";
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';


const postPage = (props) => {

    useEffect(() => {
        postfunc();
        storeToData();
    }, []);

    const postfunc = async () => {
        let user = await AsyncStorage.getItem('user');
        let parsed = JSON.parse(user);
        setRendered(parsed.id);
    };


    const storeToData = async() => {
        let user = await AsyncStorage.getItem('user');
        let parsed = JSON.parse(user);
        let getdata = []

        if(parsed.id){
        database()
            .ref('/user/'+ parsed.id)
            .on('child_added', snapshot => {
                let data = snapshot.val();
                getdata.push(data)
                setfetch(getdata);
                console.log("data", data);
            });
        }
    };


    const topush = async() => {
        if (!fetch) {
            console.log("---------------------");
            console.log(fetch);
            let data = [];
            data.push({
                title: titleData,
                description: descriptionData
            })
            database()
            .ref('/user/'+rendered)
            .set(data);
        } else {
            console.log("******************");
            console.log(fetch);
            let data = [...fetch];
            data.push({title: titleData,
                description: descriptionData})
            database()
            .ref('/user/'+rendered)
            .set(data);
        };

        props.navigation.goBack();
    };

    // const goback =
    

    let [fetch, setfetch] = useState([]);
    const [rendered, setRendered] = useState([]);
    const [titleData, setTitleData] = useState([]);
    const [descriptionData, setDescriptionData] = useState([]);


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.35 }} />
            <View style={{ flex: 0.25 }}>
                <TextInput placeholder="Title"
                    placeholderTextColor="gray"
                    style={styles.textInput}
                    onChangeText={(text) => setTitleData(text)} />

                <TextInput placeholder="Description"
                    placeholderTextColor="gray"
                    style={styles.textInput}
                    onChangeText={(text) => setDescriptionData(text)} />
            </View>
            <View style={{ flex: 0.15 }}>
                <TouchableOpacity style={styles.button}
                    onPress={topush}
                >
                    <Text style={{ color: 'blue', textAlign: 'center', marginTop: '9%' }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.25 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: { borderRadius: 4, width: '90%', padding: 20, alignSelf: "center", elevation: 5, marginTop: '3%', shadowColor: 'gray', color: 'black' },
    button: { borderRadius: 4, width: '60%', elevation: 3, alignSelf: 'center', shadowColor: 'gray', height: "50%" },
})

export default postPage;