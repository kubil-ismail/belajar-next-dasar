// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeMPBKBfmstM2CTRw1xB1p2WlRBYxOf7o",
  authDomain: "learn-react-pijar.firebaseapp.com",
  databaseURL:
    "https://learn-react-pijar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learn-react-pijar",
  storageBucket: "learn-react-pijar.appspot.com",
  messagingSenderId: "598970260404",
  appId: "1:598970260404:web:a01f8e67a89a9165b4f0e1",
  measurementId: "G-CF5JFSKDPZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const userId = uuidv4();


export { database, userId };
