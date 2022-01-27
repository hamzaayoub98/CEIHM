import {Text, View} from "react-native";
import {product} from "../types";
import ApportTable from "../components/ApportTable";
import {productsList} from "../mock/products";

export default function ComparaisonScreen(route) {
    const product1:product = productsList[0];
    const product2:product = productsList[1];
    return(
        <View style={{flex:1,flexDirection:"row" , justifyContent:"space-between"}}>
            <View style={{flex:1,flexDirection:"column", justifyContent:"center"}}>
                <Text>poduit1</Text>
                <ApportTable id={product1.id} name={product1.name} prix={product1.prix} img={product1.img}
                             nutriscore={product1.nutriscore} apport={product1.apport} composition={product1.composition} similaires={product1.similaires}/>
            </View>
            <View style={{flex:1,flexDirection:"column"}}>
                <Text>Produit 2 </Text>
                <ApportTable id={product2.id} name={product2.name} prix={product2.prix} img={product2.img}
                             nutriscore={product2.nutriscore} apport={product2.apport} composition={product2.composition} similaires={product2.similaires}/>
            </View>
        </View>
    );
}
