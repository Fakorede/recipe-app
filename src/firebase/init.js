import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDmQXq2TL9jlw628jztHUtM0H0L0loWMpA",
  authDomain: "vue-recipes-app.firebaseapp.com",
  databaseURL: "https://vue-recipes-app.firebaseio.com",
  projectId: "vue-recipes-app",
  storageBucket: "vue-recipes-app.appspot.com",
  messagingSenderId: "1077740582760"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// Export firestore database
export default firebaseApp.firestore();
