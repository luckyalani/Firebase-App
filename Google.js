   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
   import {
     getAuth,
     GoogleAuthProvider ,
     signInWithPopup
   } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

   const firebaseConfig = {
     apiKey: "AIzaSyAy2eEP8dZHFQou8P6-doffppduae_aNf8",
     authDomain: "cerbosys-auth.firebaseapp.com",
     projectId: "cerbosys-auth",
     storageBucket: "cerbosys-auth.appspot.com",
     messagingSenderId: "752800121715",
     appId: "1:752800121715:web:9698a24b0e299c20547b06"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

function change(){
    alert("hello")
}