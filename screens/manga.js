import React, {useEffect, useState} from "react";
import { Text, View, Modal, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';

import Header from '../shared/header'

import {globalStyles} from '../styles/global'
import {profileStyles} from '../styles/profileStyle'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Manga({route}){
    const [modalOpen, setModalOpen] = useState(false)
    const [manga, setManga] = useState(route.params.manga)
    const [data, setData] = useState([])
    const [isHorizontal, setIsHorizontal] = useState(true)
    const [isInverted, setIsInverted] = useState(false)
    const [indexCover, setIndexCover] = useState(manga.mangaImages.length - 1)

    var images = [];
    var key = 1;

    useEffect( () =>{
        manga.mangaImages.forEach(element => {
            images.push({
                key: key,
                uri: element
            })
            key++;
        });
        
        console.log(manga);
        console.log(indexCover);
        console.log(images);

        setData(images)
    }, [])

    const getItemLayout = (data, index) => (
        { length: 600, offset: 600 * index, index }
      )    

    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Header title={manga.title} icon={'book-open-variant'} onClick={ () => setModalOpen(true)} />

                <View style={{backgroundColor: '#012d2d'}}>
                    <Modal visible={modalOpen} animationType={'fade'}>
                        <MaterialCommunityIcons name="close"
                            color={'red'} size={26}
                            onPress={() => setModalOpen(false)}
                        />
                        <View>
                            <FlatList 
                            horizontal={isHorizontal}
                            data={data}
                            getItemLayout={getItemLayout}
                            inverted={isInverted}
                            initialScrollIndex={indexCover}
                            renderItem={({ item }) => <Image style={{width: 600, height: 800 }} source={{ uri: item.uri}} />}
                            />
                        </View>
                    </Modal>
                </View>
                <Avatar
                    size={350}
                    source={{
                        uri:
                        manga.mangaImages[indexCover],
                    }}
                    >
                </Avatar>

                <View style={profileStyles.box}>
                    <Text style={globalStyles.subtitles}>
                    {`Producido por: ${manga.author}`}
                    </Text>
                </View>
                <View style={profileStyles.box}>
                    <Text style={profileStyles.text}>
                        {manga.description}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}