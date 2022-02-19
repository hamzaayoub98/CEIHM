import { useState } from "react";
import {StyleSheet, Text, TextInput, View, Button, Alert, Pressable} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const InputField = (props) => {
    return (
        <TextInput style={styles.inputText} {...props} editable />
    )
}

export default function ProfilePage(){
    const [firstname, setFirstname] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('none');
    const [items, setItems] = useState([
        {label: 'Pas de régime', value: 'none'},
        {label: 'No Gluten', value: 'noGluten'},
        {label: 'Végétarien', value: 'vegetarien'},
        {label: 'Végan', value: 'vegan'}
    ]);

    return(
        <View style={styles.container}>
            <View style={styles.separation}>
                <Text style={styles.title}>Utilisateur</Text>
                <InputField placeholder="Prénom" color value={firstname} onChangeText={setFirstname}/>
                <InputField placeholder="Nom" value={name} onChangeText={setName}/>
                <InputField placeholder="Adresse" value={address} onChangeText={setAddress}/>
                {/* <InputField placeholder="Allergènes" multilines value={state.allergen} onChangeText={(text: string) => state.allergen = text}/> */}
                <View style={styles.combobox}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Choisissez votre régime"
                        zIndex={1}
                    />
                </View>
            </View>
            <View style={[styles.separation, styles.fixZIndex]}>
                <Text style={styles.title}>Commerçant</Text>
                <View style={styles.buttonContainer}>
                    <Pressable
                        onPress={() => Alert.alert('Page de gestion des magasins')}
                        accessibilityLabel="Manage your shop as shop owner"
                        style={styles.button}
                    >
                        <Text style={styles.buttonOwner}>Gérer mes magasins</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    buttonOwner: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    inputText: {
        color:"black",
        textAlign: "center",
        paddingTop: 5
    },
    separation: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        margin: 10,
        paddingBottom: 10,
    },
    button: {
        width: 180,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'black',
    },
    title:{
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10,
        marginLeft: 10
    },
    buttonContainer:{
        alignItems: "center",
        margin: 15
    },
    combobox:{
        width: 215,
        marginTop: 15,
        alignSelf: "center",
        minHeight:210
    },
    center:{
        alignItems: 'center',
    },
    fixZIndex:{
        zIndex:-1
    }
});