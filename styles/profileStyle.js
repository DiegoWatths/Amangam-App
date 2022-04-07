import { StyleSheet } from 'react-native'

export const profileStyles = StyleSheet.create({
    container:{
        backgroundColor: "#024b4b",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        width: 300,
    },
    box:{
        backgroundColor: "#999999",
        padding: 8,
        marginTop: 15,
        marginBottom: 2,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
    },
    button: (pressed) => {
        const bgColor = pressed? "#ff9900" : "#b36b00";
        const op = pressed? 0.8 : 1;
  
        return {
          alignItems: "center",
          alignSelf: "flex-start",
          backgroundColor: bgColor,
          opacity: op,
          padding: 10,
          width: "60%",
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 20
        }
      }
})