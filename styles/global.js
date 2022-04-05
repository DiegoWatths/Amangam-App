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
        backgroundColor: "#cccccc",
        borderRadius: 10
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
        borderRadius: 120
     },
     button: (pressed) => {
      const bgColor = pressed? "#ff9900" : "#b36b00";
      const op = pressed? 0.8 : 1;

      return {
        alignItems: "center",
        backgroundColor: bgColor,
        opacity: op,
        padding: 10,
        width: 150,
        marginTop: 10,
        borderRadius: 20
      }
    }
})