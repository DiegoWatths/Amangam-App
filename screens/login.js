import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Pressable, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {globalStyles} from '../styles/global'

export default function Login(){
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const login = () =>{
        //Logic to authenticate an user
    }

    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
                <Image style={globalStyles.imagen} source={require('../assets/icon.png')} />
                <Text style={globalStyles.title}>
                Amangam
                </Text>
                <Text style={globalStyles.subtitles}>
                Ingresa con tus datos 
                </Text>
                <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
                    placeholder="Correo"
                    value={mail}
                    onChangeText={setMail}
                />
                <Text style={globalStyles.subtitles}>
                Ingresa una contraseña
                </Text>
                <TextInput secureTextEntry={true} selectionColor={"#b36b00"} style={globalStyles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable style={({pressed}) => globalStyles.button(pressed)} onPress={login}>
                    <Text style={globalStyles.subtitles}>
                        Log In
                    </Text>
                </Pressable>
        </View> 
      </TouchableWithoutFeedback>
    )
}