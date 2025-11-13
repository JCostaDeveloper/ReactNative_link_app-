import { View, Image, TouchableOpacity } from 'react-native';//import de componentes do react-native.
import {MaterialIcons} from "@expo/vector-icons";//import de icones do expo vector icons.
import { colors } from '@/styles/colors';//importa as cores do app.
import { styles } from './styles';
import { Categories } from '@/component/categories';//importação no React Native é nomeada
import { Link } from '@/component/link';


//Rota inicial (Index) do app, por ser export default pode ser encontrada pelo expo router. 
// Por padrão componentes iniciam com letra maiúscula.
export default function Index(){ 

    return(    
        <View style ={styles.conteiner}>
            <View style = {styles.header}>
                <Image source={require('@/assets/logo.png')} style ={styles.logo}/>
                <TouchableOpacity>
                    <MaterialIcons name="add" size= {32} color={ colors.green[300]}/>
                </TouchableOpacity>
            </View>
            <Categories/>
            <Link
            name="Exemplo de link"
            url="www.exemplodelink.com.br"
            onDetail={()=>{console.log("Detalhes do link")}}
            />
        </View>

    )

}