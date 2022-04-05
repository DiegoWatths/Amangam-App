import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#012d2d',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: "#b36b00"
      },
      subtitles: {
        fontSize: 20,
        color: "#fff"
      },
      input: {
        borderWidth: 2,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
      },
      button: {
        alignItems: "center",
        backgroundColor: "#b36b00",
        padding: 10,
        width: 150,
        marginTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
     bottom: {
        fontSize: 20,
        marginTop: 10,
        color: "#66b3ff",
        textDecorationLine: "underline"
     },
     imagen: {
        width: 250,
        height: 250,
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
     }
})