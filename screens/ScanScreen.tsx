import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {Camera} from "expo-camera";

export default function ScanScreen(){
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera = null;


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
            <Camera style={styles.camera}  type={type} ref={ref => {
                camera = ref;
            }}>

            </Camera>
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
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        height:"50%",
        backgroundColor:"#dddddd",
    },
    text:{
        fontSize:20,
    },
    buttonContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"10%",
        borderRadius:200,
        backgroundColor:"#dddddd",
    },
})
