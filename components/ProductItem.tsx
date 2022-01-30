import {product} from "../types";
import {Image, StyleSheet, Text, View} from "react-native";


export default function ProductItem(props:product){

    const img = props.img+"";
    const og = '../assets/images/chips.png';
    console.log(img,'../assets/images/chips.png' === img);
    return(
        <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",}}>
            <Image source={props.img} style={{height:'90%',width:'20%',marginTop:'1%',marginLeft:1,borderRadius:3}}/>
            <View style={styles.content}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.composition}</Text>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"center",
    },
    text:{
        fontSize:15,
        marginLeft:4,
    }
});
