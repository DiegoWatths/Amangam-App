import React from 'react';
import { Text, View, Pressable, Image } from 'react-native'

import {globalStyles} from '../styles/global'

export default function Home({ navigation }){
    return (
        <View style={globalStyles.container}> 
            <Image style={globalStyles.imagen} source={require('../assets/icon.png')} />
            <Text style={globalStyles.title}>
                Amangam
            </Text>
            <Text style={globalStyles.subtitles}>
                Inicia Sesion o Regístrate
            </Text>
            <Pressable style={({pressed}) => globalStyles.button(pressed)}
            onPress={() => navigation.navigate('Login')}>
                <Text style={globalStyles.subtitles}>
                    Iniciar
                </Text>
            </Pressable>
            <Pressable style={({pressed}) => globalStyles.button(pressed)}
            onPress={() => navigation.navigate('Register')}>
                <Text style={globalStyles.subtitles}>
                    Registrar
                </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Dashboard')}>
            <Text style={globalStyles.bottom}>
                Iniciar sesión más tarde
            </Text>
            </Pressable>
        </View>
    )
}
