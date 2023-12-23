// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJzwhR-46YHSxkgTAe8XRJfcd7vAMujCU",
    authDomain: "chat-app-52a12.firebaseapp.com",
    databaseURL: "https://chat-app-52a12-default-rtdb.firebaseio.com",
    projectId: "chat-app-52a12",
    storageBucket: "chat-app-52a12.appspot.com",
    messagingSenderId: "1042413151396",
    appId: "1:1042413151396:web:d21fad978b1d6c33b2f231",
    measurementId: "G-W2ZYPJ4K0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const database = getDatabase(app);

export default database;

