import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Screen/LoginScreen/Navigations/TabNavigation';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import * as Location from 'expo-location';
import { UserLocationContext } from './App/Context/UserLocationContext';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

console.log(uuid());
// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      if (location) {
        setLocation(location.coords);
      } else {
        // If no last known position, try to get the current position
        location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
      }
    }

    getCurrentLocation();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded || error) {
    return null;  // Wait for fonts to load
  }

  return (
    <ClerkProvider publishableKey={'pk_test_Y3VkZGx5LWhvcnNlLTczLmNsZXJrLmFjY291bnRzLmRldiQ'}>
      <ClerkLoaded>
        <UserLocationContext.Provider value={{ location, setLocation }}>
          <View style={styles.container}>
            <SignedIn>
              {/* After login, show the main app */}
              <NavigationContainer>
                <TabNavigation />
              </NavigationContainer>
            </SignedIn>
            <SignedOut>
              {/* If not signed in, show the login screen */}
              <LoginScreen />
            </SignedOut>
            <StatusBar style="auto" />
          </View>
        </UserLocationContext.Provider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
});