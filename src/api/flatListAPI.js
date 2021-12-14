import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput,FlatList} from 'react-native';
import getClinet from "./axoisAPI";

const flatList = (props) => {

    useEffect(() => {
      lists()
    },[]);

    const [titles,setTitles] = useState([]);
    const [masterdata, setmasterdata] = useState([]);
    const [search, setsearch] = useState();
    
    const lists = () => {
        getClinet({url:'/posts',
                   method:'get',
                   data:{}
                  }).then(function(response){
                      setTitles(response.data)
                      setmasterdata(response.data)
                      // console.log(response.data)
                  }).catch(function(error){
                      alert(error.message);
                  })
      };
      const searchfilter = (text) => {
        if (text) {
            const newData = masterdata.filter((item) => {
                const itemdata = item.title?
                    item.title.toUpperCase() :
                    ''.toUpperCase();
                const textdata = text.toUpperCase();
                return itemdata.indexOf(textdata) > -1
            });
            setTitles(newData);
            setsearch(text);
        } else {
            setTitles(masterdata);
            setsearch(text);
        }
    }


      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.searchBar}>
            <View style={{ flex: 0.3 }}>
              <Image source={require('../assets/images/searchIcon.png')}
                style={styles.searchIcon} />
            </View>
            <View style={{ flex: 0.7 }}>
              <TextInput style={styles.textBox}
                placeholder="   search..."
                value={search}
                placeholderTextColor="#929292"
                onChangeText={(text) => searchfilter(text)}
                >
              </TextInput>
            </View>
          </View>
          <View style={{ flex: 0.9, marginTop: '5%'}}>
            <FlatList
              data={titles}
              renderItem={({ item }) => (
                <View style={styles.list}>
                  <Text style={{ textAlign: 'left',color:'black'}}>{item.id}{' . '}{item.title.toUpperCase()}</Text>
                </View>
              )}
            />
          </View>
          <View style={{ flex: 0.09, marginTop: '1%' }}>
            <TouchableOpacity style={styles.plusbutton}
                              onPress={()=>props.navigation.navigate('sample')}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );

}
const styles = StyleSheet.create({
    list: {
      padding: 20, backgroundColor: 'white', elevation: 3, flex: 0.15, borderRadius: 4, marginTop: '4%', width: '90%', alignSelf: 'center'
    },
    searchBar: {
      flex: 0.07, flexDirection: 'row', width: '90%', marginTop: '3%', alignSelf: 'center', borderRadius: 1, elevation: 3
    },
    searchIcon: {
      width: 20, height: 20, marginTop: '13%', marginLeft: '10%'
    },
    textBox: {
      width: '94%', height: '90%', marginTop: "1%", marginLeft: '-28%'
    },
    plusbutton: {
      borderRadius: 25, width: 50, height: 50, marginLeft: '80%', borderWidth: 0.5, borderColor: '#D3B24D'
    },
    plus: {
      textAlign: 'center', fontSize: 35, marginTop: '-2%', color: '#D3B24D'
    }
  
  })

export default flatList;