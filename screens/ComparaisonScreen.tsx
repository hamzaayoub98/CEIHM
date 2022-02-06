import {
    Button,
    FlatList,
    Image,
    Modal,
    Picker,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import {product} from "../types";
import ApportTable from "../components/ApportTable";
import {productsList} from "../mock/products";
import {useState} from "react";
import ProductItem from "../components/ProductItem";
import {Ionicons} from "@expo/vector-icons";

export default function ComparaisonScreen() {
    const [product1,setproduct1]=useState(null);
    const [product2,setproduct2]=useState(null);
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);



    function productColumn(product:product){
        return( product === null? <Text> Pas encore de produit selectionner</Text> : <View style={{flex:1,flexDirection:"column", justifyContent:"center",alignItems:"center"}}>

                <Pressable onPress={()=>{
                    product === product1?
                        setproduct1(null)
                        :
                        setproduct2(null)
                }}>
                <Text style={styles.text}>{product.name}</Text></Pressable>

            <Image source={require('../assets/images/chips.png')} style={{height:200,width:100}}/>
            <ApportTable id={product.id} name={product.name} prix={product.prix} img={product.img}
                         nutriscore={product.nutriscore} apport={product.apport} composition={product.composition} similaires={product.similaires}/>
        </View>);
    }

    function modale(){
        return(
            <Modal visible={modal1Visible || modal2Visible}>
                    <FlatList data={productsList}  renderItem={({item}) =>
                        <Pressable onPress={()=>{
                            modal1Visible ? setproduct1(item) :setproduct2(item)
                            modal1Visible? setModal1Visible(false) : setModal2Visible(false)
                        }}>
                            <ProductItem id={item.id} name={item.name} prix={item.prix} img={item.img} nutriscore={item.nutriscore} apport={item.apport}
                                                composition={item.composition} similaires={item.similaires}/>
                        </Pressable>
                    }
                    />
            </Modal>
        );
    }

    return(
        <ScrollView>
        <SafeAreaView style={{flex:1, flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.title}>Comparer les produits</Text>
            {product1 === null?
                <Pressable  style={styles.button} onPress={()=>setModal1Visible(true)}>
                    <Text style={styles.text}>Selectionnez le premier produit</Text>
                </Pressable>
                :
                <Pressable  style={styles.button} onPress={()=>setModal1Visible(true)}>
                    <Text style={styles.text}>Changer le premier produit</Text>
                </Pressable>
            }
            {
                product2 === null?
                    <Pressable style={styles.button} onPress={()=>setModal2Visible(true)}>
                        <Text style={styles.text}>Selectionnez le deuxieme produit</Text>
                    </Pressable>
                    :
                    <Pressable style={styles.button} onPress={()=>setModal2Visible(true)}>
                        <Text style={styles.text}>Changer le deuxieme produit</Text>
                    </Pressable>
            }
            {modale()}
            <View style={{flex:1,flexDirection:"row"}}>
                {productColumn(product1)}
                {productColumn(product2)}
            </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles =  StyleSheet.create({

    text:{
        fontSize:20
    },
    title:{
        fontSize:30,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },

})
