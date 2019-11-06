import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const loadDB =()=>{
    try {
        var config = {
          apiKey: "AIzaSyDt10t0F8lMO53Zb9DJV67zSK6aygZSRSg",
          authDomain: "rodbook-d5dc3.firebaseapp.com",
          databaseURL: "https://rodbook-d5dc3.firebaseio.com",
          projectId: "rodbook-d5dc3",
          storageBucket: "rodbook-d5dc3.appspot.com",
          messagingSenderId: "141499012621",
          appId: "1:141499012621:web:0500232ef0ee063a"
        };
        firebase.initializeApp(config);
      } catch (err) {
        // we skip the "already exists" message which is
        // not an actual error when we're hot-reloading
        if (!/already exists/.test(err.message)) {
          console.error('Firebase initialization error', err.stack);
        }
      }
    
      return firebase;
}

export {
    loadDB
  }