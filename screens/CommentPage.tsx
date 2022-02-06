import {FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {comment, product} from "../types";
import {comments} from "../mock/comments";
import CommentItem from "../components/CommentItem";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";

function getCommentsFromProduct(product){
    let res : comment[] = [];
    comments.forEach(comment =>{
        if(comment.productId === product.id){
            res.push(comment);
        }
    })
    return res;
}

export default function CommentPage({route}){
    const product : product = route.params.produit;
    const [myCommentValue,setMyCommentValue] = useState("");
    const [rafraichir,setrafraishir] = useState(0);
    const productComments : comment[] = getCommentsFromProduct(product);




    function addComment(){
        console.log(productComments.length);
        const newC : comment = {
            id:4,
            productId:product.id,
            author:"Moi",
            content:myCommentValue,
        }
        productComments.push(newC);
        comments.push(newC);
        setrafraishir(rafraichir+1);
        setMyCommentValue("");
    }


    return(
        <ScrollView>
            <View style={styles.container}>
                <Text> Commentaires pour : {product.name}</Text>

                <FlatList data={productComments} extraData={rafraichir} renderItem={({item}) =>
                    <CommentItem id={item.id} productId={item.productId} author={item.author} content={item.content}/>
                }/>
                <Text>Ajouter mon commentaire</Text>
                <View style={{flex:1,flexDirection:"row"}}>
                    <TextInput style={styles.input} value={myCommentValue} onChangeText={setMyCommentValue}/>
                    <TouchableOpacity style={{flex:1,alignItems:"center",justifyContent:"center"}} onPress={addComment}>
                        <Ionicons name="md-add" size={28} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    bouton:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#c6c6c6",
        borderRadius:20,
    },
    input: {
        height: 100,
        margin: 12,
        width:310,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:"#c6c6c6",
    },
});
