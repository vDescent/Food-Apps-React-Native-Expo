import { StyleSheet, Text, View, ImageBackground, PanResponder } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 

const Progress5d = () => {
  const router = useRouter();
  const [stepText, setStepText] = useState(''); // simpan nilai field
  // gesture
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 5;
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -50) {
          router.push('/(progress)/progress5e' as any);
        } else if (gestureState.dx > 50) {
          router.back();
        }
      },
    })
  ).current;

  // Fetch data from Firebase
  useEffect(() => {
    const fetchStep1 = async () => {
      try {
        const langkahRef = collection(db, 'langkah');
        const q = query(langkahRef, where('compare', '==', 'fruit'));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0]; 
          setStepText(doc.data().step4 || 'data tidak ada di database.');
        } else {
          setStepText('error tidak ada field di firebase.');
        }
      } catch (error) {
        console.error('Error fetch data dari firebase:', error);
        setStepText('Terjadi error saat ambil data.');
      }
    };

    fetchStep1();
  }, []);

  return (
    <ImageBackground
      source={require('@/assets/images/img_progress5.jpg')}
      style={styles.container}
      resizeMode="cover"
      {...panResponder.panHandlers}
    >
      <Text style={styles.text_spasi}> </Text>
      <View style={styles.instruksi} {...panResponder.panHandlers}>
        <Text style={styles.text_progress}>Langkah 4</Text>
        <Text style={styles.text_instruksi}>{stepText}</Text>
        {/* Progress bar */}
        <View style={styles.container_progress}>
          <View style={styles.progress_Bar} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Progress5d;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_spasi: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  instruksi: {
    position: 'absolute',
    bottom: '10%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 191, 0, 0.7)',
    padding: 50,
    borderRadius: 10,
  },
  text_progress: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  text_instruksi: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  container_progress: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 20,
  },
  progress_Bar: {
    width: '56%', 
    height: '100%',
    backgroundColor: 'rgba(148, 252, 3, 0.7)',
  },
});
