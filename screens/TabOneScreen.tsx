import {StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Ionicons} from "@expo/vector-icons";
import {Image} from 'react-native' ; 

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  return (
    <View style={styles.container}>
            <Text style={styles.title}>Accueil</Text>
            <Image source={require('../assets/images/eatsmart.png')} />
            <TouchableOpacity  style={styles.profile} onPress={()=>{
                navigation.navigate('Profile')
            }}>
                <Ionicons name="md-person" size={32} color="black" />
            </TouchableOpacity>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonContent}>
                    SCAN
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('TabTwo')
            }}>
                <Text style={styles.buttonContent}>
                    RECHERCHER
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonContent} onPress={()=>{
                navigation.navigate('Map')
            }}>
                    MAP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonContent}>
                    COMPARER
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile:{
      position:"absolute",
      top:0,
      right:0,
      height:40,
      width:40,
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"white",
      borderRadius:100,
  },
  title: {
      fontSize: 13,
      fontWeight: 'bold',
      flex:1,
      justifyContent:"center",
      alignItems:"center",
  },
    buttonContent:{
            fontSize: 13,
            fontWeight: 'bold',
            flex:1,
            justifyContent:"center",
            alignItems:"center",
    },
  buttonContainer:{
      flex:1,
      flexDirection:"row"
  },
  button:{
      margin:10,
      height:100,
      width:100,
      borderRadius:10,
      backgroundColor:"#8c8c8c",
      flex:1,
      justifyContent:"center",
      alignItems:"center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
