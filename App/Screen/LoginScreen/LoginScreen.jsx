import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './Utils/Colors'

import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../../../components/SignInWithOAuth';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress=async()=>{
    try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
  }
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    }}>
        <Image source={require('./../../../assets/images/logo.png')}
            style={styles.logoImage}
        />
        <Image source={require('./../../../assets/images/ev-charging.png')}
            style={styles.bgImage}
        />
        <View style={{padding:20}}>
            <Text style={styles.heading}>Your Ultimate EV Charging Station Finder App.</Text>
            <Text style={styles.desc}>Find EV Charging Station Near You And Book Your Slot In Advance.</Text>
            <TouchableOpacity style={styles.button}
            onPress={onPress}
            >
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'outfit',
                    fontSize:17
                }}>Login With Google</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logoImage:{
        width:250,
        height:40,
        objectFit:'contain',
        
    },
    bgImage:{
        width:'100%',
        height:240,
        marginTop:40,
        objectFit:'cover'
    },
    heading:{
        fontSize:25,
        fontFamily:'outfit-bold',
        textAlign:'center',
        marginTop:25
    },
    desc:{
        fontSize:18,
        fontFamily:'outfit',
        marginTop:35,
        textAlign:'center',
        color:'#000',
        color:Colors.GRAY
    },
    button:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:60
    }
})