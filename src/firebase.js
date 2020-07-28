import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCsMNqKOzNst6Ap4DjI9xWmfbvoSBM_PbE",
  authDomain: "chatsapp-react.firebaseapp.com",
  databaseURL: "https://chatsapp-react.firebaseio.com",
  projectId: "chatsapp-react",
  storageBucket: "chatsapp-react.appspot.com",
  messagingSenderId: "42390140644",
  appId: "1:42390140644:web:7722f4c592a106d769def1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
