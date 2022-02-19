import {Modal, Picker, Pressable, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Ionicons} from "@expo/vector-icons";
import {Image} from 'react-native' ;
import {Camera} from "react-native-vision-camera";
import {useEffect, useState} from "react";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [modal, setmodal] = useState(true);
    const [filterValue,setfilterValue] = useState("");
    const [selectedDropDown, setselectedDropDown] = useState("none");
    const getCameraPermission = async () => {
        await Camera.getCameraPermissionStatus()
    };
    useEffect(() => {
        getCameraPermission();
    }, []);

    function modale(){
        return(
        <Modal visible={modal} style={{flex:1,justifyContent:"flex-end",alignItems:"center",margin:40}}>
            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center",margin:40}}>
                <Text>Nom utilisateur : </Text>
                <TextInput value={filterValue}  style={styles.input} onChangeText={setfilterValue}/>
                <Text>Régime alimentaire</Text>
                <Picker
                    selectedValue={selectedDropDown}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setselectedDropDown(itemValue)}>
                    <Picker.Item label="Aucun" value="none" />
                    <Picker.Item label="Vegetarien" value="vege" />
                </Picker>
                <TouchableOpacity  onPress={()=>setmodal(false)} style={{flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <Text style={{borderRadius:5, backgroundColor:"#a4a4a4"}}>Page d'accueil</Text>
                </TouchableOpacity>
            </View>

        </Modal>);
    }

  return (
    <View style={styles.container}>
        {modale()}
            <Text style={styles.title}>Accueil</Text>
            <Image source={require('../assets/images/eatsmart.png')} />
            <TouchableOpacity  style={styles.profile} onPress={()=>{
                navigation.navigate('Profile')
            }}>
                <Ionicons name="md-person" size={32} color="black" />
            </TouchableOpacity>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Scan',{navigation})}>
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
            <TouchableOpacity style={styles.button}
                              onPress={()=>{
                                  navigation.navigate('Map')
                              }}>
            <Text style={styles.buttonContent}>
                    MAP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Compare')}>
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
    input: {
        height: 40,
        margin: 12,
        width:200,
        borderWidth: 1,
        padding: 10,
    },
  title: {
      fontSize: 13,
      fontWeight: 'bold',
      flex:1,
      justifyContent:"center",
      alignItems:"center",
  },
    buttonContent:{
            fontSize: 15,
            fontWeight: 'bold',
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            margin:13
    },
  buttonContainer:{
      flex:1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
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
