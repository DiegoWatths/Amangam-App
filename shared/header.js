import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({ title, icon ,onClick }) {

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <MaterialCommunityIcons name={icon} color={'#b36b00'} size={28} onPress={onClick} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#011919',
    display: 'flex',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    right: 16
  }
});