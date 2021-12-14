import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import SwipeButton from 'rn-swipe-button';
const reduxDetailScreen = (props) => {
  return (
    <View style={{ flex: 1, }}>
      <Text style={{ fontSize: 20, textAlign: 'right', paddingRight: 20, paddingTop: 20 }}>Redux Value:  {props.getTextVal}</Text>
      <Text style={{ fontSize: 20, color: 'green', textAlign: 'center', paddingTop: 20 }}>This app is running on ( {Platform.OS.toUpperCase()} ) device.</Text>

      <TouchableOpacity style={styles.buttonView}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView1}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView2}>
      </TouchableOpacity>
      <View style={{ marginLeft: 15, marginTop: 20 }}>
        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={70}
          enableRightToLeftSwipe={true}
          // enableReverseSwipe={true}
          height={45}
          width={330}
          title="Swipe to Submit"
          onSwipeSuccess={() => {
            alert('Submitted Successfully!');
          }}
          railFillBackgroundColor="#a493d6" //(Optional)
          railFillBorderColor="#a493d6" //(Optional)
          thumbIconBackgroundColor="#FFFFFF" //(Optional)
          thumbIconBorderColor="#FFFFFF" //(Optional)
          railBackgroundColor="#a493d6" //(Optional)
          railBorderColor="#bbeaff" //(Optional)


        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonView: { flex: 0.12, backgroundColor: 'green', marginLeft: 20, marginRight: 20, borderRadius: 20, marginTop: 20 },
  buttonView1: { flex: 0.12, backgroundColor: '#bbeaff', marginLeft: 20, marginRight: 20, borderRadius: 20, marginTop: 20 },
  buttonView2: { flex: 0.12, backgroundColor: '#e688a1', marginLeft: 20, marginRight: 20, borderRadius: 20, marginTop: 20 }

})
function mapStateToProps(state) {
  console.log("mapStattttttt", state.textInstore.storeData)
  return {
    getTextVal: state.textInstore.storeData
  }
}


export default connect(mapStateToProps, null)(reduxDetailScreen);