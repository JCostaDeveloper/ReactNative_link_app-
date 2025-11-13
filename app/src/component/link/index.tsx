import { View,Text,TouchableOpacity } from "react-native";
import{ MaterialIcons} from "@expo/vector-icons";
import { style } from "./style";
import { colors } from "@/styles/colors";

type Props = {
name: string
url: string
onDetail:()=>void
}

export function Link({name,url,onDetail}:Props){
    return(
        <View style={style.container}>
            <View style={style.datails}>
                <Text style={style.name} numberOfLines={1}>{name}</Text>
                <Text style={style.url} numberOfLines={1}>{url}</Text>
            </View>
            <TouchableOpacity onPress={onDetail}>
                <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]}/>
            </TouchableOpacity>
       </View>
      
    )
}