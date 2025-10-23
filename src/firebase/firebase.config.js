// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIUrPWhI6OQmNLzmbu1DC39YxqNuvpXqM",
  authDomain: "pet-care-in-winter-b7216.firebaseapp.com",
  projectId: "pet-care-in-winter-b7216",
  storageBucket: "pet-care-in-winter-b7216.firebasestorage.app",
  messagingSenderId: "1097626687585",
  appId: "1:1097626687585:web:5095b5fd2aa41f0f6b3220",
  measurementId: "G-DJPV0G7Z74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
