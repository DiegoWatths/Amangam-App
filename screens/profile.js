import React from "react";
import { Text, View, Pressable, Alert, useState } from 'react-native';
import { Avatar } from 'react-native-elements';
import {globalStyles} from '../styles/global'
import {profileStyles} from '../styles/profileStyle'

const handleClick = () => {
    Alert.alert('Quieres cambiar tu bta?', 'Bruh its not implemented yet', [
        {text: 'Finardo bro', onPress: () => console.log('yasss') }
    ]);
}

export default function Profile(){
    return (
        <View style={globalStyles.container}>
            <View style={profileStyles.container}>
                <Pressable onPress={handleClick}>
                    <Avatar
                        rounded
                        size="xlarge"
                        source={{
                            uri:
                            'https://wallpaperaccess.com/full/1101027.jpg',
                        }}
                        >
                    </Avatar>
                </Pressable>
                <View style={profileStyles.box}>
                    <Text style={globalStyles.title}>
                    Diwingo
                    </Text>
                </View>
                <View style={profileStyles.box}>
                    <Text style={profileStyles.text}>
                    Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
                    </Text>
                </View>
                <Pressable style={({pressed}) => profileStyles.button(pressed)} onPress={handleClick}>
                    <Text style={globalStyles.subtitles}>
                        Cambiar Texto
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}