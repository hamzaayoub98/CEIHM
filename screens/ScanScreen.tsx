import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {Camera} from "expo-camera";

export default function ScanScreen(){
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    camera:{
        height:"85%",
    },
    button:{
        width:"100%",
        height:"10%",
    },
    text:{
        fontSize:20,
    },
    buttonContainer:{
        width:"100%",
        height:"10%",

    },
})