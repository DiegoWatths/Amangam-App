import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Image, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import {globalStyles} from '../styles/global'

export default function Register(){
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = () => {
        /*TODO: 
            •Confirm if given mail is valid
            •Check if an input's value is emtpy, return if true
        */

        //Check if both password inouts are the same
        if (confirmPassword == password) {
            fetch(`${process.env.SERVER_URI}/register`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Request-Methods" : "POST, OPTIONS"
                },
                body: JSON.stringify({
                    "name": name,
                    "lastname": lastname,
                    "mail": mail,
                    "password": password
                })
            })
            .catch(err => console.log(err.message));
        } else {
            Alert.alert('Error!', 'La confirmación de su contraseña no concuerda con su contraseña', [
                {text: 'Ok manubrio mala mía', onPress: () => console.log('bruh he misstyped...') }
            ]);
        }
    }
    
    return(
       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
            <Image style={globalStyles.imagen} source={require('../assets/icon.png')} />
            <Text style={globalStyles.title}>
            Registrate en Amangam
            </Text>
            <Text style={globalStyles.subtitles}>
            Ingresa tus datos a continuacion
            </Text>
            <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
                placeholder="Apellido"
                value={lastname}
                onChangeText={setLastname}
            />
            <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
                placeholder="Correo"
                value={mail}
                onChangeText={setMail}
            />
            <Text style={globalStyles.subtitles}>
            Ingresa una contraseña
            </Text>
            <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
            />
            <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
                placeholder="Confirma Contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Pressable style={({pressed}) => globalStyles.button(pressed)} onPress={register}>
                <Text style={globalStyles.subtitles}>
                    Registrarse
                </Text>
            </Pressable>
        </View> 
       </TouchableWithoutFeedback>
    )
}  