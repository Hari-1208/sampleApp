import React from 'react';
import PushNotification from './pushNotication';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, FlatList } from 'react-native';



const push = (props) => {
    let pushData = [
        {
            title: "First push",
            message: "First push message"
        },
        {
            title: "Second push",
            message: "Second push message"
        }
    ]

    _renderItem = ({ item }) => (
        <View key={item.title}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
        </View>
    );


    return (
        <>
            <SafeAreaView style ={{flex:1,backgroundColor:'white'}}>
                {/* <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}> */}
                    <View style={styles.listHeader}>
                        <Text style={{ color: "black", }}>Push Notifications</Text>
                    </View>
                    <View style={styles.body}>
                        <FlatList
                            data={pushData}
                            renderItem={(item) => _renderItem(item)}
                            keyExtractor={(item) => item.title}
                        />
                    </View>
                {/* </ScrollView> */}
            </SafeAreaView>
            <PushNotification />
        </>
    );
};

    const styles = StyleSheet.create({
        scrollView: { backgroundColor: 'white', },
        listHeader: { backgroundColor: 'white',height: 44, padding: 12 },
        title: { fontSize: 18, fontWeight: 'bold', paddingTop: 10 },
        message: { fontSize: 14, paddingBottom: 15, borderBottomColor: "#ccc", borderBottomWidth: 1 ,color:'black'},
        engine: { position: 'absolute', right: 0, },
        body: { backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10, },
        sectionContainer: { marginTop: 32, paddingHorizontal: 24, },
        sectionTitle: { fontSize: 24, fontWeight: '600', color:"black" },
        sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400', color: 'black', },
        highlight: { fontWeight: '700' },
        footer: { color: 'black', fontSize: 12, fontWeight: '600', padding: 4, paddingRight: 12, textAlign: 'right', },
    });



export default push;