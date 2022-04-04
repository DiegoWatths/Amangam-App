import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'
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
                O
            </Text>
            <TouchableOpacity>
                style={globalStyles.button}
                <Text>Continuar Sin Iniciar</Text>
            </TouchableOpacity>
        </View>
    )
}