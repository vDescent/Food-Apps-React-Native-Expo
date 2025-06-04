import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const index = () => {
  return (
    <View style={styles.container_utama}>
      <Image source={require('@/assets/images/img_isCooked.png')} style={styles.img_isCooked} />
      <Text style={styles.text_isCooked}>IsCooked</Text>
      <Link href="/(auth)/login" asChild>
        <TouchableOpacity style={styles.btn_login}>
          <Text style={styles.text_letsCook}>Lets Cook</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container_utama: {
    flex: 1,
    backgroundColor: '#FFBF00',
    alignItems: 'center',   
    justifyContent: 'center', 
  },
  img_isCooked: {
    marginBottom: 30, 
  },
  text_isCooked: {
    marginBottom: 20,
    textAlign: 'center',
  },
  btn_login: {
    position: 'absolute',
    bottom: 40,         
    left: '15%',      
    right: '15%',     
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  text_letsCook: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default index;
