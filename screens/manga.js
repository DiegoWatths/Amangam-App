import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../styles/global'


export default function Dashboard(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
            Manga info and images
            </Text>
        </View>
    )
}