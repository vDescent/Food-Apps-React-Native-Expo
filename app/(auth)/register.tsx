import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan Password harus diisi!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Berhasil', 'Akun berhasil dibuat!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container_utama}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.content}>
        <Image source={require('@/assets/images/img_loginContainer.png')} style={styles.loginContainer} />
        <Text style={styles.text_register}>Register</Text>

        <Text style={styles.text_email}>Email*</Text>
        <TextInput
          style={styles.input_gmail}
          placeholder="Enter your email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          multiline
        />

        <Text style={styles.text_password}>Password*</Text>
        <TextInput
          style={styles.input_password}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          multiline={false}
        />

        {!keyboardVisible && (
          <TouchableOpacity style={styles.btn_signIn1} onPress={handleRegister}>
            <Text style={styles.text_signIn1}>Sign Up</Text>
          </TouchableOpacity>
        )}

        {!keyboardVisible && (
          <Text style={styles.text_dontHave}>
            Already have an Account?{' '}
            <Link href="/login">
              <Text style={styles.text_createNow}>Login</Text>
            </Link>
          </Text>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container_utama: {
    flex: 1,
    backgroundColor: '#FFBF00',
  },
  img_logo: {
    position: 'absolute',
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    position: 'absolute',
    top: 200,
  },
  text_register: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text_email: {
    alignSelf: 'flex-start',
    marginLeft: 80,
    marginTop: 20,
  },
  input_gmail: {
    width: '70%',
    minHeight: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text_password: {
    alignSelf: 'flex-start',
    marginLeft: 80,
    marginTop: 20,
  },
  input_password: {
    width: '70%',
    minHeight: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  btn_signIn1: {
    marginTop: 30,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    width: '70%',
    alignItems: 'center',
  },
  text_signIn1: {
    color: 'white',
    fontSize: 16,
  },
  text_dontHave: {
    marginTop: 15,
  },
  text_createNow: {
    color: 'blue',
  },
});

export default Register;
