import React, {useEffect, useState} from "react";
import { Text, View, Modal, FlatList, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../shared/header'

import {globalStyles} from '../styles/global'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Manga({route}){
    const [modalOpen, setModalOpen] = useState(false)
    const [manga, setManga] = useState({})
    const [data, setData] = useState([])
    const [isHorizontal, setIsHorizontal] = useState(true)
    const [isInverted, setIsInverted] = useState(false)

    var images = [];
    var key = 1;

    useEffect( async () =>{
        await fetch(`https://amangam-server.herokuapp.com/manga/${route.params.title}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setManga(data)
        })
        .catch(err => console.log(err.message))

        console.log(manga);

        manga.mangaImages.forEach(element => {
            images.push({
                key: key,
                uri: element
            })
            key++;
        });

        console.log(images);

        setData(images)
    }, [])

    return (
        <View style={globalStyles.container}>
            <Header title={manga.title} icon={'book-open-variant'} onClick={ () => setModalOpen(true)} />

            <Modal visible={modalOpen} animationType={'fade'} style={{backgroundColor: '#012d2d'}}>
                <MaterialCommunityIcons name="close"
                    color={'red'} size={26}
                    onPress={() => setModalOpen(false)}
                />
                <View>
                    <FlatList 
                    horizontal={isHorizontal}
                    data={data}
                    inverted={isInverted}
                    initialScrollIndex={0}
                    renderItem={({ item }) => <Image style={{width: width, height: height}} source={{ uri: item.uri}} />}
                    />
                </View>
            </Modal>

            <Text style={globalStyles.title}>
            Manga info and images
            </Text>
            
        </View>
    )
}