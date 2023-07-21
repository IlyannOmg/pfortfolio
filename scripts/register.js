// const formOpenBtn = document.querySelector("#form-open"),
// home  = document.querySelector(".home"),
// formContainer  = document.querySelector(".form-container"),
// signupBtn  = document.querySelector("#signup"),
// loginBtn  = document.querySelector("#login"),
// pwShowHide  = document.querySelectorAll(".pw-hide");

// let inpPassword = document.getElementsByClassName("inpPassword")[0];
// let intLogin = document.getElementsByClassName("intLogin")[0];
// let intPassword = document.getElementsByClassName("intPassword")[0];
// let inpPasswordConf = document.getElementsByClassName("inpPasswordConf")[0];
// let inpEmail = document.getElementsByClassName("inpEmail")[0];
// let confirm = document.getElementsByClassName("confirm")[0];

// confirm.addEventListener("click", (e) => {
//     console.log("1")

//     fetch('http://localhost:3000/registered/'+ inpEmail.value + '/' + inpPassword.value)
//     .then((res)=> (res.json()))
//     .then((json)=>{
//         console.log(json)
//     })
//     console.log("2")

//     localStorage.setItem("login", inpEmail.value)
//     location.href = "index.html"

//     e.preventDefault();

// })
// pwShowHide.forEach((icon) => {
//    icon.addEventListener("click", () => {
//     let getPwInput = icon.parentElement.querySelector("input");
//     if(getPwInput.type === "password") {
//         getPwInput.type = "text";
//         icon.classList.replace("fa-eye-slash" ,"fa-eye");
//     }   else {
//         getPwInput.type = "password";
//         icon.classList.replace("fa-eye" ,"fa-eye-slash");
//     }
//    });
// });

// signupBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.add("active");
// } )

// loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.remove("active");
// } )

// formOpenBtn.addEventListener("click", () => {
//     fetch('http://localhost:3000/check-user/' + intLogin.value +"/" + intPassword.value)
//     .then(data =>(data.json()))
//     .then(json => {
//         console.log(json)
//     })
// })


// All let, const, var

const intLogin = document.querySelector(".intLogin");
const Password = document.querySelector(".Password");
const login = document.querySelector(".Login");
const intPassword = document.querySelector(".intPassword");
const Username = document.querySelector(".Username");
const continueBtn = document.querySelector("#Continue");
const continueLogIn = document.querySelector("#ContinueLogIn");
const btnLogIn = document.querySelector(".logIN");
const singUpBtn = document.getElementsByClassName("SingUpBtn")[0];
const ogglePassword = document.querySelector("#togglePassword");
const togglePasswordTwo = document.querySelector("#togglePasswordTwo");
const sectionSignInSignUp = document.querySelectorAll(".SignUp");
const sectionSignIn = document.querySelectorAll(".SignIn");

singUpBtn.addEventListener("click", () => {
    sectionSignInSignUp.forEach(function (sectionSignInSignUp) {
        sectionSignInSignUp.style.display = "block";
        sectionSignInSignUp.style.display = "flex";
      });
      sectionSignIn.forEach(function (sectionSignIn) {
        sectionSignIn.style.display = "none";
      });
  });
  

// Sumbit all in form what in write and settigns show password 

continueBtn.addEventListener("click", () => {
  togglePassword.style.display = "block";
  intPassword.style.display = "block";
  intLogin.style.display = "block";
  Username.style.borderRadius = "6px 6px 0 0";
  intLogin.style.borderRadius = "0";
  if (
    intLogin.addEventListener("click", () => {
      intPassword.style.display = "none";
      intLogin.style.borderRadius = "0 0 6px 6px";
      togglePassword.style.display = "none";
    })
  ) {
  }
  if (
    Username.addEventListener("click", () => {
      intLogin.style.display = "none";
      Username.style.borderRadius = "6px";
      intPassword.style.display = "none";
      togglePassword.style.display = "none";
    })
  ) {
  }
});

// Url for nexte form(SignUp)

btnLogIn.addEventListener("click", () => {
  sectionSignIn.forEach(function (sectionSignIn) {
    sectionSignIn.style.display = "block";
    sectionSignIn.style.display = "flex";
  });
  sectionSignInSignUp.forEach(function (sectionSignInSignUp) {
    sectionSignInSignUp.style.display = "none";
  });
});


  


// Controlle what write in input 

// continueBtn.addEventListener("click", () => {
//   const Username = document.querySelector(".Username");
//   if (Username.type = " ") {
//     Username.style.border = "1px solid red";
//   } else {
//     Username.style.border = "1px solid #ccc";
//   }
//   Password.style.display = "block";
//   login.style.borderRadius = "6px 6px 0 0";
//   return
// });

// Settigns for login cahnge display none or display

if (
  login.addEventListener("click", () => {
    Password.style.display = "none";
    login.style.borderRadius = "6px";
    togglePasswordTwo.style.display = "none";
  })
) {
}

continueLogIn.addEventListener("click", () => {
  togglePasswordTwo.style.display = "block";
  Password.style.display = "block";
  login.style.borderRadius = "6px 6px 0 0";
});

// Show password and color change #1

function showPassword() {
  var intPassword = document.querySelector(".intPassword");
  if (intPassword.type === "password") {
    intPassword.type = "text";
    togglePassword.style.color = "#ff7929";
  } else {
    intPassword.type = "password";
    togglePassword.style.color = "#000";
  }
}

// Show password change color #2

function showPasswordTwo() {
  var password = document.querySelector(".Password");
  if (password.type === "password") {
    password.type = "text";
    togglePasswordTwo.style.color = "#ff7929";
  } else {
    password.type = "password";
    togglePasswordTwo.style.color = "#000";
  }
}



// function valid(form) {
//     var name = form.name.value;
//     var password = form.Password.value;
//     var email = form.email.value;
//     var rePassword = form.rePassword.value;
//     var state = form.state.value;
//     var add_parrent=/[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
//     var fail = false;
//     if (name == "" || name ==" ") {
//         fail = "You not write your name!";
//     }else if (add_parrent.test(email) == false) {
//         fail = "You not write don't right!!";
//     }  else if (password == "") {
//         fail = "You not write your password!";
//      }else if (password != rePassword) {
//         fail = "You password not match your password!";
//     } else if (state == "") {
//         fail = "Please wire your state!";
//     }
//     if(fail) {
//         alert(fail)
//     }
// }

