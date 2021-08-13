  
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAGA-WYTFiMzLGTs2UyWVpckJQ17eAyb6Q",
    authDomain: "bookstore-4f489.firebaseapp.com",
    projectId: "bookstore-4f489",
    storageBucket: "bookstore-4f489.appspot.com",
    messagingSenderId: "696878415296",
    appId: "1:696878415296:web:362a7d01d527bab68f9c25",
    measurementId: "G-Z0893F3SSC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  export {auth};