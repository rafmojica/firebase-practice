// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1PiFmK0olPek4WxwXpu28mmPa8Eootzc",
  authDomain: "fir-project-68d3c.firebaseapp.com",
  projectId: "fir-project-68d3c",
  storageBucket: "fir-project-68d3c.appspot.com",
  messagingSenderId: "74064951100",
  appId: "1:74064951100:web:70d739811338c70f171039",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
