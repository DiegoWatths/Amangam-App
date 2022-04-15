import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {SERVER_URI} from '@env'

import {globalStyles} from '../styles/global'

export default function List({navigation, Search}){
    const [mangas, setMangas] = useState({});
    const [filteredMangas, setFilteredMangas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( async () => {
        await fetch(`${SERVER_URI}/allMangas`)
        .then(response => response.json())
        .then(data => {
            setFilteredMangas(data)
            setMangas(data)
        })
        .catch(err => console.log(err.message))
    }, [])

    const searchFilterFunction = (text) => {
        if (text) {
          const newData = mangas.filter(function (item) {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
          });

          setFilteredMangas(newData);
          setSearch(text);
        } else {
          setFilteredMangas(mangas);
          setSearch(text);
        }
      };
    
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
                    console.log(`Manga seleccionado: ${item.title}`);
                    navigation.navigate('Manga', {
                        manga: item,
                    })
                }}
            />
        );
    }

    const SearchList = () => {
        if(Search){
            return (
                <View style={globalStyles.container}>
                    <FlatList 
                        data={filteredMangas}
                        initialScrollIndex={0}
                        keyExtractor={(item) => item._id}
                        renderItem={renderItem}
                        ListHeaderComponent={
                            <SearchBar 
                            round
                            searchIcon={{ size: 24 }}
                            onChangeText={(text) => {
                                setSearch(text)
                                searchFilterFunction(text)
                            }}
                            onClear={(text) => searchFilterFunction('')}
                            placeholder="Type Here..."
                            value={search}
                            inputContainerStyle={{width: 300}} 
                            />
                        }
                    />
                </View>
            )

        }else{
            return (
                <FlatList 
                data={filteredMangas}
                initialScrollIndex={0}
                keyExtractor={(item) => item._id}
                renderItem={renderItem}
            />
            )
        }
    }

    return (
        <View style={globalStyles.container}>
            <SearchList  />
        </View>
    )
}