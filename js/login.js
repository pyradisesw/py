
function doGoogle()
{
     
     // Google provider object is created here. 
    const googleAuth =  
      new firebase.auth.GoogleAuthProvider(); 

    // using the object we will authenticate the user. 
    firebase.auth().signInWithPopup(googleAuth)
    .then((user) => {
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        errBox=document.getElementById("error");
        errBox.innerHTML=errorMessage;
      });
}
function doEmailLogin()
{
    email=document.getElementById("inputUsername").value;
    password=document.getElementById("inputPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in 
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        errBox=document.getElementById("error");
        errBox.innerHTML=errorMessage;
      });
}

document.getElementById("registerButton").onclick = function() {
    let email = document.getElementById("emailRegister").value;
    let password = document.getElementById("passwordRegister").value;
    let confirmPassword = document.getElementById("confirmPasswordRegister").value;
    let errorEl = document.getElementById("errorRegister");
  
    if (password !== confirmPassword) {
      errorMessage="passwords must match."
      errBox.innerHTML=errorMessage;
      return;
    }
  
 function doRegister (email, password)
  {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result){
      //user registered and logged in automatically
      console.log("User registered!");
      return true;
    }).catch(function(error) {
      //error occurred, show error message
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  };
  }