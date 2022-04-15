import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image, Pressable, TextInput } from 'react-native';
import {SERVER_URI} from '@env'

import {globalStyles} from '../styles/global'
import { Button, Avatar } from "react-native-elements";

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
        <Pressable onPress={onPress} style={({pressed}) => {
            const bgColor = pressed? "#022c2c" : "#011919";
            const op = pressed? .8 : 1;

            return {
                backgroundColor: bgColor,
                opacity: op,
            }
        }}>
            <View style={{flexDirection: 'row', padding: 5, borderBottomWidth: 1, borderBottomColor: 'white', alignItems: 'center'}}>
                <Avatar
                    size={100}
                    source={{
                        uri:
                        item.mangaImages[item.mangaImages.length - 1],
                    }}
                />
                <View style={{width: 300, height: 140, justifyContent: 'space-evenly', marginLeft: 5}}>
                    <Text style={globalStyles.subtitles}>{item.title} </Text>
                    <Text style={[globalStyles.subtitles, {fontSize: 15, color: '#ccc'}]}> De {item.author}</Text>
                </View>            
            </View>
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
                    <View style={{flexDirection: 'row'}}>
                        <TextInput 
                            selectionColor={"#b36b00"} 
                            style={globalStyles.input}
                            onChangeText={setSearch}
                            placeholder="Type Here..."
                            value={search}
                        />
                        <View style={{paddingTop: 15}}>
                            <Button
                                title={'Buscar'}
                                onPress={() => console.log(search)}
                                buttonStyle={{backgroundColor: '#b36b00', borderRadius: 20,}}
                            />
                        </View>
                    </View>
                    <FlatList 
                        data={filteredMangas}
                        initialScrollIndex={0}
                        keyExtractor={(item) => item._id}
                        renderItem={renderItem}
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