import PushNotification from "react-native-push-notification";
import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';

const LoginScreen = () => {

  const [title, setTitle] = useState();
  const [message, setmessage] = useState();

  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        //   console.log("TOKEN:", token);
      },

      onNotification: function (item) {
        console.log("NOTIFICATION11111:", item);
        //   alert(item.message);
        setTitle(item.title);
        setmessage(item.message);
        // let datas = [title,
        //   message];
        // alert()

      },

      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION2222:", notification);

      },

      onRegistrationError: function (err) {
        //   console.error(err.message, err);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },


      popInitialNotification: true,

      requestPermissions: true,
    });

  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Title :{title}</Text>
      <Text>Messasge :{message}</Text>
    </View>
  )
}
export default LoginScreen;