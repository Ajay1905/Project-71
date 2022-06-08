import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhqzCd5H9eAq9OCa_qQ-8lrAoYkUQ6_0s",
    authDomain: "rent-a-ride-6cebc.firebaseapp.com",
    projectId: "rent-a-ride-6cebc",
    storageBucket: "rent-a-ride-6cebc.appspot.com",
    messagingSenderId: "198513169497",
    appId: "1:198513169497:web:909f6eed6b444f65af0d48",
    measurementId: "G-1J0GP567M7"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
