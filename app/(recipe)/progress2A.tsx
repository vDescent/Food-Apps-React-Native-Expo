import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Progress2A = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Progress 2A</Text>
    </View>
  );
}

export default Progress2A;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
