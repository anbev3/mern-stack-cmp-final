// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-cmp.firebaseapp.com",
  projectId: "mern-project-cmp",
  storageBucket: "mern-project-cmp.firebasestorage.app",
  messagingSenderId: "907613025285",
  appId: "1:907613025285:web:2192d1edc8f7765e12986c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);