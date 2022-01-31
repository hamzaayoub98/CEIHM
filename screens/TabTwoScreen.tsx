import {FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import {product, RootTabScreenProps} from "../types";
import {productsList} from "../mock/products";
import ProductItem from "../components/ProductItem";
import {useState} from "react";

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {


  const products : product[] = productsList;
  const [filterValue,setfilterValue] = useState("");



  function filterProductList(filter:string):product[]{
    const filtered = products.filter(prod =>
      prod.name.toLowerCase().includes(filter.toLocaleLowerCase())
    )
    return filter === ""? productsList: filtered
  }

  function goToProductScreen(item:product){
    navigation.navigate('Product',{produit:item,navigation:navigation});
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title} >Rechercher</Text>
      <TextInput value={filterValue}  style={styles.input} onChangeText={setfilterValue}/>
      <FlatList scrollEnabled={true}   showsHorizontalScrollIndicator={true}  data={filterProductList(filterValue)} renderItem={({item}) =>
         <TouchableOpacity style={styles.listItem} onPress={()=>goToProductScreen(item)}>
          <ProductItem id={item.id} name={item.name} prix={item.prix} img={item.img} nutriscore={item.nutriscore} apport={item.apport} composition={item.composition}
          similaires={item.similaires}/>
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
    height:80,
    width:350,
    borderRadius:5,
    backgroundColor:"#D3D3D3",
    margin:15,
  },
  input: {
    height: 40,
    margin: 12,
    width:200,
    borderWidth: 1,
    padding: 10,
  },
});
