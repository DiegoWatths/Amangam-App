import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
          fontWeight: 'bold',
          fontSize: 30
      },
      subtitles: {
          fontSize: 20
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
        backgroundColor: "#DDDDDD",
        padding: 10
      }
})