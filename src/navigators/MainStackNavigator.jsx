import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainStackRoutes } from '../constants/Routes';

const MainStackNavigator = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator 
    initialRouteName={mainStackRoutes.HomeScreen}
    screenOptions={{headerShown: false}}> 
      <MainStack.Screen name={mainStackRoutes.HomeScreen} component={HomeScreen} />
      <MainStack.Screen name={mainStackRoutes.DetailScreen} component={DetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
