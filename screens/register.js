import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {globalStyles} from '../styles/global'


export default function Register(){
    return(
       <View>
           <Text style={globalStyles.title}>
           Registrate en Amangam
           </Text>
           <Text style={globalStyles.subtitles}>
           Ingresa tus datos a continuacion
           </Text>
           <TextInput style={globalStyles.input}
            placeholder="Nombre"
            //value={name}
           />
           <TextInput style={globalStyles.input}
            placeholder="Apellido"
            //value={lastname}
           />
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
           <TextInput style={globalStyles.input}
            placeholder="Confirma Contraseña"
            //value={password}
           />
       </View> 
    )
}  