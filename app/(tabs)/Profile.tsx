import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll_Container}>
        <View style={styles.content_Container}>
          {/* Hi user */}
          <Text style={styles.text_HiUser}>
            Hi, <Text style={styles.text_NamaUser}>Tim!</Text>
          </Text>

          {/* Bagian makanan favorit user */}
          <Text style={styles.text_Must}>Your Favorites</Text>

          <ScrollView contentContainerStyle={styles.verticalScroll_Container}>
          
            <Link href='/(recipe)/detailRecipe4' asChild>
              <TouchableOpacity style={styles.recipe_Item}>
                <Image source={require('@/assets/images/img_must2.png')} style={styles.img_Must} />
                <View style={styles.text_Container}>
                  <Text style={styles.text_Nama}>Fruit Smoothie</Text>
                  <Text style={styles.text_Desk}>Kategori : Minuman</Text>
                  <Text style={styles.text_Desk}>Durasi : 15 Menit</Text>
                  <Text style={styles.text_Desk}>Status : Sudah dimasak</Text>
                </View>
              </TouchableOpacity>
            </Link>

            <Link href='/detailRecipe' asChild>
              <TouchableOpacity style={styles.recipe_Item}>
                <Image source={require('@/assets/images/img_popular1.png')} style={styles.img_Must} />
                <View style={styles.text_Container}>
                  <Text style={styles.text_Nama}>Nasi Goreng</Text>
                  <Text style={styles.text_Desk}>Kategori : Makanan</Text>
                  <Text style={styles.text_Desk}>Durasi : 10 Menit</Text>
                  <Text style={styles.text_Desk}>Status : Sudah dimasak</Text>
                </View>
              </TouchableOpacity>
            </Link>

            <Link href='/(recipe)/detailRecipe1' asChild>
              <TouchableOpacity style={styles.recipe_Item}>
                <Image source={require('@/assets/images/img_popular2.png')} style={styles.img_Must} />
                <View style={styles.text_Container}>
                  <Text style={styles.text_Nama}>Hamburger</Text>
                  <Text style={styles.text_Desk}>Kategori : Makanan</Text>
                  <Text style={styles.text_Desk}>Durasi : 15 Menit</Text>
                  <Text style={styles.text_Desk}>Status : Sudah dimasak</Text>
                </View>
              </TouchableOpacity>
            </Link>

            <Link href='/(recipe)/detailRecipe2' asChild>
              <TouchableOpacity style={styles.recipe_Item}>
                <Image source={require('@/assets/images/img_popular3.png')} style={styles.img_Must} />
                <View style={styles.text_Container}>
                  <Text style={styles.text_Nama}>Pancakes</Text>
                  <Text style={styles.text_Desk}>Kategori : Makanan</Text>
                  <Text style={styles.text_Desk}>Durasi : 15 Menit</Text>
                  <Text style={styles.text_Desk}>Status : Sudah dimasak</Text>
                </View>
              </TouchableOpacity>
            </Link>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  // Container
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content_Container: {
    padding: 20,
  },
  scroll_Container: {
    flexGrow: 1,
  },
  // hi user
  text_HiUser: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text_NamaUser: {
    color: '#FFBF00',
  },
  // text most
  text_Must: {    
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  verticalScroll_Container: {
    paddingBottom: 20,
  },
  // container dari favorit
  recipe_Item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffbf00',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  img_Must: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  text_Container: {
    marginLeft: 20,
    flex: 1,
  },
  text_Nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  text_Desk: {
    fontSize: 14,
    color: '#333',
  },
});
