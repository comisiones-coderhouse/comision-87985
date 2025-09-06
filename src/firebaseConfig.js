import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAQ57vI2H-Gh8LvN1_MxAFPqYCF7TeYnD4",
    authDomain: "comision-87985.firebaseapp.com",
    projectId: "comision-87985",
    storageBucket: "comision-87985.firebasestorage.app",
    messagingSenderId: "98650718622",
    appId: "1:98650718622:web:c13577caaa5c758e15168f"
};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//1) Una referencia a la aplicacion/plataforma de firebase (es la constante "app")
//2) Una referencia a la base de datos de firebase (Se hace con la funcion getFirestore de firebase)