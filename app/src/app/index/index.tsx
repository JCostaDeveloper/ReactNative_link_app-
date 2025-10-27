import {Text}from 'react-native';//import de componentes do react-native

import { styles } from './styles';

//Rota inicial (Index) do app, por ser export default pode encontrada pelo expo router 
export default function Index(){ 
    return <Text style = { styles.title } > Hello World! React Native</Text>
}