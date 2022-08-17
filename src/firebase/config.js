import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXBVz8PEEo39C2hHWyiu21ToVBrafKU-c",
  authDomain: "vue-blog-system-75f34.firebaseapp.com",
  projectId: "vue-blog-system-75f34",
  storageBucket: "vue-blog-system-75f34.appspot.com",
  messagingSenderId: "865493757256",
  appId: "1:865493757256:web:c3aed0ac08e10415a5977d",
  measurementId: "G-4TH6NDX92T"
};
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};