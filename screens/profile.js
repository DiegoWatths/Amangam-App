import React from "react";
import { Text, View } from 'react-native';
import {globalStyles} from '../styles/global'


export default function Profile(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
            This is the profile page
            </Text>
        </View>
    )
}