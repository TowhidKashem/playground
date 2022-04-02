import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
// import * as Location from 'expo-location';
import MapView, { Camera } from 'react-native-maps';

const Home: React.FC = () => {
  // const [locationData, setLocationData] = useState<Camera | null>(null);

  // useEffect(() => {
  //   async function getLocation() {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       // permission to access location was denied
  //       return;
  //     }

  //     const {
  //       coords: { latitude, longitude, heading, altitude }
  //     } = await Location.getCurrentPositionAsync({});

  //     setLocationData({
  //       center: {
  //         latitude,
  //         longitude
  //       },
  //       heading,
  //       pitch: 1,
  //       zoom: 18,
  //       altitude
  //     } as Camera);
  //   }

  //   getLocation();
  // }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider="google" showsUserLocation />

      {/* {locationData && (
        <MapView
          style={styles.map}
          provider="google"
          camera={locationData}
          showsUserLocation
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

export default Home;
