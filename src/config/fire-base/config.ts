// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz2mOl0rLfFMgOBJy_XwNEOUKJxexqdDE",
  authDomain: "miniblog-1f631.firebaseapp.com",
  projectId: "miniblog-1f631",
  storageBucket: "miniblog-1f631.appspot.com",
  messagingSenderId: "93095409913",
  appId: "1:93095409913:web:26670b259ebb41a998ca28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize DataBase
const dataBase = getDatabase(app);

export { dataBase };