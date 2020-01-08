import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD52zvTqSwXqjZMRbqXKWGR97Rl9j4ENKk",
    authDomain: "fypjunction.firebaseapp.com",
    databaseURL: "https://fypjunction.firebaseio.com",
    projectId: "fypjunction",
    storageBucket: "fypjunction.appspot.com",
    messagingSenderId: "560985499213",
    appId: "1:560985499213:web:b2be764ee0bf249f435e04",
    measurementId: "G-M6XER4FCJ6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;