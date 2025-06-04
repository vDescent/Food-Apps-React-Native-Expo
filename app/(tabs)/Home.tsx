import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1)); // Opacity awal 1

  return (
    // CONTAINER UTAMA
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* BAGIAN ATAS */}
        <View style={styles.contentContainer}>
          <View style={styles.containerTextLogout}>

          <Text style={styles.textHiUser}>
            Hi, <Text style={styles.textNamaUser}>Tim!</Text>
          </Text>
          <SimpleLineIcons name="logout" size={24} color="black" style={styles.logOut} />
          </View>
          <Text style={styles.textWhatCook}>Apa yang ingin kamu masak hari ini?</Text>

          {/* Start Bagian search */}
          <Link href="/(tabs)/Recipe" asChild>
            <TouchableOpacity style={styles.btnSearch}>
              <Entypo name="magnifying-glass" size={20} color="white" style={styles.iconLoop} />
              <Text style={styles.textSearch}>Search now...</Text>
            </TouchableOpacity>
          </Link>
          {/* End bagian search */}

          {/* Supermarket */}
          <Link href='/(recipe)/Supermarket' asChild>
          <TouchableOpacity style={styles.btnSupermarket}>
            <Entypo name="shop" size={20} color="white" style={styles.iconLoop} />
            <Text style={styles.textSupermarket}>Lihat Supermarket Terdekat</Text>
          </TouchableOpacity>
          </Link>

          {/* Start Bagian just for you */}
          <Text style={styles.textJust}>Just For You</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll1}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <Image source={require('@/assets/images/img_scroll1.png')} style={styles.imgScrollItem} />
            <Image source={require('@/assets/images/img_scroll2.png')} style={styles.imgScrollItem} />
            <Image source={require('@/assets/images/img_scroll3.png')} style={styles.imgScrollItem} />
          </ScrollView>
          {/* End bagian just for you */}

          {/* Start trending recipes */}
          <Text style={styles.textTrend}>Trending Recipes</Text>
          <Image source={require('@/assets/images/img_trend1.png')} style={styles.imgTrend} />
          <Image source={require('@/assets/images/img_trend2.png')} style={styles.imgTrend} />
          <Image source={require('@/assets/images/img_trend3.png')} style={styles.imgTrend} />
          {/* End trending recipes */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    zIndex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  
  // TEXT SECTION
  textHiUser: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  textNamaUser: {
    color: '#FFBF00',
  },
  textWhatCook: {
    color: 'black',
    fontSize: 16,
    marginTop: 18,
  },
  textJust: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 90,
  },
  
  // BUTTON SECTION
  btnSearch: {
    backgroundColor: '#FFBF00',
    borderRadius: 10,
    paddingVertical: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
    marginTop: 20,  
  },

  textSearch: {
    color: 'black',
    fontSize: 16,
    marginLeft: 8,
  },
  iconLoop: {
    marginLeft: 10,
  },

  // SCROLL SECTION
  horizontalScroll1: {
    borderRadius: 10,
    marginTop: 20,
    paddingRight: 10,
  },
  imgScrollItem: {
    borderRadius: 10,
    marginRight: 10,
  },

  // TRENDING SECTION
  textTrend: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginTop:20,
    marginBottom: 20,
    marginLeft: 15,
  },
  imgTrend: {
    height: 206,
    width: 350,
    borderRadius: 10,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  containerTextLogout:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  logOut:{
    marginTop:20,
    marginRight:20,
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
