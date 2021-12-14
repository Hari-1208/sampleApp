import dynamicLinks from '@react-native-firebase/dynamic-links';
import React, { useEffect } from 'react';


const deepLink = () => {

  useEffect(async () => {
    const foreGroundState = dynamicLinks()
      .onLink(link => {
        alert(link.url);
      });
    const killedState = dynamicLinks()
      .getInitialLink()
      .then(link => {
        alert(link.url);
      });
    return () => {
      foreGroundState(),
      killedState()
    };
  }, []);

  return null;
};

export default deepLink;



