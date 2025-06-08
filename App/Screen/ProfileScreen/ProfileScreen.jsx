import { View, Text, ActivityIndicator, Image, FlatList, Pressable, Linking } from 'react-native'
import React from 'react'
import Colors from '../../Screen/LoginScreen/Utils/Colors'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SlotBooking from '../SlotBooking/SlotBooking';
import Feather from '@expo/vector-icons/Feather';
export default function ProfileScreen() {
  const {user}=useUser();
  const menu=[
    {
      id:1,
      name:'My Favorite',
      icon:'heart-outline'
    },
    {
      id:2,
      name:'My Bookings',
      icon:'bookmark'
    },
    {
      id:3,
      name:'Logout',
      icon:'exit-outline'
    }
  ]
  const { isLoaded,signOut } = useAuth();
  const navigation=useNavigation();
  return (
    <View>
      <Text style={{padding:10,fontFamily:'outfit-medium',
    fontSize:30}}>My
     <Text style={{color:Colors.PRIMARY}}> Profile</Text></Text>
    
    {!user&&<View style={{display:'flex',
  justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'}
      color={Colors.PRIMARY}/>
    </View>}
    {/* User Profile Section  */}
    <View style={{alignItems:'center',marginTop:10}}>
      <Image source={{uri:user.imageUrl}}
        style={{
          width:100,
          height:100,
          borderRadius:99
        }}
      />
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:25,
        marginTop:10
      }}>{user?.fullName}</Text>
          <Text style={{
        fontFamily:'outfit',
        fontSize:17,
        marginTop:5,
        color:Colors.GRAY
      }}>{user?.primaryEmailAddress?.emailAddress}</Text>
    </View>
    <FlatList
      data={menu}
      style={{
        marginTop:50,
        marginHorizontal:50
      }}
      renderItem={({item,index})=>(
        <Pressable 
        onPress={() => {
          if (item.id === 1) {
            navigation.navigate('favorite');
          } else if (item.id === 2) {
            navigation.navigate('My Bookings'); // ✅ make sure this matches the screen name
          } else if (item.id === 3) {
            signOut();
          }
        }}
        style={{
          display:'flex',
          flexDirection:'row',
          gap:20,
          alignItems:'center',
          
          margin:10,
         
        }}>
          <Ionicons name={item.icon} 
          size={40} color={Colors.PRIMARY} />
          <Text style={{
            fontSize:20,
            fontFamily:'outfit'
          }}>{item.name}</Text>
        </Pressable>
      )}
    />
    </View>
  )
}