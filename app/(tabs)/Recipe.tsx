import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Link, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import {db} from '../firebase'
import { getDocs, collection } from 'firebase/firestore';

const Recipe = () => {
  
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const querySnapshot = await getDocs(collection(db, 'recipes'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  const images = {
    "img_must1.png": require('@/assets/images/img_must1.png'),
    "img_must2.png": require('@/assets/images/img_must2.png'),
    "img_must3.png": require('@/assets/images/img_must3.png'),
    "img_popular1.png": require('@/assets/images/img_popular1.png'),
    "img_popular2.png": require('@/assets/images/img_popular2.png'),
    "img_popular3.png": require('@/assets/images/img_popular3.png'),
  };
  
  const router = useRouter()
  return (
    <View style={styles.content}>
      {/* Bagian Atas */}
      <View style={styles.containerAtas}>
        <Text style={styles.textRecipe}>Recipe</Text>
        <View style={styles.kolomSearch}>
        <SimpleLineIcons name="magnifier" size={24} color="black" style = {styles.img_loop}/>
          <Text style={styles.textSearch}>Search</Text>
        </View>
      </View>

      {/* Start Horizontal Scroll  Rekomendasi Resep */}
      <Text style = {styles.text_popular}>Popular Recipes</Text>
      <ScrollView contentContainerStyle={styles.horizontalScrollContainer} horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <Link href='/(recipe)/detailRecipe'>
        <TouchableOpacity style= {styles.recipeImagePlaceholder}>
        <Image source={require('@/assets/images/img_popular1.png')} style={styles.img_popular}/>
        <Text style= {styles.text_popular1}>Nasi goreng</Text>
        </TouchableOpacity>
        </Link>
        {/* <TouchableOpacity 
            style={styles.recipeImagePlaceholder} 
            onPress={() => router.push('/(recipe)/detailRecipe')}>
            <Image source={require('@/assets/images/img_popular1.png')} style={styles.img_popular} />
            <Text style={styles.text_popular1}>Fried Rice</Text>
        </TouchableOpacity> */}
        <Link href='/(recipe)/detailRecipe1'>
        <TouchableOpacity style= {styles.recipeImagePlaceholder}>
        <Image source={require('@/assets/images/img_popular2.png')} style={styles.img_popular}/>
        <Text style= {styles.text_popular1}>Hamburger</Text>
        </TouchableOpacity>
        </Link>
        <Link href='/(recipe)/detailRecipe2' style={styles.recipeImagePlaceholder}>
        <TouchableOpacity>
        <Image source={require('@/assets/images/img_popular3.png')} style={styles.img_popular} />
        <Text style={styles.text_popular1}>Pancakes</Text>
        </TouchableOpacity>
        </Link>
      {/* End horizontal Scroll */}
      </ScrollView>

      {/* Start Vertikal Scroll Must try */}
      <Text style= {styles.text_must}>Must Try Recipe</Text>
      <ScrollView contentContainerStyle={styles.verticalScrollContainer}>
      {recipes.map((recipe) => (
      recipe.link ? (
        <Link key={recipe.id} href={recipe.link}>
          <TouchableOpacity style={styles.recipeItem}>
            <Image source={images[recipe.image]} style={styles.img_must}/>
            <Text style={styles.text_nama}>{recipe.name}</Text>
            <Text style={styles.text_desk}>Kategori: {recipe.category}</Text>
            <Text style={styles.text_desk}>Durasi: {recipe.duration}</Text>
            <Text style={styles.text_desk}>Status: {recipe.status}</Text>
          </TouchableOpacity>
        </Link>
      ) : null 
    ))}

    </ScrollView>
    {/* Frontend rispek :) */}
      {/* <ScrollView contentContainerStyle={styles.verticalScrollContainer}>
        <Link href='/(recipe)/detailRecipe3'>
        <TouchableOpacity style={styles.recipeItem}>
          <Image source={require('@/assets/images/img_must1.png')} style = {styles.img_must}/>
          <Text style={styles.text_nama}>Scrambled Egg</Text>
          <Text style={styles.text_desk}>Kategori : Makanan</Text>
          <Text style={styles.text_desk}>Durasi : 10 Menit</Text>
          <Text style={styles.text_desk}>Status : Belum dimasak</Text> 
        </TouchableOpacity>
        </Link>
        <Link href='/(recipe)/detailRecipe4'>
        <TouchableOpacity style={styles.recipeItem}>
          <Image source={require('@/assets/images/img_must2.png')} style = {styles.img_must}/>
          <Text style={styles.text_nama}>Fruit Smoothie</Text>
          <Text style={styles.text_desk}>Kategori : Minuman</Text>
          <Text style={styles.text_desk}>Durasi : 15 Menit</Text>
          <Text style={styles.text_desk}>Status : Sudah dimasak</Text> 
        </TouchableOpacity>
        </Link>
        <Link href='/(recipe)/detailRecipe5'>
        <TouchableOpacity style={styles.recipeItem}>
          <Image source={require('@/assets/images/img_must3.png')} style = {styles.img_must}/>
          <Text style={styles.text_nama}>CapCay</Text>
          <Text style={styles.text_desk}>Kategori : Makanan</Text>
          <Text style={styles.text_desk}>Durasi : 20 Menit</Text>
          <Text style={styles.text_desk}>Status : Belum dimasak</Text> 
        </TouchableOpacity>
        </Link>
        <Link href='/detailRecipe'>
        <TouchableOpacity style={styles.recipeItem}>
          <Image source={require('@/assets/images/img_popular1.png')} style = {styles.img_must}/>
          <Text style={styles.text_nama}>Nasi goreng</Text>
          <Text style={styles.text_desk}>Kategori : Makanan</Text>
          <Text style={styles.text_desk}>Durasi : 10 Menit</Text>
          <Text style={styles.text_desk}>Status : Sudah dimasak</Text> 
        </TouchableOpacity>
        </Link>
        <Link href='/(recipe)/detailRecipe1'>
        <TouchableOpacity style={styles.recipeItem}>
          <Image source={require('@/assets/images/img_popular2.png')} style = {styles.img_must}/>
          <Text style={styles.text_nama}>Hamburger</Text>
          <Text style={styles.text_desk}>Kategori : Makanan</Text>
          <Text style={styles.text_desk}>Durasi : 15 Menit</Text>
          <Text style={styles.text_desk}>Status : Sudah dimasak</Text> 
        </TouchableOpacity>
        </Link>
        <Link href='/(recipe)/detailRecipe2'>
        <TouchableOpacity style={styles.recipeItem}>
          <Image source={require('@/assets/images/img_popular3.png')} style = {styles.img_must}/>
          <Text style={styles.text_nama}>Pancakes</Text>
          <Text style={styles.text_desk}>Kategori : Makan</Text>
          <Text style={styles.text_desk}>Durasi : 15 Menit</Text>
          <Text style={styles.text_desk}>Status : Sudah dimasak</Text> 
        </TouchableOpacity>
        </Link>
      </ScrollView> */}
      {/* End vertical scroll must try */}
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  // Bagian Atas
  containerAtas: {
    padding: 20,
  },

  textRecipe: {
    top:'30%',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },

  // START SEARCH

  kolomSearch: {
    display:'flex',
    top:'10%',
    width: '80%',
    height: 50,
    backgroundColor: '#efefef',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    opacity:0.8,
    flexDirection:'row',
  },

  img_loop:{
    position:'absolute',
    left:'10%',
  },

  textSearch: {
    color: '#000',
    fontSize: 16,
    textAlign:'center',
  },

  // END SEARCH

  // START Horizontal Scroll
  text_popular:{
    fontSize:22,
    marginLeft:'5%',
    marginTop:'5%',
    fontWeight:'bold',
  },

  horizontalScrollContainer: {
    paddingHorizontal: 10,
    paddingBottom:90,
  },

  horizontalScroll: {
    marginVertical: 20,
  },

  img_popular:{
    width: 130,
    height: 100,
    resizeMode:'contain',
    borderRadius:20,
  },

  text_popular1:{
    fontSize:20,
    fontWeight:'500',
  },

  recipeImagePlaceholder: {
    width: 150,
    height: 140,
    backgroundColor: '#FF4545',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems:'center',
    marginBottom:'15%',
  },

  container_pop3:{

  },

  // END Horizontal Scroll

  // START Vertikal Scroll
  text_must:{    
    fontSize:22,
    marginLeft:'5%',
    fontWeight:'bold',
  },

  img_must:{
    left:'5%',
    width:150,
    height:140,
    borderRadius:30,
    resizeMode:'contain',
  },

  text_nama:{
    left:'52%',
    bottom:'90%',
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },
  text_desk:{
    left:'55%',
    bottom:'85%',
    fontSize: 14,
    color: '#333',
  },

  verticalScrollContainer: {
    padding: 20,
  },

  recipeItem: {
    width:350,
    height:140,
    backgroundColor: '#ffbf00',
    borderRadius: 10,
    marginVertical: 10,
  },

  // END VERTIKAL SCROLL
});
