import { supabase } from "./supabase.js"


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

let logEmail = document.getElementById("logEmail")
let logPassword = document.getElementById("logPassword")

let registerName = document.getElementById("registerName")
let registerEmail = document.getElementById("registerEmail")
let registerPassword = document.getElementById("registerPassword")
let registerRepassword = document.getElementById("registerRe-password")

//ok ab hum registration pr kam pehly kren gy us ka data save kren gy 
//__registration_____________________________________
rigesterForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // console.log("form submited");
    let userName = registerName.value.trim()
    let userEmail = registerEmail.value.trim()
    let userPass = registerPassword.value.trim()
    let userREpass = registerRepassword.value.trim()
    if (!userName || !userEmail || !userPass || !userREpass) {
        alert("Please fill all fields")
        return;
    }
    if(userPass !== userREpass){
      alert("password do not match")
      return
    }
    const { data, error } = await supabase.auth.signUp({
  email: userEmail,
  password: userPass,
})
if(error){
  console.log("error" , error.message);
  
}
    //  console.log(userName, userEmail, userPass, userREpass);
    // localStorage.setItem("userName", userName)
    localStorage.setItem("userEmail", userEmail)
    localStorage.setItem("userPassword", userPass)
    // localStorage.setItem("userRepassword", userREpass)

  
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
loginForm.addEventListener("submit", async function (e) {
  e.preventDefault()

  let enterdUserEmail = logEmail.value.trim()
  let enterdUserpass = logPassword.value.trim()

  // ✅ Empty check
  if (!enterdUserEmail || !enterdUserpass) {
    alert("Please fill all fields")
    return
  }

  // 🔥 Supabase Login
  const { data, error } = await supabase.auth.signInWithPassword({
    email: enterdUserEmail,
    password: enterdUserpass,
  })

  // ❌ Wrong credentials
  if (error) {
    alert(error.message)
    return
  }

  // ✅ Login successful

  document.getElementById("celebrationLayer").style.display = "block";

  Swal.fire({
    title: "Login Successful 🎉",
    text: "Welcome Back!",
    icon: "success",
    timer: 3000,
    showConfirmButton: false
  }).then(() => {

    document.getElementById("celebrationLayer").style.display = "none";

    window.location.href = "dashboard.html";
  });

  // ✅ Clear fields
  logEmail.value = ""
  logPassword.value = ""
})
