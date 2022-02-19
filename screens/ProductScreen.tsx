import {FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {productsList, similairesList} from "../mock/products";
import {product} from "../types";
import ApportTable from "../components/ApportTable";
import CommentPage from "./CommentPage";
import {user} from "../mock/comments";


export default function ProductScreen({route,navigation}) {
    console.disableYellowBox = true;
    const produit : product = route.params.produit;
    const regime = user.regime;
    console.log(regime);
    const produitSimilaires = [0];
    console.log("similaires",produitSimilaires);
    function findProductById(id:number) : product{
        if(produit.id === 0){
            return productsList[1];
        }
        else if (produit.id === 1){return  productsList[0]}

    }

    function alternative(){
        if(produit.similaires.length){
        return  <FlatList data={produitSimilaires} renderItem={({item})=>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Product',{produit:findProductById(item),navigation:navigation})
            }
            } >
                <View style={{margin:4, height:100,width:75,backgroundColor:"#c9c8c7",flex:1,justifyContent:"center",alignItems:"center",borderRadius:5}}>
                    <Image source={findProductById(item).img} style={{height:60,width:60 , borderRadius:2}}/>
                    <Text>{findProductById(item).name}</Text>
                </View>
            </TouchableOpacity>
        }/>
    }
        return <Text>Pas d'alternatives disponibles</Text>
    }

    return(
        <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>{produit.name}</Text>
                    <View>
                        <Image source={produit.img} style={{alignSelf: 'center', height:200,width:100 , borderRadius:25}}/>
                        <View>
                            {produit.regime === regime ? <Text style={styles.regime}>Ne respecte pas votre régime !</Text> : null}
                        </View>
                        <ApportTable id={produit.id} name={produit.name} prix={produit.prix} img={produit.img} nutriscore={produit.nutriscore}
                                     apport={produit.apport} composition={produit.composition} similaires={produit.similaires} regime={produit.regime}/>
                    </View>
                    <View style={styles.alternativesProducts}>
                        <Text style={styles.title}>Ingrédients</Text>
                        <Text style={{fontSize: 18}}>{produit.composition}</Text>
                    </View>
                    <View style={styles.alternativesProducts}>
                        <Text style={styles.title}>Alternatives : </Text>
                        <View>{alternative()}</View>
                    </View>
                    <TouchableOpacity style={styles.bouton} onPress={()=>{
                        navigation.navigate('Comment',{produit:produit});
                    }}>
                        <Text style={styles.title}>Voir les commentaires</Text>
                    </TouchableOpacity>
                </ScrollView>
        </SafeAreaView>


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    tableRoot:{
        backgroundColor:"grey",
        flex: 1,
        borderRadius:12,
    },
    tableContent:{
        flex:1,
        margin:4,
    },
    title: {
        flex:1,
        alignSelf:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"#000000"
    },
    bouton:{
        height:30,
        flex:1,
        justifyContent:"center",
        backgroundColor:"#9ACD32",
        borderRadius:20,
        marginBottom: 10
    },
    alternativesProducts:{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 12,
        padding: 5,
        margin: 5
    },
    regime:{
        fontSize: 26,
        fontWeight: 'bold',
        color: 'red',
        marginLeft:4,
        borderWidth: 3,
        borderColor: "red",
        borderRadius: 12,
        padding: 5,
        margin: 5
    }
});
