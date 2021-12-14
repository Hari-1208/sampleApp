import React, { useEffect } from "react";
import { Text, View, FlatList ,StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../user";


const sagaTest = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    // const datas = async() => {
      const user = useSelector((state) => state.user.user);
      console.log('****************', user);
// }
  

    return ( 
        <View style={{ flex: 1, backgroundColor: 'white' }}>
           {(user==undefined) ? (
               <View style={styles.mainView}>
                    <View style={styles.noDataView}>
                        <Text style={styles.noData}> wait data is loading </Text>
                    </View>
                    </View>
                ) : (
                    <FlatList
                        data={user}
                        renderItem={({ item }) => (
                            <View style={styles.list}>
                                <Text style={styles.flatText}>{item.id} . {item.title}</Text>
                            </View>
                        )}
                    />
                )
                }
        </View>


    );
};


const styles = StyleSheet.create({
    list: { padding: 20, backgroundColor: 'white', marginTop: '3%', elevation: 3, borderRadius: 4, width: '90%', alignSelf: 'center' },
    flatText: { textAlign: 'left', color: 'black' },
    noData:{textAlign:'center',color:"black",fontWeight:'900',fontSize:15},
    noDataView:{ flex:0.04,elevation: 3, borderRadius: 4, width: '90%', padding:20,justifyContent:'center',alignSelf:'center',shadowColor:'lightgray'},
    mainView:{flex:1,alignItems:'center',justifyContent:'center'}
})

export default sagaTest;