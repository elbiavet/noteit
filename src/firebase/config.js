
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCTg0mVaVPdYjefRxd2hGrt7uM4ocJqam0",
  authDomain: "react-cursos-576e8.firebaseapp.com",
  projectId: "react-cursos-576e8",
  storageBucket: "react-cursos-576e8.appspot.com",
  messagingSenderId: "240371612883",
  appId: "1:240371612883:web:4cce8def27973a6ac9e826"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )

