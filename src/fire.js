// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv0dQlVzdMSoehBT7KvuL_lDPIdrwAUbk",
  authDomain: "tellcademy-37ba8.firebaseapp.com",
  projectId: "tellcademy-37ba8",
  storageBucket: "tellcademy-37ba8.appspot.com",
  messagingSenderId: "633388846360",
  appId: "1:633388846360:web:c290d80f4b932b4b51a26d",
  measurementId: "G-9N5GXK5K6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);