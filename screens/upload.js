import React, {useMemo} from "react";
import { Text, View } from 'react-native';
import {globalStyles} from '../styles/global'
import { AssetsSelector } from 'expo-images-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MediaType} from 'expo-media-library';

export default function Upload(){

    const widgetSettings = useMemo(
        () => ({
            getImageMetaData: false,
            initialLoad: 100,
            assetsType: [MediaType.photo, MediaType.video],
            minSelection: 1,
            maxSelection: 25,
            portraitCols: 4,
            landscapeCols: 4,
        }),
        []
    )

    const widgetErrors = useMemo(
        () => ({
            errorTextColor: 'red',
            errorMessages: {
                hasErrorWithPermissions: 'Mira coñoemadre si vos no me dais permiso yo no puedo agarrar ninguna imagen',
                hasErrorWithLoading: 'Error en la carga broski',
                hasErrorWithResizing: 'Esa verga no se puede cambiar pibe',
                hasNoAssets: 'Papi no tenéis nada...',
            },
            // errorMessages: {
            //     hasErrorWithPermissions: translator(
            //         T.ERROR.HAS_PERMISSIONS_ERROR
            //     ),
            //     hasErrorWithLoading: translator(T.ERROR.HAS_INTERNAL_ERROR),
            //     hasErrorWithResizing: translator(T.ERROR.HAS_INTERNAL_ERROR),
            //     hasNoAssets: translator(T.ERROR.HAS_NO_ASSETS),
            // },
        }),
        []
    )

    const widgetStyles = useMemo(
        () => ({
            margin: 2,
            bgColor: 'gray',
            spinnerColor: 'blue',
            widgetWidth: 99,
            screenStyle:{
                borderRadius: 5,
                overflow: "hidden",
            },
            widgetStyle:{
                margin: 10
            },
            videoIcon: {
                Component: MaterialCommunityIcons,
                iconName: 'close',
                color: '#424242',
                size: 20,
            },
            selectedIcon: {
                Component: MaterialCommunityIcons,
                iconName: 'close',
                color: 'black',
                bg: '#cccccc',
                size: 26,
            },
        }),
        ['#424242', 'yellow']
    )
    

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
            Crea Capitulos y Sube Sus Paginas
            </Text>
            <AssetsSelector
                Settings={widgetSettings}
                Errors={widgetErrors}
                Styles={widgetStyles}
            />
        </View>
    )
}