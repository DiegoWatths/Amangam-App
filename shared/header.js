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
    height: 135,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#011919',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    letterSpacing: 1,
  },
  icon: {
    top: 100,
    position: 'absolute',
    right: 12
  }
});