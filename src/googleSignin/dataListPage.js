import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native'

const list = (props) => {
    let [recivedData, setRecivedData] = useState();


    const onChildAdd = async () => {
        let user = await AsyncStorage.getItem('user');
        let parsed = JSON.parse(user);
        let getData = [];

        if (parsed.id) {
            database()
            .ref('/user/'+parsed.id)
            // .orderByChild(JSON.stringify())
            .on("child_added", snapshot => {
                let data = snapshot.val();
                getData.push(data)
                setRecivedData(getData);
                // await AsyncStorage.setItem("newData", data);
                // let newData = await AsyncStorage.getItem('newData');
                // let parsed = JSON.parse(newData);
                console.log();
                console.log('A new node has been added', data);
            });
        };
    }



    const geting = async () => {
        let user = await AsyncStorage.getItem('user');
        let parsed = JSON.parse(user);
        setName(parsed.name);
        setEmail(parsed.email);
        setId(parsed.id);
    };



    const isFocused = useIsFocused();

    useEffect(() => {
        geting();
        onChildAdd();
    }, [isFocused]);


    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");


    logOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            //   setloggedIn(false);
            props.navigation.goBack()
            await AsyncStorage.clear();
            // setRecivedData(false);

        } catch (error) {
            console.error(error);
        }
    };


    // let newData = await AsyncStorage.getItem('newData');
    // let parsed = JSON.parse(newData);
    // const datas = [recivedData.title];
    // console.log("dsd", datas);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.08 }}>
                <TouchableOpacity onPress={logOut}>
                    <Text style={styles.logOut} >LOGOUT</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.18, flexDirection: 'column' }}>
                <Text style={{ color: 'black', fontWeight: '900' }}>LOGEDIN USER IS,</Text>
                <Text style={{ color: 'black', marginTop: '4%' }}>NAME :{name}</Text>
                <Text style={{ color: 'black', marginTop: '2%' }}>EMAIL :{email}</Text>
                <Text style={{ color: 'black', marginTop: '2%' }}>ID :{id}</Text>
            </View>
            <View style={{ flex: 0.7 }}>
                {(!recivedData) ? (
                    <View style={styles.noDataView}>
                        <Text style={styles.noDataText}>NO DATAS FOUND HERE</Text>
                    </View>
                ) : (
                    <FlatList
                        data={recivedData}
                        renderItem={({ item }) => (
                            <View style={styles.list}>
                                <Text style={styles.flatText}>{item.title}</Text>
                                <Text style={styles.flatText}>{item.description}</Text>
                            </View>
                        )}
                    />
                )
                }
            </View>

            <View style={{ flex: 0.1 }}>
                <TouchableOpacity style={styles.plusbutton}>
                    <Text style={styles.plus}
                        onPress={() => props.navigation.navigate("post")}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logOut: { color: 'red', textAlign: 'right', fontSize: 15, fontWeight: 'bold', marginTop: '4%' },
    plusbutton: { borderRadius: 25, width: 50, height: 50, marginLeft: '80%', borderWidth: 0.5, borderColor: '#D3B24D', marginTop: '4%' },
    plus: { textAlign: 'center', fontSize: 35, marginTop: '-2%', color: '#D3B24D' },
    list: { padding: 20, backgroundColor: 'white', marginTop: '3%', elevation: 3, borderRadius: 4, width: '90%', alignSelf: 'center' },
    flatText: { textAlign: 'left', color: 'black' },
    noDataText: { fontSize: 15, fontWeight: "800", textAlign: 'center', color: 'black', marginTop: '60%' },
    noDataView: { elevation: 3, borderRadius: 4, width: "90%", height: '90%', alignSelf: 'center', shadowColor: 'gray' }
})
export default list;