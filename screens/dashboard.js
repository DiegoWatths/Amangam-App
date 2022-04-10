import React, {useEffect, useState} from "react";
import { Modal, Text, View, TextInput, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {globalStyles} from '../styles/global'

export default function Dashboard(){
    //const [modalOpen, setModalOpen] = useState(false);
    const [newManga, setNewManga] = useState({
        title: '',
        genre: '',
        Images: []
    });

    useEffect( () =>{
        console.log(newManga);
    })

    const upload = async () =>{
        
    }
    return (
        <View style={globalStyles.container}>
            {/* <Modal visible={modalOpen} animationType={'fade'}>
                <MaterialCommunityIcons name="close"
                    color={'red'} size={26}
                    onPress={() => setModalOpen(!modalOpen)}
                />
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
                <Pressable style={({pressed}) => globalStyles.button(pressed)} onPress={upload}>
                    <Text style={globalStyles.subtitles}>
                        Imagenes
                    </Text>
                </Pressable>
            </Modal>

            <MaterialCommunityIcons name="book-open-variant"
                color={'lightgray'} size={26}
                onPress={() => setModalOpen(!modalOpen)}
            /> */}
            <Text style={globalStyles.title}>
            This is the dashboard page
            </Text>
        </View>
    )
}