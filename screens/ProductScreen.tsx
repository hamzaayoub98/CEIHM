import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {productsList, similaireList, similairesList} from "../mock/products";
import {product} from "../types";
import ApportTable from "../components/ApportTable";


export default function ProductScreen({route,navigation}) {
    const produit = route.params.produit;
    const produitSimilaires = similairesList[produit.id].similairesId;
    console.log("similaires",produitSimilaires);
    function findProductById(id:number) : product{
        productsList.forEach(item =>{
            if(item.id === id){
                return item;
            }
        })
        return produit
    }

    function alternative(){
        if(produitSimilaires !== undefined && !(produitSimilaires.length === 0)){
        return  <FlatList data={produitSimilaires}  numColumns={2} renderItem={({item})=>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Product',{produit:findProductById(item),navigation:navigation})
            }
            } >
                <View style={{margin:4, height:45,width:45,backgroundColor:"#c9c8c7",flex:1,justifyContent:"center",alignItems:"center",borderRadius:5}}>
                    <Image source={require('../assets/images/chips.png')} style={{height:25,width:25 , borderRadius:2}}/>
                    <Text>{findProductById(item).name}</Text>
                </View>
            </TouchableOpacity>
        }/>
    }
        return <Text>PAs d'alternatives disponibles :(</Text>
    }



    console.log(produit.nom);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{produit.name}</Text>
            <View>
                <Image source={require('../assets/images/chips.png')} style={{height:300,width:200 , borderRadius:25}}/>
                <ApportTable id={produit.id} name={produit.name} prix={produit.prix} img={produit.img} nutriscore={produit.nutriscore}
                             apport={produit.apport} composition={produit.composition} similaires={produit.similaires}/>
            </View>
            <Text style={styles.title}>{produit.composition}</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Voir les alternatives</Text>
            <View style={{borderRadius:10,backgroundColor:"grey"}}>
                {alternative()}
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
    },
    tableRoot:{
        backgroundColor:"grey",
        flex: 1,
        width:'100%',
        borderRadius:12,
    },
    tableContent:{
        flex:1,
        margin:4,
    },
    title: {
        flex:1,
        justifyContent:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"#ff1300"
    },
});
