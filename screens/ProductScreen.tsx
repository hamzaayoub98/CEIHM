import {Image, StyleSheet, Text, View} from "react-native";


export default function ProductScreen({route}) {

    const produit = route.params.produit;
    console.log(produit.nom);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{produit.name}</Text>
            <View>
                <Image source={require('../assets/images/chips.png')} style={{height:300,width:200 , borderRadius:25}}/>
                <View style={styles.tableRoot}>
                    <Text>Valeures nutritionnelles</Text>
                    <View style={{backgroundColor:'#ff0300',flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                        <Text>Sucre</Text>
                        <Text style={{flex:1, justifyContent:'flex-end',alignItems:'center'}}>{produit.apport[1]['sucres']}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>{produit.name}</Text>
            <Text style={styles.title}>{produit.composition}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableRoot:{
      backgroundColor:"grey",
    },
    title: {
        flex:1,
        justifyContent:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"#ff1300"
    },
});
