// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeakOOYLSZsMuGYCfpIXiMR-W3ohjF8gk",
  authDomain: "my-portfolio-f2440.firebaseapp.com",
  projectId: "my-portfolio-f2440",
  storageBucket: "my-portfolio-f2440.appspot.com",
  messagingSenderId: "578455796602",
  appId: "1:578455796602:web:66d662bcd490f5aba474c3",
  measurementId: "G-ZZVKN5JVK9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
