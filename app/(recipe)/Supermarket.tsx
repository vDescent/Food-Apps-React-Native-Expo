import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, Linking, Alert } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Supermarket = () => {
  const [supermarkets, setSupermarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupermarkets = async () => {
      try {
        console.log("Fetching data from Firestore...");
        const querySnapshot = await getDocs(collection(db, 'supermarket'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          latitude: parseFloat(doc.data().latitude),
          longitude: parseFloat(doc.data().longitude),
        }));
        setSupermarkets(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching supermarkets:', error);
      }
    };

    fetchSupermarkets();
  }, []);

  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(() => {
      Alert.alert('Error', 'Tidak dapat memanggil.');
    });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFBF00" />
        <Text>Loading Map...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.966667,
          longitude: 110.416664,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {supermarkets.map((market) => (
          <Marker
            key={market.id}
            coordinate={{
              latitude: market.latitude,
              longitude: market.longitude,
            }}
          >
            <Callout tooltip>
              <View style={styles.calloutContainer}>
                <Text style={styles.marketName}>Nama: {market.name}</Text>
                <Text style={styles.calloutText}>Alamat: {market.alamat}</Text>

                {market.no && (
                  <TouchableOpacity onPress={() => handleCall(market.no)}>
                    <Text style={styles.phoneText}>📞 {market.no}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Supermarket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marketName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  calloutText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  phoneText: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 6,
    textDecorationLine: 'underline',
  },
  calloutContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    elevation: 5,
  },
});
