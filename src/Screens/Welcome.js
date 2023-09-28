import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {myColors} from '../Utils/Colors/myColors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({navigation}) => {

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: myColors.secondary,
      }}>
      <StatusBar
        backgroundColor={myColors.secondary}
        barStyle={'dark-content'}
      />
      <View
        style={{
          flex: 0.6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{flex: 0.6, resizeMode: 'contain'}}
          source={require('../Utils/Assets/Images/welcome.png')}
        />
      </View>
      <View
        style={{
          flex: 0.35,

          justifyContent: 'center',

          gap: 7,
        }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 23,
            textAlign: 'center',
            color: myColors.textColor,
          }}>
          Welcome To Vumonic Labs
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 15,
            paddingHorizontal: 40,
            textAlign: 'center',
            lineHeight: 22,
            letterSpacing: 0.7,
          }}>
          Let's put your creativity on the development highway.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
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
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              color: 'white',
              textAlign: 'center',
            }}>
            GET STARTED NOW
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
