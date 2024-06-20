import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
  sendEmailVerification,
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



// buttons get
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {


      const user = userCredential.user;
      window.location.href="https://admin-superduper.cerbosys.com/admin/dashboard.html"


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
});

function toastshow() {
 const toast = document.getElementById("toast-success");
 // const spinner=document.getElementById('spinnerdiv');
 // spinner.style.display='none';
 toast.style.display = "flex";

 //  blanking input fields
 const email = document.getElementById("email");
 const pass = document.getElementById("password");
 // const displayName_new = document.getElementById("username");
 email.value = "";
 pass.value = "";
 // displayName_new.value="";
 
 setTimeout(() => {
   toast.style.display = "none";
 }, 2000);
}


const google=document.getElementById('btn1');
const provider = new GoogleAuthProvider();

// send email verification password 





