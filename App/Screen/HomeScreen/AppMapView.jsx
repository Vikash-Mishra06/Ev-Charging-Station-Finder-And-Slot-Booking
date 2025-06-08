import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewStyle from './../../Screen/LoginScreen/Utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext'
import Markers from './Markers'
import MapViewDirections from 'react-native-maps-directions';
import GlobalApi from '../../Screen/LoginScreen/Utils/GlobalApi'
const origin = {latitude: 18.901457, longitude: 73.176132};
const destination = {latitude: 18.990713, longitude: 73.116844};

export default function AppMapView({placeList}) {

  const {location,setLocation}=useContext(UserLocationContext);
//  console.log("--- ",location);
 
  return (
    <View>
        <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
        region={{
          latitude:location?.latitude,
          longitude:location?.longitude,
          latitudeDelta:0.0422,
          longitudeDelta:0.0421 
        }}
        >
     
          {/* User Marker  */}
         <Marker
            coordinate={{
              latitude:location?.latitude,
              longitude:location?.longitude
            }}
          >
            <Image source={require('./../../../assets/images/car-marker.png')} 
              style={{width:30,height:30}}
            />
          </Marker>

            {/* Place Markers  */}
          {placeList&&placeList.map((item,index)=>(
            <Markers key={index}
            index={index}
            place={item}/>
          ))}
          <MapViewDirections
          
          apikey="AIzaSyCzh6m5xYbhlOTy4MkUe-sr8lmZfpZUcCo"
          strokeWidth={3}
          strokeColor="hotpink"
        />
        </MapView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
