import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZIS0vPSD_KG0tpdWoM92pDcAIEwqbmw0",
  authDomain: "clone-4b021.firebaseapp.com",
  databaseURL: "https://clone-4b021.firebaseio.com",
  projectId: "clone-4b021",
  storageBucket: "clone-4b021.appspot.com",
  messagingSenderId: "1095524888138",
  appId: "1:1095524888138:web:22c343be7f96537a7780b3",
  measurementId: "G-CQRVL46M4Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
