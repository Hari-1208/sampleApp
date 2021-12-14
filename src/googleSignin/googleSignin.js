import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';



const googleSignin = (props) => {

  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '658639660594-ihutruh8skj8dj8rt89i441oq7cje4fr.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);


  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const data = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
      auth().signInWithCredential(googleCredential);
      let ob = {
        name: data.user.name,
        email: data.user.email,
        id: data.user.id,
      }
      await AsyncStorage.setItem('user', JSON.stringify(ob));  
      setloggedIn(true);
      props.navigation.navigate('list')
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
      }
    }
  };

  // logOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     //   setloggedIn(false);
  //     await AsyncStorage.clear();
  //     props.navigation.goBack();

  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.googleButton}>
            <GoogleSigninButton
              style={styles.button}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
            />
            <Text style={styles.text}>You are currently logged out</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: 'white' },
  googleButton: { flex: 0.15, alignSelf: 'center', marginTop: '85%' },
  button: { width: 200, height: 55 },
  logoutButton: { marginTop: '3%', width: '60%', alignSelf: 'center' },
  text: { color: 'black', textAlign: 'center', marginTop: '2%' }

})

export default googleSignin;