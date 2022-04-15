import React from 'react';
import { useState, useContext } from 'react';
import { Text, View, TextInput, Pressable, Image, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import {globalStyles} from '../styles/global'
import {AuthContext} from '../context/AuthContext';
import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../context/AxiosContext';

export default function Login(){
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);
    const {publicAxios} = useContext(AxiosContext);

    const login = async () =>{
        //Logic to authenticate an user
        if(!(mail == '' || password == '')){
            try {
                const response = await publicAxios.post('/login', {
                  email,
                  password,
                });
          
                const {accessToken, refreshToken} = response.data;
                authContext.setAuthState({
                  accessToken,
                  refreshToken,
                  authenticated: true,
                });
          
                await Keychain.setGenericPassword(
                  'token',
                  JSON.stringify({
                    accessToken,
                    refreshToken,
                  }),
                );
              } catch (error) {
                Alert.alert('Login Failed', error.response.data.message);
              }
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