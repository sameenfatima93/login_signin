// import { supabase } from "./supabase.js";

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

//login and sign in ky sary inputs and form ki id ko get krna hy ab 

let loginForm = document.getElementById("loginForm")
let rigesterForm = document.getElementById("rigesterForm")

let logName = document.getElementById("logName")
let logPassword = document.getElementById("logPassword")

let registerName = document.getElementById("registerName")
let registerEmail = document.getElementById("registerEmail")
let registerPassword = document.getElementById("registerPassword")
let registerRepassword = document.getElementById("registerRe-password")

//ok ab hum registration pr kam pehly kren gy us ka data save kren gy 
//__registration_____________________________________
rigesterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log("form submited");
    let userName = registerName.value
    let userEmail = registerEmail.value
    let userPass = registerPassword.value
    let userREpass = registerRepassword.value
    if (userName === " " || userEmail === " " || userPass === " " || userREpass === " ") {
        alert("Please fill all fields")
        return;


    }
    //  console.log(userName, userEmail, userPass, userREpass);
    localStorage.setItem("userName", userName)
    localStorage.setItem("userEmail", userEmail)
    localStorage.setItem("userPassword", userPass)
    localStorage.setItem("userRepassword", userREpass)

    // Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "Registration Successful",
    //     showConfirmButton: false,
    //     timer: 1500
    // });

//     Swal.fire({
//   title: "registration Successful 🎉",
//   text: "You won't to save your information?",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#0a7022",
//   cancelButtonColor: "rgb(27, 75, 166)",
//   confirmButtonText: "yes!",
//   cancelButtonText: "No Need to Save"
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });
//   }
//   window.location.href = "dashboard.html";
// });
    
//    setTimeout(() => {
    
//    }, 2200);

Swal.fire({
  title: "Registration Successful 🎉",
  text: "Do you want to save your information?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#0a7022",
  cancelButtonColor: "rgb(27, 75, 166)",
  confirmButtonText: "Yes, Save it!",
  cancelButtonText: "Go to Dashboard"
}).then((result) => {

  // ✅ Agar user YES kare
  if (result.isConfirmed) {

    Swal.fire({
      title: "Saved!",
      text: "Your information has been successfully saved.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      window.location.href = "dashboard.html";
    });

  }

  // ✅ Agar user CANCEL kare
  else if (result.dismiss === Swal.DismissReason.cancel) {
    window.location.href = "dashboard.html";
  }

});


    document.getElementById("registerName").value = ""
    document.getElementById("registerEmail").value = ""
    document.getElementById("registerPassword").value = ""
    document.getElementById("registerRe-password").value = ""
})

//__login________________________
loginForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let enterdUsername = logName.value
    let enterdUserpass = logPassword.value

    // console.log(enterdUsername,enterdUserpass);
    let storedUsername = localStorage.getItem("userName")
    let storedUserpass = localStorage.getItem("userPassword")

    if (enterdUsername === storedUsername && enterdUserpass === storedUserpass) {
        //         Swal.fire({

        //             title: "Login Successfully",
        //             width: 600,
        //             imageUrl: "https://assets.dochipo.com/editor/animations/confetti/9661d0af-e2f0-410e-b538-5da8a5adfff1.gif",
        //             imageWidth: "300",
        //             imageHeight: "200",
        //             padding: "3em",
        //             color: "#115691",
        //             background: "#76acdb",
        // //             backdrop: `
        // //     rgba(0,0,123,0.4)
        // //     // url("")
        // //     left top
        // //     no-repeat
        // //   `
        //         });
        // console.log("log in successfully");
        // Swal.fire({
        //     title: "Login Successful 🎉",
        //     icon: "success",
        //     confirmButtonText: "Celebrate!"
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         document.getElementById("partyPopup").style.display = "flex";
        //         setTimeout(() => {
        //             window.location.href = "dashboard.html";
        //         }, 3000);
        //     }

        // });
// Login successful hone ke baad

document.getElementById("celebrationLayer").style.display = "block";

Swal.fire({
  title: "Login Successful 🎉",
  text: "Welcome Back!",
  icon: "success",
  timer: 3000,
  showConfirmButton: false
}).then(() => {
    //is sy celebration hide ho jaye gi
  document.getElementById("celebrationLayer").style.display = "none";
    //popup ky bad foran dashboard aa jaye ga
  window.location.href = "dashboard.html";
});


    } else {
        console.log("invalid cridetional you need to first registerd");

    }
    document.getElementById("logName").value = ""
    document.getElementById("logPassword").value = ""
})