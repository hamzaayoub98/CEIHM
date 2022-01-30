import { StyleSheet, Text, View } from "react-native";
import {RootTabScreenProps} from "../types";
import React, { useState } from 'react';

import MapView ,{PROVIDER_GOOGLE}from 'react-native-maps';
import { Marker } from "react-native-maps";

export default function  MapScreen ({ navigation }: RootTabScreenProps<'Map'>) {

    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={tokyoRegion} //your region data goes here.
          >
            {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
            <Marker 
            onPress={()=>{navigation.navigate('BonsPlans')}}
            coordinate={tokyoRegion} />
          </MapView>
        </View>
      );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
