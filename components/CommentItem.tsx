import {comment} from "../types";
import {Text, View} from "react-native";


export default function CommentItem(props:comment){


    return(
        <View style={{backgroundColor:"#cacaca",height:80,width:300,borderRadius:15,margin:20,}}>
            <Text>Commentaire de {props.author}</Text>
            <Text style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                {props.content}
            </Text>
        </View>
    );

}
