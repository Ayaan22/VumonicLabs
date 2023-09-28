import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {myColors} from '../Utils/Colors/myColors';

const Dashboard_Content = () => {
  return (
    <View style={{gap: 20, flex: 1}}>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 22,
          color: myColors.textColor,
          letterSpacing: 0.5,
        }}>
        What's on your mind..?
      </Text>
      <View
        style={{
          height: 400,
          backgroundColor: 'black',
          borderRadius: 10,
          padding: 15,
          justifyContent: 'center',
          gap: 10,
        }}>
        <Text style={{color: 'white', fontWeight: '400', letterSpacing: 1}}>
          User
        </Text>

        <View style={{gap: 10}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              letterSpacing: 1,
              fontSize: 25,
            }}>
            Your Open Rate of Gmails
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              letterSpacing: 1,
              fontSize: 25,
            }}>
            Is 60% PERCENTAGE
          </Text>
          <Text
            style={{
              fontWeight: '300',
              fontSize: 15,
              lineHeight: 22,
              letterSpacing: 0.5,
              color: 'white',
            }}>
            Make it work, make it right, make it fast
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard_Content;
