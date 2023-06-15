// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0jjDiwPPgSK0R2GGbOsR9fb3lqeqsy8I",
  authDomain: "chat-app-7e102.firebaseapp.com",
  projectId: "chat-app-7e102",
  storageBucket: "chat-app-7e102.appspot.com",
  messagingSenderId: "980461047685",
  appId: "1:980461047685:web:55c0430a68b41d742f7eec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
