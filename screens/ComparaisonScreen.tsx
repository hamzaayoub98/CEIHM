import {Image, Picker, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {product} from "../types";
import ApportTable from "../components/ApportTable";
import {productsList} from "../mock/products";

export default function ComparaisonScreen(route) {
    const product1:product = productsList[0];
    const product2:product = productsList[1];
    const picked = false;




    function productColumn(product:product){
       return(<View style={{flex:1,flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.text}>{product.name}</Text>
            <Image source={require('../assets/images/chips.png')} style={{height:200,width:100}}/>
            <ApportTable id={product.id} name={product1.name} prix={product.prix} img={product.img}
                         nutriscore={product.nutriscore} apport={product.apport} composition={product.composition} similaires={product.similaires}/>
        </View>);
    }

    return(
        <SafeAreaView style={{flex:1, flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.title}>Comparer les produits</Text>
            <View style={{flex:1,flexDirection:"row" , justifyContent:"space-between"}}>
                {productColumn(product1)}
                {productColumn(product2)}
            </View>
            </SafeAreaView>
    );
}

const styles =  StyleSheet.create({

    text:{
        fontSize:20
    },
    title:{
        fontSize:30,
    }

})
