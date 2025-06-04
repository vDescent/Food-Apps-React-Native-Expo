import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';

// const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);
  const router = useRouter();  

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.replace('/(tabs)/Home');  
      })
      .catch((error) => {
        Alert.alert('Login Failed', error.message);
      });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container_utama} 
      behavior={Platform.OS === "android" ? "padding" : "height"} 
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <View style={styles.content}>
        <Image 
          source={require('@/assets/images/img_isCooked.png')} 
          style={[styles.img_logo, { top: keyboardVisible ? '22%' : '15%' }]} 
        />
        <Image source={require('@/assets/images/img_loginContainer.png')} style={styles.loginContainer}/>
        <Text style={styles.text_login}>Login</Text>

        <Text style={styles.text_email}>Email*</Text>
        <TextInput 
          style={styles.input_gmail} 
          placeholder="example@gmail.com"
          placeholderTextColor="gray"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.text_password}>Password*</Text>
        <TextInput 
          style={styles.input_password} 
          placeholder="Enter password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {keyboardVisible ? (
          <Text style={styles.text_forgot2}>Forgot Password?</Text>
        ) : (
          <Text style={styles.text_forgot1}>Forgot Password?</Text>
        )}

        {keyboardVisible ? (
          <TouchableOpacity style={styles.btn_signIn2} onPress={handleLogin}>
            <Text style={styles.text_signIn2}>Sign In</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn_signIn1} onPress={handleLogin}>
            <Text style={styles.text_signIn1}>Sign In</Text>
          </TouchableOpacity>
        )}

        {!keyboardVisible && (
          <Text style={styles.text_dontHave}>
            Don't Have an Account? 
            <Link href='/register'>
              <Text style={styles.text_createNow}> Create Now!</Text>
            </Link>
          </Text>
        )}

        {!keyboardVisible && (
          <Text style={styles.text_byUsing}>
            By using isCooked, you agree to our 
            <Text style={styles.text_terms}> Terms of Service</Text> and 
            <Text style={styles.text_privacy}> Privacy Policy</Text>
          </Text>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container_utama: {
    flex: 1,
    position: 'relative',
    backgroundColor:'#FFBF00',
  },

  // Logo

  img_logo:{
    position: 'absolute',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  // Text login
  text_login: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 250,
  },
  // text email
  text_email: {
    fontSize: 13,
    position: 'absolute',
    left: 80,
    top: 320,
  },
  // text pw
  text_password: {
    fontSize: 13,
    position: 'absolute',
    left: 80,
    top: 410,
  },
  // text forgot
  text_forgot1: {
    position: 'absolute',
    right: 80,
    fontSize: 13,
    bottom: 320,
    zIndex: 999,
  },
  // text forgot
  text_forgot2: {
    position: 'absolute',
    right: 80,
    fontSize: 13,
    bottom: 65,
    zIndex: 999,
  },
  // input gmail
  input_gmail: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    position: 'absolute',
    top: 350,
    backgroundColor: 'white',
  },
  // input pw
  input_password: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    position: 'absolute',
    top: 440,
    backgroundColor: 'white',
  },
  // btn sign in
  btn_signIn1: {
    position: 'absolute',
    bottom: 260,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text sign in
  text_signIn1: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  // btn sign in 2
  btn_signIn2: {
    position: 'absolute',
    bottom: 5,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text sign in 2 
  text_signIn2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  // container login
  loginContainer: {
    position: 'absolute',
    top: 200,
  },
  // text dont have
  text_dontHave: {
    position: 'absolute',
    bottom: 234,
  },

  text_createNow: {
    position: 'absolute',
    bottom: 234,
    color: 'blue',
  },

  text_byUsing: {
    textAlign: 'center',
    width: '70%',
    position: 'absolute',
    bottom: 20,
    color:'white',
  },

  text_terms: {
    color: 'blue',
    textDecorationLine:'underline',
  },
  
  text_privacy: {
    color: 'blue',
    textDecorationLine:'underline',
  },
});

export default Login;
