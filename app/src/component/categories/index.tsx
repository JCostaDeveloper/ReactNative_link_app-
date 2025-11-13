import { FlatList } from "react-native";
import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/component/category";

export function Categories(){
return(
    <FlatList
    data ={categories}//data recebe a lista de categorias
    keyExtractor ={item => item.id}//keyExtractor extrai a chave unica de cada item da lista
    renderItem ={({item}) => <Category name={item.name} icon ={item.icon} isSelected={false}/>}//renderItem renderiza cada item da lista
    horizontal//define a lista como horizontal
    style={styles.container}
    contentContainerStyle={styles.contant}//adiciona estilo ao conteudo interno do flatlist
    showsHorizontalScrollIndicator={false}  //remove a barra de rolagem horizontal
    />
)
}