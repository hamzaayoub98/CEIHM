import {product} from "../types";
import {StyleSheet, Text, View} from "react-native";

export default function ApportTable(produit:product){




    return(
        <View style={styles.tableRoot}>
            <Text style={{marginLeft:25,}}>Valeures nutritionnelles</Text>
            <View style={{backgroundColor:'#ff0300',flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',margin:10,borderRadius:20}}>
                <Text style={{flex:1, justifyContent:'flex-start',alignItems:'center',marginLeft:2}}>Sucres</Text>
                <Text style={{flex:1, justifyContent:'flex-end',alignItems:'center'}}>{produit.apport[1]['sucres']}</Text>
            </View>
            <View style={{backgroundColor:'#88ff59',flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',margin:10,borderRadius:20}}>
                <Text style={{flex:1, justifyContent:'flex-start',alignItems:'center',marginLeft:2}}>Calories</Text>
                <Text style={{flex:1, justifyContent:'flex-end',alignItems:'center'}}>{produit.apport[0]['calories']}</Text>
            </View>
            <View style={{backgroundColor:'#ffe5aa',flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',margin:10,borderRadius:20}}>
                <Text style={{flex:1, justifyContent:'flex-start',alignItems:'center',marginLeft:2}}>Sel</Text>
                <Text style={{flex:1, justifyContent:'flex-end',alignItems:'center'}}>{produit.apport[2]['sel']}</Text>
            </View>
            <View style={{backgroundColor:'#f57fff',flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',margin:10,borderRadius:20}}>
                <Text style={{flex:1, justifyContent:'flex-start',alignItems:'center',marginLeft:2}}>Lipides</Text>
                <Text style={{flex:1, justifyContent:'flex-end',alignItems:'center'}}>{produit.apport[3]['lipides']}</Text>
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
        backgroundColor:"#ffffff",
        flex: 1,
        width:'100%',
        borderRadius:12,
        justifyContent:"center"
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
