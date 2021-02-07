import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC-fJvsuv-enCoY0Ed_Z9QxkBscVzeuVKI",
    authDomain: "crown-db-f25a4.firebaseapp.com",
    projectId: "crown-db-f25a4",
    storageBucket: "crown-db-f25a4.appspot.com",
    messagingSenderId: "506856837013",
    appId: "1:506856837013:web:9dc41fa887be44926fb09c",
    measurementId: "G-EWM1JXKZMN"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;