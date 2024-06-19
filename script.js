   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
   import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithPopup, GoogleAuthProvider,
     sendEmailVerification,
   } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
   
   import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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


        //  console.log(user);
      //    const sendemail=async()=>{

      // const emailverify= await sendEmailVerification(auth.currentUser);  
      
    
      // alert("email sent")
      //     console.log(auth.currentUser.emailVerified)

      //     onAuthStateChanged(auth, (currentUser) => {
      //       if (currentUser.emailVerified==true) {
      //           //  window.location.href="https://admin-superduper.cerbosys.com/admin/dashboard.html";
      //        console.log("ho gaya")
      //       } else {
             
      //         // alert("user")
      //         return null;

      //       }
      //     });
      //   }
      
      sendEmailVerification(auth.currentUser)
      .then(() => {
            alert("email sent")
   window.location.href="https://admin-superduper.cerbosys.com/admin/dashboard.html";
      })
      .catch((error) => {
        alert(error.message);
      })

      

       



         toastshow();
         setTimeout(() => {

          // sendemail();
         }, 1000);

// setTimeout(() => {
//     setInterval(() => {
//       checkverifystatus();
//     }, 1000);
// },2000);
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


// checking the email verified status os the user
const checkingauthstatus=()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}


  google.onclick=(e)=>{
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;


    setTimeout(() => {
       window.location.href="https://admin-superduper.cerbosys.com/admin/dashboard.html";
      // sendemail();
    }, 1000);
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
