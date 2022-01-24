import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import {product, RootTabScreenProps} from "../types";
import {productsList} from "../mock/products";
import ProductItem from "../components/ProductItem";

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {


  const products : product[] = productsList;

  function goToProductScreen(item:product){
    navigation.navigate('Product',{produit:item});
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rechercher</Text>
      <FlatList scrollEnabled={true}   showsHorizontalScrollIndicator={true}  data={products} renderItem={({item}) =>
         <TouchableOpacity style={styles.listItem} onPress={()=>goToProductScreen(item)}>
          <ProductItem name={item.name} prix={item.prix} img={item.img} nutriscore={item.nutriscore} apport={item.apport} composition={item.composition}/>
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
