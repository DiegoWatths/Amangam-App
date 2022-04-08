import React, {useState} from "react";
import { Text, View, Modal, FlatList, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {globalStyles} from '../styles/global'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Placeholder
const imagenes = [
    {
        key: 1,
        uri: 'https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg'
    },
    {
        key: 2,
        uri: 'https://www.thesprucepets.com/thmb/RqWIkgHfnnr9kvRxx3illPbwPJg=/3257x2443/smart/filters:no_upscale()/four-days-old-puppy-95882865-5c758c2cc9e77c00012f80ce.jpg'
    },
    {
        key: 3,
        uri: 'https://i.ytimg.com/vi/mRf3-JkwqfU/mqdefault.jpg'
    },
    {
        key: 4,
        uri: 'https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance'
    },
    {
        key: 5,
        uri: 'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1024/landscape-1511194376-cavachon-puppy-christmas.jpg?resize=1200:*'
    },
] 

export default function Manga(){
    const [modalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState(imagenes)
    const [isHorizontal, setIsHorizontal] = useState(true)
    const [isInverted, setIsInverted] = useState(false)

    const getItemLayout = (index) => (
        {length: height, offset: height * index , index}
      );
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType={'fade'}>
                <MaterialCommunityIcons name="close"
                    color={'red'} size={26}
                    onPress={() => setModalOpen(!modalOpen)}
                />
                <View>
                    <FlatList 
                    horizontal={isHorizontal}
                    data={data}
                    inverted={isInverted}
                    initialScrollIndex={0}
                    renderItem={({ item }) => <Image style={{width: width, height: height}} source={{ uri: item.uri}} />}
                    getItemLayout={getItemLayout}
                    />
                </View>
            </Modal>

            <MaterialCommunityIcons name="book-open-variant"
                color={'lightgray'} size={26}
                onPress={() => setModalOpen(!modalOpen)}
            />
            <Text style={globalStyles.title}>
            Manga info and images
            </Text>
        </View>
    )
}