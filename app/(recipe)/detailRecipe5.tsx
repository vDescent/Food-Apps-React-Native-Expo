import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 
import { Entypo } from '@expo/vector-icons';

const detailRecipe5 = () => {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        // Query untuk nama yang sama
        const recipeQuery = query(
          collection(db, 'detailrecipes'), 
          where('nama', '==', 'CapCay')
        );

        const querySnapshot = await getDocs(recipeQuery);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (data.length > 0) {
          setRecipeData(data[0]); 
        }
      } catch (error) {
        console.error('Error fetching recipe data: ', error);
      }
    };

    fetchRecipeData();
  }, []);

  // Loading page
  if (!recipeData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Bagian Gambar */}
        <Image 
          source={require('@/assets/images/img_must3.png')} 
          style={styles.img_popular1} 
        />
        
        {/* Bagian Nama */}
        <Text style={styles.text_nama}>{recipeData.nama || 'Resep tidak ada di database.'}</Text>
        
        {/* Bagian Deskripsi */}
        <Text style={styles.text_desk}>Deskripsi</Text>
        <Text style={styles.text_isiDesk}>
          {recipeData.desk || 'Deskripsi tidak ada di database.'}
        </Text>
        
        {/* Bagian Bahan */}
        <Text style={styles.text_bahan}>Bahan</Text>
        {recipeData.bahan && recipeData.bahan.length > 0 ? (
          recipeData.bahan.map((item, index) => (
            <Text key={index} style={styles.text_isiBahan}>
              {index + 1}. {item}
            </Text>
          ))
        ) : (
          <Text style={styles.text_isiBahan}>Bahan tidak tersedia.</Text>
        )}

        {/* Bagian Tombol */}
        <Link href="/(progress)/progress6a" style={styles.button} asChild>
          <Text style={styles.buttonText}>Masak Sekarang :)</Text>
        </Link>
        <Link href='/(recipe)/Supermarket' asChild>
          <TouchableOpacity style={styles.btnSupermarket}>
            <Entypo name="shop" size={20} color="white" style={styles.iconLoop} />
            <Text style={styles.textSupermarket}>Lihat Supermarket Terdekat</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </View>
  );
};

export default detailRecipe5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#aaa',
    marginTop: 50,
  },
  img_popular1: {
    width: '100%', 
    height: 300, 
    resizeMode: 'cover', 
    margin: 0, 
  },
  text_nama: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10, 
    padding: 20,
  },
  text_desk: {
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 20,
  },
  text_isiDesk: {
    marginLeft: 20,
    marginTop: 10,
    textAlign: 'justify',
    marginHorizontal: 25,
    lineHeight: 22,
  },
  text_bahan: {
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  text_isiBahan: {
    marginLeft: 20,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FFBF00', 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginTop: 20, 
    marginHorizontal: 20, 
  },
  buttonText: {
    color: '#fff', 
    fontWeight: '600', 
    fontSize: 16, 
    textAlign: 'center',
  },
  scrollViewContent: {
    padding: 0, 
  },
  btnSupermarket: {
    marginTop: 15,  
    backgroundColor: '#FC6B03',
    borderRadius: 10,
    paddingVertical: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
  },
  
  textSupermarket: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },  
});
