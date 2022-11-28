// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// authentication
import { getAuth } from "firebase/auth";
// firebase database
import { getFirestore } from "firebase/firestore";
// firebase storage
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz9Gv9rWrQb5_w3cJr25x7s_HcT14VT-c",
  authDomain: "mytravelapp-6717f.firebaseapp.com",
  projectId: "mytravelapp-6717f",
  storageBucket: "mytravelapp-6717f.appspot.com",
  messagingSenderId: "968187121725",
  appId: "1:968187121725:web:539c904a1126653b49da54"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);
 export let db = getFirestore(firebaseApp);
export let storage = getStorage(firebaseApp);

export default firebaseApp;





