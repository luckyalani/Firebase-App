   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
   import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithPopup, GoogleAuthProvider
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
    //  const displayName_new = document.getElementById("username").value;
     // signup database code
     createUserWithEmailAndPassword(auth, email, pass)
       .then((userCredential) => {
         // Signed up
        //  buttonshow();

         const user = userCredential.user;
        //  let username= userCredential.user.displayName;
        //  username=displayName_new;

         console.log(user);
         setTimeout(() => {
           toastshow();

         }, 1000);

         setTimeout(() => {
           // redirect after 2s 

          window.location.href = "https://vendor-html.cerbosys.com/admin/dashboard.html";
           
         }, 2000);
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
    const spinner=document.getElementById('spinnerdiv');
    spinner.style.display='none';
    toast.style.display = "flex";

    //  blanking input fields
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const displayName_new = document.getElementById("username");
    email.value = "";
    pass.value = "";
    // displayName_new.value="";
    
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  }

 
  const google=document.getElementById('btn1');
  const provider = new GoogleAuthProvider();

  google.onclick=(e)=>{
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
