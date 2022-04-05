import React from 'react';
<<<<<<< Updated upstream
import { Text, View, Button} from 'react-native'
=======
import { Text, View, Pressable, Image } from 'react-native'
>>>>>>> Stashed changes
import {globalStyles} from '../styles/global'

export default function Home(){
    return (
        <View style={globalStyles.container}> 
            <Image style={globalStyles.imagen} source={require('../assets/icon.png')} />
            <Text style={globalStyles.title}>
                Amangam
            </Text>
            <Text style={globalStyles.subtitles}>
                Inicia Sesion o Regístrate
            </Text>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.subtitles}>
                    Iniciar
                </Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.subtitles}>
                    Registrar
                </Text>
            </Pressable>
            <Text style={globalStyles.bottom}>
                Iniciar sesión más tarde
            </Text>
        </View>
    )
}