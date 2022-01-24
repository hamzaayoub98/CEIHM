import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import {RootTabScreenProps} from "../types";

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {


  const produits =[{
    nom:"chips",
    prix:25,
  },
    {
      nom:"fromage",
      prix:15,
    },{
      nom:"viande",
      prix:12,
    }
  ];

  function goToProductScreen(item:any){
    navigation.navigate('Product',{produit:item});
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rechercher</Text>
      <FlatList scrollEnabled={true}   showsHorizontalScrollIndicator={true}  data={produits} renderItem={({item}) =>
         <TouchableOpacity style={styles.listItem} onPress={()=>goToProductScreen(item)}>
           <Text>{item.nom}</Text>
           <Text>{item.prix}</Text>
         </TouchableOpacity>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent:"center",
    alignItems:"center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  listItem:{
    height:50,
    width:150,
    borderRadius:5,
    backgroundColor:"#737373",
    margin:15,
  }
});
