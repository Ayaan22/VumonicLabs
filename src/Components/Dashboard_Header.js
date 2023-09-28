import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {myColors} from '../Utils/Colors/myColors';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const Dashboard_Header = () => {
  const nav = useNavigation();
  const handlProfile = () =>
    Alert.alert('Sign Out', 'Are you sure you want to SignOut..?', [
      {
        text: 'Cancel',

        style: 'cancel',
      },
      {text: 'Sign Out', onPress: () => handleSignOut()},
    ]);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('Id');
    nav.replace('Login');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 25,
            color: myColors.textColor,
            letterSpacing: 0.5,
          }}>
          Hii,
        </Text>
        <Text
          style={{
            fontWeight: '300',
            fontSize: 25,
            color: myColors.textColor,
          }}>
          User🖐
        </Text>
      </View>
      <TouchableOpacity onPress={handlProfile}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          }}
          style={{width: 35, height: 35, borderRadius: 35}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard_Header;
