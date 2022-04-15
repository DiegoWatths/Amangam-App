import React, {useState} from "react";
import { View, Dimensions, Modal, Pressable, Text, TextInput } from 'react-native';
import { ImageBrowser } from 'expo-image-picker-multiple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {globalStyles} from '../styles/global'
import { uploadStyle } from "../styles/uploadStyle";

export default function Upload(){
    const [modalOpen, setModalOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [newManga, setNewManga] = useState({
        title: '',
        genre: '',
        Images: []
    });

    return (
        <View style={globalStyles.container}>
            <View style={{backgroundColor: '#012d2d'}}>
                <Modal visible={modalOpen} animationType={'fade'}>
                    <MaterialCommunityIcons name="close"
                    color={'red'} size={26}
                    onPress={() => setModalOpen(false)}
                    />
                    <View style={{marginTop: 40}}/>
                    <ImageBrowser
                        max={25}
                        onChange={(num, onSubmit)  => {
                            console.log(`${num} y ${onSubmit}`);
                        }}
                        callback={(callback) => {
                            console.log(callback);
                        }}
                    />
                </Modal>
            </View>

            <Text style={globalStyles.title}>
                    Introduzca los datos del Manga
            </Text>

            <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
            placeholder="Título"
            value={newManga.title}
            onChangeText={e => setNewManga({...newManga, title: e})}
            />
            <TextInput selectionColor={"#b36b00"} style={globalStyles.input}
            placeholder="Género"
            value={newManga.genre}
            onChangeText={e => setNewManga({...newManga, genre: e})}
            />
            <Pressable style={({pressed}) => globalStyles.button(pressed)} onPress={() => setModalOpen(true)}>
                <Text style={globalStyles.subtitles}>
                    Buscar Imágenes
                </Text>
            </Pressable>
            <Pressable style={({pressed}) => globalStyles.button(pressed)} onPress={() => console.log("envail")}>
                <Text style={globalStyles.subtitles}>
                    Subir Paginas
                </Text>
            </Pressable>
        </View>
    )
}