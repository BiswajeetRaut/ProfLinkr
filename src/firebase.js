import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMVResOobFwoGy7ostoH1JF00liPiyHHg",
  authDomain: "alumni-website-d2a14.firebaseapp.com",
  projectId: "alumni-website-d2a14",
  storageBucket: "alumni-website-d2a14.appspot.com",
  messagingSenderId: "559309987886",
  appId: "1:559309987886:web:85de1eb725153c60efbfbf",
  measurementId: "G-7LXMZDB08N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
