import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

function reduxHomeScreen(props) {
  return (
    <View style={{ flex: 1 }}>

      <Text style={styles.text}>Redux Value:  {props.getTextVal}
      </Text>
      <View style={{ flex: 0.9, justifyContent: 'center' }}>
        <TouchableOpacity>
          <Button
            title="Go to Details"
            onPress={() => props.navigation.navigate('DetailScreen')}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20, textAlign: 'right', paddingRight: 20, paddingTop: 20,color:'black'
  }
})
function mapStateToProps(state) {
  //console.log("mapStattttttt", state.textInstore.storeData)
  return {
    getTextVal: state.textInstore.storeData
  }
}


export default connect(mapStateToProps, null)(reduxHomeScreen);