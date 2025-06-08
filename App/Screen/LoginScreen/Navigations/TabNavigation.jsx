import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../HomeScreen/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FavoriteScreen from '../../FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../../ProfileScreen/ProfileScreen';
import Colors from '../Utils/Colors';
import SlotBooking from '../../SlotBooking/SlotBooking';
const Tab=createBottomTabNavigator();
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,

    }}>
        <Tab.Screen name='home'
        component={HomeScreen}
    options={{
        tabBarLabel:'Search',
        tabBarActiveTintColor:Colors.PRIMARY,
        tabBarIcon:({color,size})=>(
            <Ionicons name="search"
             size={size} color={color} />
        )
    }}/>
        <Tab.Screen name='favorite'
        component={FavoriteScreen}
        options={{
            tabBarLabel:'Favorite',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon:({color,size})=>(
                <Ionicons name="heart"
                 size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='My Bookings'
        component={SlotBooking}
        options={{
            tabBarLabel:'Bookings',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon:({color,size})=>(
                <FontAwesome name="bookmark" size={size} color={color}/>
            )
        }}/>

        <Tab.Screen name='profile'
        component={ProfileScreen}
        options={{
            tabBarLabel:'Profile',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon:({color,size})=>(
                <FontAwesome5 name="user-circle" size={size} color={color} />
            )
        }}
        />
        

    </Tab.Navigator>
  )
}