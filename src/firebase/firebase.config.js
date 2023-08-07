import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyC_ddoF_3_qkLHAqlh4BIXY5e7NmNMoL8w",
    authDomain: "laptop-trade.firebaseapp.com",
    projectId: "laptop-trade",
    storageBucket: "laptop-trade.appspot.com",
    messagingSenderId: "742255924312",
    appId: "1:742255924312:web:c378142657e5d19ada662d"
};

const app = initializeApp(firebaseConfig);

export default app;