// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCRc1wGxQWCKHOeO1yOj9cWNE3BCKf-XbY",
    authDomain: "clone-ebc4e.firebaseapp.com",
    projectId: "clone-ebc4e",
    storageBucket: "clone-ebc4e.appspot.com",
    messagingSenderId: "834103463948",
    appId: "1:834103463948:web:e1a0d24463f983ec911e29",
    measurementId: "G-7QEV9F4BKV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth}