import React from "react";
import { Text, View } from 'react-native';
import {globalStyles} from '../styles/global'

import Header from '../shared/header'
import List from '../shared/list'

export default function Dashboard({navigation}){
    
    return (
        <View style={globalStyles.container}>
            <Header title={'DashBoard'} icon={'plus-circle-outline'} onClick={ () => navigation.navigate('Upload')} />
            <List navigation={navigation} Search={false}/>
        </View>
    )
}