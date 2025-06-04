import { StyleSheet, Text, View, ImageBackground, PanResponder } from 'react-native';
import React, { useRef } from 'react';
import { useRouter } from 'expo-router';

const Progress = () => {
  const router = useRouter();
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Mengatur jika gerakan horizontal cukup 
        return Math.abs(gestureState.dx) > 20; // Threshold geser
      },
      onPanResponderRelease: (evt, gestureState) => {
        // gesture next menggeser kanan ke kiri
        if (gestureState.dx < -100) { // geser ke kiri lebih dari 100
          console.log('Navigating to progress2A');
          router.push('/(recipe)\progress2A'); 
        }
      },
    })
  ).current;

  return (
    <ImageBackground 
      source={require('@/assets/images/img_progress1.jpg')} 
      style={styles.container} 
      resizeMode="cover" 
      {...panResponder.panHandlers} // panHandlers ke ImageBackground
    >
      <Text style={styles.text}>Progres</Text>
    </ImageBackground>
  );
}

export default Progress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
