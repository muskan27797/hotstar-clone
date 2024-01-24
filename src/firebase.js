import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyA56-WAuEi0YlMrDTYj4tFuS0P0jawOTkc",
    authDomain: "hotstar-clone-dce24.firebaseapp.com",
    projectId: "hotstar-clone-dce24",
    storageBucket: "hotstar-clone-dce24.appspot.com",
    messagingSenderId: "1048379169464",
    appId: "1:1048379169464:web:593b7d11b2fab502edb24d",
    measurementId: "G-YM8QEBCX15"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;

