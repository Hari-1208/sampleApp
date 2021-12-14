import React, { useState } from "react";
import {  Modal, StyleSheet, Text, View,SafeAreaView,TextInput,ActivityIndicator,TouchableOpacity} from "react-native";
import getClinet from "./axoisAPI";


const loader =(props)=> {
 
    const [modalVisible,setModalVisible] =useState(false);
    const [title,setTitle] = useState();
    const [discription,setDiscription] = useState();


    const goBack =()=>{
      if(!title){
        alert('Enter valid title');
      }else if (!discription){
        alert('Enter valid Discription');
      }else {
        post();
      setTimeout(()=>{
        props.navigation.navigate('flatlist')
      },2500);
      }
    };

    const datas =[{title},{discription}];
    const post = () => {
      setModalVisible(true)
      getClinet({url:'/posts',
                 method:'POST',
                 data:{datas}
                }).then(function(response){
                  setModalVisible(false)
                  console.log(response.data)
                }).catch(function(error){
                  alert(error.message);
                  setModalVisible(false)

                })
       };
    
    
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
      <View style={{flex:0.4}} />
      <View style={{flex:0.2,marginTop:'50%'}}>
      <TextInput  placeholder="       Enter Title"
                    onChangeText={(text)=>setTitle(text)}
                    style={styles.textInput}
                     />
      </View>
      <View style={{flex:0.2,marginTop:'5%'}}>
      <TextInput  placeholder="       Enter Discription"
                  onChangeText={(text)=>setDiscription(text)}
                  style={styles.textInput}/>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <ActivityIndicator 
                             size="small" 
                             color="#0000ff" />
            <Text style={styles.modalText}>Your Data Was Added Succesfully</Text>
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
              >
                <Text style={styles.textStyle}>Done</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
        <View style={{flex:0.08}} />
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={()=>goBack()}
        >
          
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:0.4}}/>
      </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:'45%',
    height:'10%',
    flex:0.04,
    marginTop:'-50%'
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",marginTop:"4%"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:13
  },
  modalText: {
    marginTop: 15,
    textAlign: "center",
    color:'black'
  },
  textInput:{
    borderRadius:4,
    backgroundColor:'white',
    elevation:3,
    width:'90%',
    height:'110%',
    alignSelf:'center',
    marginTop:'3%'
  }
});

export default loader;