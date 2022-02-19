import {FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import {product, RootTabScreenProps} from "../types";
import {productsList, salesProducts} from "../mock/products";
import ProductItem from "../components/ProductItem";
import {useState} from "react";
import {Ionicons} from "@expo/vector-icons";




export default function BonsPlans({navigation}: RootTabScreenProps<'BonsPlans'>) {
    const products : product[] = salesProducts;
    const [filterValue,setfilterValue] = useState("");



  function filterProductList(filter:string):product[]{
    const filtered = products.filter(prod =>
      prod.name.toLowerCase().includes(filter.toLocaleLowerCase())
    )
    return filter === ""? salesProducts: filtered
  }

    function  goToProductScreen(item:product){
      navigation.navigate('Product',{produit:item,navigation:navigation});
    }


  return (
    <View style={styles.container}>
        <TouchableOpacity  style={styles.profile} onPress={()=>{
                navigation.navigate('Profile')
            }}>
                <Ionicons name="md-person" size={32} color="black" />
            </TouchableOpacity>
      <Text style={styles.title} >Rechercher</Text>
      <TextInput value={filterValue}  style={styles.input} onChangeText={setfilterValue}/>
      <Text style={styles.header} >Bons plans</Text>
      <FlatList scrollEnabled={true}   showsHorizontalScrollIndicator={true}  data={filterProductList(filterValue)} renderItem={({item}) =>
         <TouchableOpacity style={styles.listItem} onPress={()=> goToProductScreen(item)} >
          <ProductItem id={item.id} name={item.name} prix={item.prix} img={item.img} nutriscore={item.nutriscore} apport={item.apport} composition={item.composition}
          similaires={item.similaires} regime={item.regime}/>
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
    header: {
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
  });

