import {View, Text, StatusBar, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {myColors} from '../Utils/Colors/myColors';
import Dashboard_Header from '../Components/Dashboard_Header';
import Dashboard_Carousel from '../Components/Dashboard_Carousel';
import Dashboard_Content from '../Components/Dashboard_Content';


const Dashboard = () => {

  return (
    <ScrollView
      style={{
        backgroundColor: myColors.secondary,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={{gap: 20}}>
        <Dashboard_Header  />
        <Dashboard_Carousel />
        <Dashboard_Content  />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
