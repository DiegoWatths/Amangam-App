import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function Register(){
    return(
       <View>
           <Text style={styles.title}>
           Registrate en Amangam
           </Text>
           <Text style={styles.subtitles}>Ingresa tus datos a continuacion</Text>
           <TextInput style={styles.input}
            placeholder="Nombre"
            //value={name}
           />
           <TextInput style={styles.input}
            placeholder="Apellido"
            //value={lastname}
           />
           <TextInput style={styles.input}
            placeholder="Correo"
            //value={mail}
           />
           <Text style={styles.subtitles}>Ingresa una contraseña</Text>
           <TextInput style={styles.input}
            placeholder="Contraseña"
            //value={password}
           />
           <TextInput style={styles.input}
            placeholder="Confirma Contraseña"
            //value={password}
           />
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    subtitles: {
        fontSize: 20
    },
    input: {
        borderWidth: 2,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
  });
  