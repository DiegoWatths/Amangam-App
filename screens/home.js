import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native'
import {globalStyles} from '../styles/global'

export default function Home(){
    return (
        <View style={globalStyles.container}> 
            <Text style={globalStyles.title}>
                Amangam
            </Text>
            <Text style={globalStyles.subtitles}>
                Inicia Sesion o Registrate
            </Text>
            <Button title='Iniciar'/>
            <Button title='Unirse'/>
            <Text styles={globalStyles.subtitles}>
                Continuar Sin Iniciar
            </Text>
        </View>
    )
}