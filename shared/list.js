import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import {globalStyles} from '../styles/global'

export default function List({navigation}){
    const [mangas, setMangas] = useState({});

    useEffect( async () => {
        await fetch('https://amangam-server.herokuapp.com/allMangas')
        .then(response => response.json())
        .then(data => setMangas(data))
        .catch(err => console.log(err.message))

        console.log(mangas);
    }, [])

    const Item = ({item, onPress}) => (
        <Pressable onPress={onPress} style={ (pressed) => globalStyles.button(pressed)}>
            <Image source={{ uri: item.mangaImages[0]}}/>
            <Text style={globalStyles.subtitles}>{item.title}</Text>
            <Text style={globalStyles.subtitles}>{item.author}</Text>
        </Pressable>
    );

    const renderItem = ({item}) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    console.log(item.title);
                    navigation.navigate('Manga', {
                        title: item.title,
                    })
                }}
            />
        );
    }

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={mangas}
                initialScrollIndex={0}
                keyExtractor={(item) => item._id}
                renderItem={renderItem}
            />
        </View>
    )
}