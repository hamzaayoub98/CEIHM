import {StyleSheet, Text, View} from "react-native";


export default function ProductScreen({route}) {

    const produit = route.params.produit;
    console.log(produit.nom);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Fiche du produit</Text>
            <Text style={styles.title}>{produit.nom}</Text>
            <Text style={styles.title}>{produit.prix}</Text>
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
        flex:1,
        justifyContent:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    },
});
