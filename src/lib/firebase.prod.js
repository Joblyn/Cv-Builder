import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyASOat6CaIWxzwnepoGBHDpltnf9jH1QH0",
  authDomain: "cv-builder-c0429.firebaseapp.com",
  databaseURL: "https://cv-builder-c0429.firebaseio.com",
  projectId: "cv-builder-c0429",
  storageBucket: "cv-builder-c0429.appspot.com",
  messagingSenderId: "345713103785",
  appId: "1:345713103785:web:a5e9fa0e81052f80d46ab8",
  measurementId: "G-XBCF2TTQ2R"
};

const firebase = Firebase.initializeApp(config);

export { firebase };