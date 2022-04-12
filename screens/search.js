import React from "react";
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {globalStyles} from '../styles/global'


export default function Search(){
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.title}>
            Buscar Mangas por Capitulos
        </Text>
            
        </View>
    )
}