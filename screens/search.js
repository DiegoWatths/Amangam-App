import React from "react";
import { Text, View } from 'react-native';
import {globalStyles} from '../styles/global'


export default function Search(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
            This is the search page
            </Text>
        </View>
    )
}