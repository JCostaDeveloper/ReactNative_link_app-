import { FlatList } from "react-native";
import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/component/category";

export function Categories(){
return(
    <FlatList
    data ={categories}
    keyExtractor ={item => item.id}
    renderItem ={({item}) => <Category name={item.name} icon ={item.icon} isSelected={false}/>}
    horizontal
    style={styles.container}
    contentContainerStyle={styles.contant}
    showsHorizontalScrollIndicator={false}
    />
)
}