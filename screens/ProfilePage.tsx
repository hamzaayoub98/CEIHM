import {StyleSheet, Text} from "react-native";


export default function ProfilePage(){


    return(

        <Text style={styles.title}>Profile PAge works</Text>
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
