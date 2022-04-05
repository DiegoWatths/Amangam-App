import React from 'react';
import { Text, View, Pressable, Image } from 'react-native'

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
            <Pressable style={({pressed}) => globalStyles.button(pressed)}>
                <Text style={globalStyles.subtitles}>
                    Iniciar
                </Text>
            </Pressable>
            <Pressable style={({pressed}) => globalStyles.button(pressed)}>
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
