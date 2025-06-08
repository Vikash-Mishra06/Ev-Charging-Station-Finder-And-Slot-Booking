import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../LoginScreen/Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({searchedLocation}) {
    
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        paddingHorizontal:5,
        backgroundColor:Colors.WHITE,
        borderRadius:6
    }}>
        <Ionicons name="location-sharp" size={24} 
        color={Colors.GRAY} style={{paddingTop:10}} />
       <GooglePlacesAutocomplete
        placeholder='Search EV Charging Station'
        enablePoweredByContainer={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            searchedLocation(details?.geometry?.location)
        }}
      query={{
        key: 'AIzaSyCzh6m5xYbhlOTy4MkUe-sr8lmZfpZUcCo',
        language: 'en',
      }}
    />
    </View>
  )
}