import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {globalStyles} from '../styles/global'

export default function Register(){
    return(
       <View>
           <Text style={globalStyles.title}>
           Amangam
           </Text>
           <Text style={globalStyles.subtitles}>
           Ingresa con tus datos 
           </Text>
           <TextInput style={globalStyles.input}
            placeholder="Correo"
            //value={mail}
           />
           <Text style={globalStyles.subtitles}>
           Ingresa una contraseña
           </Text>
           <TextInput style={globalStyles.input}
            placeholder="Contraseña"
            //value={password}
           />
       </View> 
    )
}