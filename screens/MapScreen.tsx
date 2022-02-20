import { StyleSheet, Text, View } from "react-native";
import {RootTabScreenProps} from "../types";
import React, { useState } from 'react';

import MapView ,{PROVIDER_GOOGLE}from 'react-native-maps';
import { Marker } from "react-native-maps";

export default function  MapScreen ({ navigation }: RootTabScreenProps<'Map'>) {
  console.disableYellowBox = true;

    const niceRegion = {
        latitude: 43.7117728,
        longitude: 7.2619532,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      const nearby = {
        latitude: 43.7111728,
        longitude: 7.2719532,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      const bonsplans = {
        latitude: 43.7101728,
        longitude: 7.2609532,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={niceRegion} //your region data goes here.
          >
            {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
            <Marker
            onPress={()=>{navigation.navigate('BonsPlans')}}
            coordinate={bonsplans}
            icon={require('../assets/images/carrefour.png')}
            title={"Carrefour"} />

          <Marker
            onPress={()=>{navigation.navigate('BonsPlans')}}
            coordinate={nearby}
            icon={require('../assets/images/lidl.png')}
            title={"Lidl"} />          


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
