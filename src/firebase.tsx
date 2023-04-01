import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyY3SkokAN7grBkaLkdbbL3MTKzyUM5Jo",
    authDomain: "clone-ts-21ac7.firebaseapp.com",
    projectId: "clone-ts-21ac7",
    storageBucket: "clone-ts-21ac7.appspot.com",
    messagingSenderId: "49778422050",
    appId: "1:49778422050:web:003a1a42dd4f10f456757b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
