// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5Mfpts7U7vSBKtseTz1QQyw5wAtgk4UM",
    authDomain: "demosharp-4d601.firebaseapp.com",
    databaseURL: "https://demosharp-4d601.firebaseio.com",
    projectId: "demosharp-4d601",
    storageBucket: "demosharp-4d601.appspot.com",
    messagingSenderId: "861762075058",
    appId: "1:861762075058:web:363012a7609df799590cab",
    measurementId: "G-NNS1Z9P8YH"
};
  
    firebase.initializeApp(firebaseConfig);
  

  

  // Initialize Firebase
  var db=firebase.firestore();

  



  export {
    db
  }


  