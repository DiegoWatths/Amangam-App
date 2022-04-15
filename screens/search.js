import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {globalStyles} from '../styles/global'

import List from '../shared/list'

export default function Search({navigation}){

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
                Buscar Mangas por Capitulos
            </Text>
            <SearchBar 
                placeholder="Busque aquí..."
            />
            <List />
        </View>
    )
}