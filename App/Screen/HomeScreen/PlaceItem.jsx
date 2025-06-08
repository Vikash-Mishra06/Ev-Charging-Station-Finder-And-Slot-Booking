import { 
  View, Text, Image, Dimensions, Pressable, Platform, Linking, ToastAndroid 
} from 'react-native';
import React from 'react';
import Colors from '../LoginScreen/Utils/Colors';
import { useUser } from '@clerk/clerk-react';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import { LinearGradient } from 'expo-linear-gradient';
import GlobalApi from '../LoginScreen/Utils/GlobalApi';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { app } from '../LoginScreen/Utils/FirebaseConfig';

export default function PlaceItem({ place, isFav, markedFav }) {
  const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1s";
  const { user } = useUser();
  const db = getFirestore(app);

  /**
   * Save Favorite on Heart Click
   */
  const onSetFav = async (place) => {
    await setDoc(doc(db, "ev-fav-place", (place.id).toString()), {
      place: place,
      email: user?.primaryEmailAddress?.emailAddress
    }
    );
    markedFav()
    ToastAndroid.show('Fav Added!', ToastAndroid.TOP);
  }

  /**
   * Used to remove Fav from List
   * @param {*} placeId 
   */
  const onRemoveFav=async(placeId)=>{
    console.log(placeId)
     await deleteDoc(doc(db, "ev-fav-place", placeId.toString()));
     ToastAndroid.show('Fav Removed!', ToastAndroid.TOP);
     markedFav()
  }


  /**
   * Open Google/Apple Maps for Directions
   */
  const onDirectionClick = () => {
    const url = Platform.select({
      ios: `maps:${place.location.latitude},${place?.location?.longitude}?q=${place?.formattedAddress}`,
      android: `geo:${place.location.latitude},${place?.location?.longitude}?q=${place?.formattedAddress}`,
    });
    Linking.openURL(url);
  };

  return (
    <View style={{
      backgroundColor: Colors.WHITE,
        margin: 5,
        borderRadius: 10,
        width: Dimensions.get('screen').width * 0.9,
        marginHorizontal: 20
    }}>
      <LinearGradient colors={['transparent', '#ffffffff', '#ffffff']}>

        {/* Heart Button - Ensure Pressable Works */}
        <Pressable
          style={{
            position: 'absolute',
            right: 15,
            top: 15,
            zIndex: 10, // Ensures it's above the image
            backgroundColor: 'rgba(255,255,255,0.8)',
            padding: 8,
            borderRadius: 20,
          }}
          onPress={() => isFav ? onRemoveFav(place.id) : onSetFav(place)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Increases touch area
        >
          {isFav ? (
            <Ionicons name="heart-sharp" size={28} color="red" />
          ) : (
            <FontAwesome name="heart-o" size={28} color="red" />
          )}
        </Pressable>

        {/* Place Image */}
        <Image 
          source={
            require('./../../../assets/images/ev-charging.png')
          }
          style={{ width: '100%', height: 150, resizeMode: 'cover' }}
        />

        {/* Place Info */}
        <View style={{ padding: 15 }}>
          <Text numberOfLines={1} style={{
            fontSize: 20,
            fontFamily: 'outfit-medium'
          }}>{place.displayName?.text}</Text>

          <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>
            {place?.shortFormattedAddress}
          </Text>

          {/* Connectors & Navigation */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View>
              <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 16 }}>
                Connectors
              </Text>
              <Text style={{ fontFamily: 'outfit-medium', fontSize: 18, marginTop: 2 }}>
                {place?.evChargeOptions?.connectorCount} Points
              </Text>
            </View>

            {/* Direction Button */}
            <Pressable 
              onPress={onDirectionClick}
              style={{
                padding: 12,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 6,
                paddingHorizontal: 14
              }}
            >
              <FontAwesome name="location-arrow" size={22} color="white" />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
