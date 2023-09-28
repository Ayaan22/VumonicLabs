import {View, Text, Alert, ActivityIndicator, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GmailView = ({navigation}) => {
  const WebRef = useRef(null);

  const handleWebViewMessage = event => {
    // Handle WebView message if needed
    console.log('Received message from WebView:', event.nativeEvent.data);
  };

  const handleNavigationStateChange =async navState => {
    if (navState.canGoBack == true) {
      await AsyncStorage.setItem('Id','value')
      // Successful login, navigate back to the Home screen
      // You should have a function to navigate to the Home screen
      // e.g., navigateToHomeScreen()
      // Example:
      // navigateToHomeScreen();
      navigation.replace('DashBoard');
      console.log('Successful login! Navigating to Home screen...');
    } else {
      console.log(navState);
    }
  };
  return (
    <WebView
      onMessage={handleWebViewMessage}
      ref={WebRef}
      source={{uri: 'https://gmail.com'}}
      style={{flex: 1}}
      startInLoadingState={true}
      onNavigationStateChange={handleNavigationStateChange}
    />
  );
};
export default GmailView;
