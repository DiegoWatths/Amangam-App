import React from "react";
import { Text, View } from 'react-native';
import {globalStyles} from '../styles/global'

import List from '../shared/list'

export default function Search({navigation}){

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.title, {marginTop: 30}]}>
                Buscar Mangas por Capitulos
            </Text>
            <List navigation={navigation} Search={true}/>
        </View>
    )
}