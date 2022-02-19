import {product} from "../types";
import {Image, StyleSheet, Text, View} from "react-native";
import {user} from "../mock/comments";


export default function ProductItem(props:product){
    const regime = user.regime
    console.log("khjghjg",props.regime)
    const img = props.img+"";
    const og = '../assets/images/chips.png';
    console.log(img,'../assets/images/chips.png' === img);
    return(
        <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",}}>
            <Image source={props.img} style={{height:60,width:60, alignSelf:'center',marginLeft:4,borderRadius:3}}/>
            <View style={styles.content}>
                {regime === props.regime ? <Text style={styles.regime}>Ne respecte pas votre régime !</Text> : null}
                <Text style={styles.productName}>{props.name}</Text>
                <Text style={styles.ingredients}>{props.composition}</Text>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"center",
    },
    ingredients:{
        fontSize:15,
        marginLeft:4,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
         marginLeft:4,
    },
    regime:{
        fontSize: 18,
        color: 'red',
        marginLeft:4
    }
});
