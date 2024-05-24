import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BasketScreen from '../screens/BasketScreen';
import MainStackNavigator from './MainStackNavigator';
import FavoriScreen from '../screens/FavoriScreen';
import { colors } from '../constants/Colors';
import Basket from '../assets/icons/Basket';
import Favori from '../assets/icons/Favori';
import Home from '../assets/icons/Home';
import Profile from '../assets/icons/Profile';
import ProfileScreen from '../screens/ProfileScreen';

const BottomNavigator = () => {
  const TabNavigator = createBottomTabNavigator();

  return (
    <NavigationContainer initialRouteName="Home">
      <TabNavigator.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
         
          let tabIcon;
          if(route.name==="Home"){
            tabIcon = focused ? (
              <Home fill={colors.DARK} width={20} height={20}/>
            ) : (
              <Home fill={'none'} stroke={colors.BLACK} strokeWidth={30} width={20} height={20} />
            );
          }else if(route.name==="Basket"){
            tabIcon = focused ? (
              <Basket fill={colors.DARK} width={20} height={20}/>
            ) : (
              <Basket fill={'none'} stroke={colors.BLACK} strokeWidth={30} width={20} height={20} />
            );
          }else if(route.name==="Favori"){
            console.log(route.name);
             tabIcon = focused ? (
              <Favori fill={colors.DARK} width={20} height={20}/>
            ) : (
              <Favori fill={'none'} stroke={colors.BLACK} strokeWidth={30} width={20} height={20} />
            );
          }else if(route.name==="Profile"){
            tabIcon = focused ? (
              <Profile fill={colors.DARK} width={20} height={20}/>
            ) : (
              <Profile fill={'none'} stroke={colors.BLACK} strokeWidth={30} width={20} height={20} />
            );
          }
          return tabIcon
        }
      })}
      >
      <TabNavigator.Screen name="Home" component={MainStackNavigator} />
      <TabNavigator.Screen name="Basket" component={BasketScreen} />
      <TabNavigator.Screen name="Favori" component={FavoriScreen} />
      <TabNavigator.Screen name="Profile" component={ProfileScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
const styles = StyleSheet.create({});
