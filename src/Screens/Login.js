import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {myColors} from '../Utils/Colors/myColors';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Login = ({navigation}) => {
 

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        gap: 3,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 27,
          color: myColors.textColor,
          letterSpacing: 2,
        }}>
        WELCOME BACK,
      </Text>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 15,

          lineHeight: 22,
          letterSpacing: 0.3,
        }}>
        Make it work, make it right, make it fast
      </Text>
      <View
        style={{
          flex: 0.8,

          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.5,
          }}>
          <Image
            style={{flex: 1, resizeMode: 'contain'}}
            source={require('../Utils/Assets/Images/login.png')}
          />
        </View>
        <View>
          <TouchableOpacity
          onPress={()=>{
            navigation.replace('Gmail')
          }}
            activeOpacity={0.8}
            style={{
              backgroundColor: myColors.textColor,
              height: 55,
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <AntDesign name="google" size={25} color="white" />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 15,
                  color: 'white',
                  textAlign: 'center',
                }}>
                Sign-In with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
