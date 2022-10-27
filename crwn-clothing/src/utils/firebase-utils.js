// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import {getFirestore,query,getDocs,collection} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCM0vIuyxLaRROLa1LJzlrYz3Px6JRV8Fs",
    authDomain: "crwn-clothing-db-7671c.firebaseapp.com",
    projectId: "crwn-clothing-db-7671c",
    storageBucket: "crwn-clothing-db-7671c.appspot.com",
    messagingSenderId: "378619029115",
    appId: "1:378619029115:web:aa8345b44d2cb6666ae4de"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();
export const getCategoriesAndDocuments = async() => {

    const collectionRef  = collection(db,'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
    };