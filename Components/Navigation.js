import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet } from 'react-native';

import FavoritesScreen from './Favorites/ListFavorites';
import FriendList from './User/FriendList';
import Home from './Movie/MovieSwipe';
import ProfileScreen from './User/Profile';
import Search from './Movie/SearchMovie';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#8C1127"
      barStyle={{
        position: 'absolute',
        bottom: 25,
        right: 20,
        left: 20,
        elevation: 0,
        borderRadius: 15,
        backgroundColor: '#1F1F26',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        ...styles.shadow
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star-box-multiple" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendList}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
         name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
     shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default Tabs;
