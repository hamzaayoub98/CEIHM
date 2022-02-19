import { useState } from "react";
import {StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity} from "react-native";

const InputField = (props) => {
    return (
        <TextInput style={styles.inputText} {...props} editable />
    )
}

export default function ProfilePage(){
    const [firstname, setFirstname] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [regime, setRegime] = useState<string>('')

    return(
        <View>
            <InputField placeholder="Prénom" color value={firstname} onChangeText={setFirstname}/>
            <InputField placeholder="Nom" value={name} onChangeText={setName}/>
            <InputField placeholder="Adresse" value={address} onChangeText={setAddress}/>
            {/* <InputField placeholder="Allergènes" multilines value={state.allergen} onChangeText={(text: string) => state.allergen = text}/> */}
            <InputField placeholder="Régime" value={regime} onChangeText={setRegime}/>
            <Button
                onPress={() => Alert.alert('Pressed !')}
                title="Je suis commerçant ->"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => Alert.alert('Choix enregistrés avec succès')}
                title="Valider mes choix"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
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
    inputText: {
        color:"black",
        textAlign: "center",

    }
});
