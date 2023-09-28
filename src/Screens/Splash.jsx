import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {myColors} from '../Utils/Colors/myColors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
     AsyncStorage.getItem('Id').then(val=>{
      if (val) {
        navigation.replace('Login');
      }else{
        navigation.replace('Welcome');
      }
     })
    }, 1000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          letterSpacing: 1,
          fontWeight: '300',
          fontSize: 25,
        }}>
        VUMONIC LABS
      </Text>
    </View>
  );
};

export default Splash;
