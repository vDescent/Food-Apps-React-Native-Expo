// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUDW6L7MsMvSq-ntF5rsvPH0W-tQApDow",
  authDomain: "hybriduas-f79e1.firebaseapp.com",
  projectId: "hybriduas-f79e1",
  storageBucket: "hybriduas-f79e1.firebasestorage.app",
  messagingSenderId: "1055009372869",
  appId: "1:1055009372869:web:40733308e0f69829e9ceac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);