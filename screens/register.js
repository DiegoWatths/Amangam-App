import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Image, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import {globalStyles} from '../styles/global'

export default function Register(){
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    var error = false;

    const register = async () => {
        /*TODO: 
            •Check if an input's value is emtpy, return if true
            •Confirm if both passwords are the same
        */

        //Check empty input
        if(!(name == '' || lastname == '' || username == '' || mail == '' || password == '' || confirmPassword == '')){
            //Check if both password inputs are the same
            if(confirmPassword != password){
                Alert.alert('Error!', 'La confirmación de su contraseña no concuerda con su contraseña', [
                    {text: 'Ok manubrio mala mía', onPress: () => console.log('bruh he misstyped...') }
                ]);
                error = true;
            }

            if (!error) {
                await fetch(`${process.env.SERVER_URI}/register`, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Request-Methods" : "POST, OPTIONS"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "lastname": lastname,
                        "username": username,
                        "email": mail,
                        "password": password
                    })
                })
                .then((response) => response.json())
                .then( (res) =>{
                    Alert.alert('Registro exitoso', 'Se ha registrado exitosamente', [
                        {text: 'Ok manubrio mala mía', onPress: () => console.log(res) }
                    ])}
                )
                .catch(err => console.log(err.message));
            } else return;
        }else{
            Alert.alert('Error!', 'Algunos de las entradas están vacías. Por favor llene todas las entradas', [
                {text: 'Aceptar', onPress: () => console.log('Error No1 Faulty data input') }
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
                placeholder="Nombre de Usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
                placeholder="Correo"
                value={mail}
                onChangeText={setMail}
            />
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