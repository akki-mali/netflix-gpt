// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtTTrEyDonEUmha5vPlpzxKk9-GMlcM6I",
  authDomain: "netflixgpt-682cc.firebaseapp.com",
  projectId: "netflixgpt-682cc",
  storageBucket: "netflixgpt-682cc.firebasestorage.app",
  messagingSenderId: "456837680627",
  appId: "1:456837680627:web:fee65d9d1322c02a4d9686",
  measurementId: "G-M70V2ENM6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);