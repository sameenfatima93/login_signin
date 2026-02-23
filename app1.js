// // window.onload = function () {
// //   let posts = JSON.parse(localStorage.getItem("postsData")) || [];
// //   posts.forEach(post => displayPost(post));
// // };

// // function post() {
// //   var title = document.getElementById("title").value.trim();
// //   var description = document.getElementById("description").value.trim();
// //   var postContainer = document.getElementById("posts");

// //   if (title && description) {
    
// //     var postCard = document.createElement("div");
// //     postCard.classList.add("card", "m-2");
// //     postCard.style.padding = "15px";

// //     // ✅ APPLY BACKGROUND IMAGE ON POST CARD
// //     if (backgroundImg) {
// //       postCard.style.backgroundImage = `url(${backgroundImg})`;
// //       postCard.style.backgroundSize = "cover";
// //       postCard.style.backgroundPosition = "center";
// //       postCard.style.color = "white"; // optional (text visible)
// //     }

// //     postCard.innerHTML = `
// //       <div class="card-header post-header" style="background: rgba(0,0,0,0.5);">
// //         <img src="Post_App_Logo_Red_and_Royal_Blue-removebg-preview.png" alt="" height="47px" width="47px">
// //       </div>
// //       <div class="card-body">
// //         <h5 class="card-title">${title}</h5>
// //         <p class="card-text">${description}</p>
// //       </div>
// //       <div class="ms-auto m-2">
// //         <button class="btn btn-success edit-btn">Edit</button>
// //         <button class="btn btn-danger delete-btn">Delete</button>
// //       </div>
// //     `;

// //     postContainer.appendChild(postCard);

// //     document.getElementById("title").value = "";
// //     document.getElementById("description").value = "";
    

// // // ////______function with edit nad delet work button_____////
// // // function post() {
// // //   var title = document.getElementById("title").value.trim();
// // //   var description = document.getElementById("description").value.trim();
// // //   var postContainer = document.getElementById("posts");

// // //   if (title && description) {
// // //     // Create a unique post element
// // //     var postCard = document.createElement("div");
// // //     postCard.classList.add("card", "m-2");

// // //     postCard.innerHTML = `
// // //       <div class="card-header post-header">
// // //         <img src="Post_App_Logo_Red_and_Royal_Blue-removebg-preview.png" alt="" height="47px" width="47px">
// // //       </div>
// // //       <div class="card-body">
// // //         <h5 class="card-title">${title}</h5>
// // //         <p class="card-text">${description}</p>
// // //       </div>
// // //       <div class="ms-auto m-2">
// // //         <button class="btn btn-success edit-btn">Edit</button>
// // //         <button class="btn btn-danger delete-btn">Delete</button>
// // //       </div>
// // //     `;

// // //     // Add post to the container
// // //     postContainer.appendChild(postCard);

// // //     // Clear inputs
// // //     document.getElementById("title").value = "";
// // //     document.getElementById("description").value = "";

// //     // ✅ Add delete functionality
// //     postCard.querySelector(".delete-btn").addEventListener("click", function () {
// //       Swal.fire({
// //         title: "Are you sure?",
// //         text: "You won’t be able to recover this post!",
// //         icon: "warning",
// //         showCancelButton: true,
// //         confirmButtonColor: "#3085d6",
// //         cancelButtonColor: "#d33",
// //         confirmButtonText: "Yes, delete it!"
// //       }).then((result) => {
// //         if (result.isConfirmed) {
// //           postCard.remove();
// //           Swal.fire("Deleted!", "Your post has been removed.", "success");
// //         }
// //       });
// //     });

// //     // ✅ Add edit functionality
// //     postCard.querySelector(".edit-btn").addEventListener("click", function () {
// //       const currentTitle = postCard.querySelector(".card-title").textContent;
// //       const currentDesc = postCard.querySelector(".card-text").textContent;

// //       Swal.fire({
// //         title: "Edit your post",
// //         html: `
// //           <input id="edit-title" class="swal2-input" value="${currentTitle}">
// //           <textarea id="edit-desc" class="swal2-textarea">${currentDesc}</textarea>
// //         `,
// //         showCancelButton: true,
// //         confirmButtonText: "Save",
// //         background: "url(&{'backgroundImg'})",
// //         preConfirm: () => {
// //           const newTitle = document.getElementById("edit-title").value.trim();
// //           const newDesc = document.getElementById("edit-desc").value.trim();
// //           if (!newTitle || !newDesc) {
// //             Swal.showValidationMessage("Please enter both title and description!");
// //             return false;
// //           }
// //           return { newTitle, newDesc };
// //         }
// //       }).then((result) => {
// //         if (result.isConfirmed) {
// //           postCard.querySelector(".card-title").textContent = result.value.newTitle;
// //           postCard.querySelector(".card-text").textContent = result.value.newDesc;
// //           Swal.fire("✅ Updated!", "Your post has been updated successfully.", "success");
// //         }
// //       });
// //     });

// //   } else {
// //     Swal.fire({
// //       icon: "error",
// //       title: "😥 Empty Post...",
// //       text: "Enter title & description",
// //       background: "#ebddd2ff",
// //       color: "#333"
// //     });
// //   }
// // }


// // ////_______image selection pr active styling
// // // var cardImg;
// // // function selectImg(src) {
// // // cardImg = src
// // //   var bgImg = document.getElementsByClassName("bgImg")
// // //   for (let i = 0; i < bgImg.length; i++) {
// // //   }

// // //   event.target.classList.add("selectedImg")
// // // }






// // ////________login page and post page pr name and image ka option_____/////
// // document.addEventListener("DOMContentLoaded", () => {
// //   const userName = localStorage.getItem("userName");
// //   const userNameDisplay = document.getElementById("userNameDisplay");
// //   const profileImage = document.getElementById("profileImage");

// //   if (userName) {
// //     userNameDisplay.textContent = userName;
// //   } else {
// //     userNameDisplay.textContent = "Guest";
// //   }

// //   // 🖼️ Let user upload their own image
// //   profileImage.addEventListener("click", () => {
// //     const input = document.createElement("input");
// //     input.type = "file";
// //     input.accept = "image/*";

// //     input.addEventListener("change", (event) => {
// //       const file = event.target.files[0];
// //       if (file) {
// //         const reader = new FileReader();
// //         reader.onload = (e) => {
// //           profileImage.src = e.target.result;
// //           localStorage.setItem("profilePic", e.target.result); // save image
// //         };
// //         reader.readAsDataURL(file);
// //       }
// //     });

// //     input.click();
// //   });

// //   // 🧠 Restore saved image
// //   const savedPic = localStorage.getItem("profilePic");
// //   if (savedPic) {
// //     profileImage.src = savedPic;
// //   }
// // });

// // // function selectImg(src) {
// // //   backgroundImg = src;
// // //   var bgImg = document.getElementsByClassName("bgImg");

// // //   for (var i = 0; i < bgImg.length; i++) {
// // //     bgImg[i].className = "bgImg";
// // //   }
// // //   event.target.className += " selectedImg";
// // // }

// // //______image pr active effect lagana hy jb woh select ho to border lgy us pr____
// // // var backgroundImg;
// // // function selectImg(src) {
// // //   backgroundImg = src;
// // //   const bgImgs = document.getElementsByClassName("bgImg");
// // //   for (let i = 0; i < bgImgs.length; i++) {
// // //     bgImgs[i].className = "bgImg"

// // //   }
// // //   event.target.classList.add("selectedImg");

// // // }
// // postCard.style.backgroundImage = `url(${backgroundImg})`;
// // postCard.style.backgroundSize = "cover";
// // postCard.style.backgroundPosition = "center";

// // var backgroundImg = "";

// // function selectImg(src) {
// //   backgroundImg = src;

// //   const bgImgs = document.getElementsByClassName("bgImg");
// //   for (let i = 0; i < bgImgs.length; i++) {
// //     bgImgs[i].classList.remove("selectedImg");
// //   }

// //   event.target.classList.add("selectedImg");
// // }


// // function logout() {
// //   localStorage.removeItem("signindata"); // optional if you want to clear data
// //   window.location.href = "/index.html"; // apne login page ka path daalna
// // }

// // let supabaseURL = "https://vtsmcabpewlzoolbpvpb.supabase.co"
// // let SUPABASE_ANONkEY = "sb_publishable_Y7AXOMS7OXm1LthZYjX61g_hWnzVrwf"
// // var supabase = window.supabase.createClient(supabaseURL, SUPABASE_ANONkEY);

// // window.onload = function () {
// //   let posts = JSON.parse(localStorage.getItem("postsData")) || [];
// //   posts.forEach(post => displayPost(post));
// // };

// // import { supabase } from "./supabase.js"
// // function displayPost(post) {
// //   var postContainer = document.getElementById("posts");
// //   var postCard = document.createElement("div");
// //   postCard.classList.add("card", "m-2");
// //   postCard.style.padding = "15px";

// //   // Background Image apply
// //   if (post.backgroundImg) {
// //     postCard.style.backgroundImage = `url(${post.backgroundImg})`;
// //     postCard.style.backgroundSize = "cover";
// //     postCard.style.backgroundPosition = "center";
// //     postCard.style.color = "white";
// //   }

// //   postCard.innerHTML = `
// //     <div class="card-header post-header" style="background: rgba(0,0,0,0.5);">
// //       <img src="Post_App_Logo_Red_and_Royal_Blue-removebg-preview.png" height="47" width="47">
// //     </div>

// //     <div class="card-body">
// //       <h5 class="card-title">${post.title}</h5>
// //       <p class="card-text">${post.description}</p>
// //     </div>

// //     <div class="ms-auto m-2">
// //       <button class="btn btn-success edit-btn">Edit</button>
// //       <button class="btn btn-danger delete-btn">Delete</button>
// //     </div>
// //   `;

// //   postContainer.appendChild(postCard);


// //   postCard.querySelector(".delete-btn").addEventListener("click", function () {
// //     Swal.fire({
// //       title: "Are you sure?",
// //       text: "You won’t be able to recover this post!",
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: "Yes, delete it!"
// //     }).then((result) => {
// //       if (result.isConfirmed) {

// //         // LocalStorage remove
// //         let posts = JSON.parse(localStorage.getItem("postsData")) || [];
// //         posts = posts.filter(p => !(p.title === post.title && p.description === post.description));
// //         localStorage.setItem("postsData", JSON.stringify(posts));

// //         postCard.remove();
// //         Swal.fire("Deleted!", "Your post has been removed.", "success");
// //       }
// //     });
// //   });

  
// //   postCard.querySelector(".edit-btn").addEventListener("click", function () {

// //     Swal.fire({
// //       title: "Edit your post",
// //       html: `
// //         <input id="edit-title" class="swal2-input" value="${post.title}">
// //         <textarea id="edit-desc" class="swal2-textarea">${post.description}</textarea>
// //       `,
// //       showCancelButton: true,
// //       confirmButtonText: "Save",
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         const newTitle = document.getElementById("edit-title").value.trim();
// //         const newDesc = document.getElementById("edit-desc").value.trim();

// //         if (!newTitle || !newDesc) {
// //           Swal.fire("Error", "Title and description cannot be empty", "error");
// //           return;
// //         }

// //         // Screen update
// //         postCard.querySelector(".card-title").textContent = newTitle;
// //         postCard.querySelector(".card-text").textContent = newDesc;

// //         // Update LocalStorage
// //         let posts = JSON.parse(localStorage.getItem("postsData")) || [];
// //         let index = posts.findIndex(p => p.title === post.title && p.description === post.description);
// //         if (index !== -1) {
// //           posts[index].title = newTitle;
// //           posts[index].description = newDesc;
// //         }
// //         localStorage.setItem("postsData", JSON.stringify(posts));

// //         Swal.fire("Updated!", "Your post has been updated.", "success");
// //       }
// //     });
// //   });
// // }


// // var backgroundImg = "";

// // function post() {
// //   var title = document.getElementById("title").value.trim();
// //   var description = document.getElementById("description").value.trim();

// //   if (!title || !description) {
// //     Swal.fire({
// //       icon: "error",
// //       title: "😥 Empty Post...",
// //       text: "Enter title & description",
// //     });
// //     return;
// //   }

// //   // 1️⃣ Save to LOCAL STORAGE
// //   let posts = JSON.parse(localStorage.getItem("postsData")) || [];
// //   const newPost = { title, description, backgroundImg };
// //   posts.push(newPost);
// //   localStorage.setItem("postsData", JSON.stringify(posts));

// //   // 2️⃣ Display same post from LocalStorage
// //   displayPost(newPost);

// //   // 3️⃣ Clear inputs
// //   document.getElementById("title").value = "";
// //   document.getElementById("description").value = "";
// // }


// // function selectImg(src) {
// //   backgroundImg = src;

// //   const bgImgs = document.getElementsByClassName("bgImg");
// //   for (let i = 0; i < bgImgs.length; i++) {
// //     bgImgs[i].classList.remove("selectedImg");
// //   }

// //   event.target.classList.add("selectedImg");
// // }

// // document.addEventListener("DOMContentLoaded", () => {
// //   const userName = localStorage.getItem("userName");
// //   const userNameDisplay = document.getElementById("userNameDisplay");
// //   const profileImage = document.getElementById("profileImage");

// //   userNameDisplay.textContent = userName || "Guest";

// //   // Upload DP
// //   profileImage.addEventListener("click", () => {
// //     const input = document.createElement("input");
// //     input.type = "file";
// //     input.accept = "image/*";

// //     input.addEventListener("change", (event) => {
// //       const file = event.target.files[0];
// //       if (file) {
// //         const reader = new FileReader();
// //         reader.onload = (e) => {
// //           profileImage.src = e.target.result;
// //           localStorage.setItem("profilePic", e.target.result);
// //         };
// //         reader.readAsDataURL(file);
// //       }
// //     });

// //     input.click();
// //   });

// //   // Display Saved DP
// //   const savedPic = localStorage.getItem("profilePic");
// //   if (savedPic) {
// //     profileImage.src = savedPic;
// //   }
// // });


// // function logout() {
// //   localStorage.removeItem("signindata");
// //   window.location.href = "/index.html";
// // }

// // window.selectImg = selectImg;
// // window.logout =  logout;
// // window.post = post;    



// import { supabase } from "./supabase.js"

// // ================= DISPLAY POST =================

// function displayPost(post) {
//   var postContainer = document.getElementById("posts");

//   var postCard = document.createElement("div");
//   postCard.classList.add("card", "m-2");
//   postCard.style.padding = "15px";

//   // 👉 Agar background image ho to apply karo
//   if (post.backgroundImg) {
//     postCard.style.backgroundImage = `url(${post.image_url})`;
//     postCard.style.backgroundSize = "cover";
//     postCard.style.backgroundPosition = "center";
//     postCard.style.color = "white";
//   }

//   postCard.innerHTML = `
//     <div class="card-header post-header" style="background: rgba(0,0,0,0.5);">
//       <img src="Post_App_Logo_Red_and_Royal_Blue-removebg-preview.png" height="47" width="47">
//     </div>

//     <div class="card-body">
//       <h5 class="card-title">${post.title}</h5>
//       <p class="card-text">${post.description}</p>
//     </div>

//     <div class="ms-auto m-2">
//       <button class="btn btn-success edit-btn">Edit</button>
//       <button class="btn btn-danger delete-btn">Delete</button>
//     </div>
//   `;

//   postContainer.appendChild(postCard);


//   // ================= DELETE POST =================

//   postCard.querySelector(".delete-btn").addEventListener("click", async function () {

//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won’t be able to recover this post!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!"
//     }).then(async (result) => {

//       if (result.isConfirmed) {

//         // 👉 Supabase se delete (id ke basis par)
//         const { error } = await supabase
//           .from("posts")
//           .delete()
//           .eq("id", post.id)

//         if (error) {
//           Swal.fire("Error", error.message, "error")
//           return
//         }

//         // 👉 Screen se card remove
//         postCard.remove()

//         Swal.fire("Deleted!", "Your post has been removed.", "success");
//       }
//     });
//   });



//   // ================= EDIT POST =================

//   postCard.querySelector(".edit-btn").addEventListener("click", function () {

//     Swal.fire({
//       title: "Edit your post",
//       html: `
//         <input id="edit-title" class="swal2-input" value="${post.title}">
//         <textarea id="edit-desc" class="swal2-textarea">${post.description}</textarea>
//       `,
//       showCancelButton: true,
//       confirmButtonText: "Save",
//     }).then(async (result) => {

//       if (result.isConfirmed) {

//         const newTitle = document.getElementById("edit-title").value.trim();
//         const newDesc = document.getElementById("edit-desc").value.trim();

//         if (!newTitle || !newDesc) {
//           Swal.fire("Error", "Title and description cannot be empty", "error");
//           return;
//         }

//         // 👉 Supabase UPDATE (Edit)
//         const { error } = await supabase
//           .from("posts")
//           .update({
//             title: newTitle,
//             description: newDesc
//           })
//           .eq("id", post.id)

//         if (error) {
//           Swal.fire("Error", error.message, "error")
//           return
//         }

//         // 👉 Screen par bhi update karo
//         postCard.querySelector(".card-title").textContent = newTitle;
//         postCard.querySelector(".card-text").textContent = newDesc;

//         Swal.fire("Updated!", "Your post has been updated.", "success");
//       }
//     });
//   });
// }



// // ================= CREATE POST =================

// var backgroundImg = "";

// async function post() {

//   var title = document.getElementById("title").value.trim();
//   var description = document.getElementById("description").value.trim();

//   if (!title || !description) {
//     Swal.fire({
//       icon: "error",
//       title: "😥 Empty Post...",
//       text: "Enter title & description",
//     });
//     return;
//   }

//   // 👉 Current logged-in user ka id lo (RLS ke liye zaroori)
//   const { data: { user } } = await supabase.auth.getUser()

//   // 👉 Supabase INSERT (Create Post)
//   const { data, error } = await supabase
//     .from("posts")
//     .insert([
//       {
//         title,
//         description,
//         image_url: backgroundImg,
//         user_id: user.id
//       }
//     ])
//     .select()   // 👉 inserted row wapas milti hai

//   if (error) {
//     Swal.fire("Error", error.message, "error")
//     return
//   }

//   // 👉 New post screen par show karo
//   displayPost(data[0])

//   // 👉 Input clear
//   document.getElementById("title").value = "";
//   document.getElementById("description").value = "";
// }



// // ================= LOAD POSTS (READ) =================

// async function loadPosts() {
//     // console.log("kod post");
    

//   // 👉 Supabase se posts fetch
//   const { data, error } = await supabase
//     .from("posts")
//     .select("*")
//     .order("created_at", { ascending: false })

//   if (error) {
//     console.log(error)
//     return
//   }

//   // 👉 Har post screen par show
//   data.forEach(post => displayPost(post))
// }



// // ================= OTHER FUNCTIONS (same) =================

// function selectImg(src) {
//   backgroundImg = src;

//   const bgImgs = document.getElementsByClassName("bgImg");
//   for (let i = 0; i < bgImgs.length; i++) {
//     bgImgs[i].classList.remove("selectedImg");
//   }

//   event.target.classList.add("selectedImg");
// }


// // document.addEventListener("DOMContentLoaded", () => {

// //   loadPosts()   // 👉 Page load par posts load karo

// //   const userName = localStorage.getItem("userName");
// //   const userNameDisplay = document.getElementById("userNameDisplay");
// //   const profileImage = document.getElementById("profileImage");

// //   userNameDisplay.textContent = userName || "Guest";

// //   // Profile image logic same
// //   profileImage.addEventListener("click", () => {
// //     const input = document.createElement("input");
// //     input.type = "file";
// //     input.accept = "image/*";

// //     input.addEventListener("change", (event) => {
// //       const file = event.target.files[0];
// //       if (file) {
// //         const reader = new FileReader();
// //         reader.onload = (e) => {
// //           profileImage.src = e.target.result;
// //           localStorage.setItem("profilePic", e.target.result);
// //         };
// //         reader.readAsDataURL(file);
// //       }
// //     });

// //     input.click();
// //   });

// //   const savedPic = localStorage.getItem("profilePic");
// //   if (savedPic) profileImage.src = savedPic;
// // });


// // document.addEventListener("DOMContentLoaded", () => {

// //   // 👉 Page load par posts load karo
// //   loadPosts();


// //   // ===============================
// //   // USER NAME DISPLAY
// //   // ===============================

// //   const userName = localStorage.getItem("userName") || "Guest";
// //   const userNameDisplay = document.getElementById("userNameDisplay");

// //   if (userNameDisplay) {
// //     userNameDisplay.textContent = userName;
// //   }


// //   // ===============================
// //   // PROFILE IMAGE UPLOAD
// //   // ===============================

// //   const profileImage = document.getElementById("profileImage");

// //   if (profileImage) {

// //     profileImage.addEventListener("click", () => {

// //       const input = document.createElement("input");
// //       input.type = "file";
// //       input.accept = "image/*";

// //       input.addEventListener("change", (event) => {

// //         const file = event.target.files[0];

// //         if (file) {
// //           const reader = new FileReader();

// //           reader.onload = (e) => {
// //             profileImage.src = e.target.result;

// //             // 👉 LocalStorage me save karo
// //             localStorage.setItem("profilePic", e.target.result);
// //           };

// //           reader.readAsDataURL(file);
// //         }

// //       });

// //       input.click();
// //     });

// //     // 👉 Saved profile pic load karo
// //     const savedPic = localStorage.getItem("profilePic");

// //     if (savedPic) {
// //       profileImage.src = savedPic;
// //     }

// //   }

// // });

// // // ___logout function____

// // async function logout() {

// //   await supabase.auth.signOut();

// //   localStorage.clear();

// //   window.location.href = "/index.html";
// // }




// document.addEventListener("DOMContentLoaded", () => {
//   // 👉 Load existing posts
//   if (typeof loadPosts === "function") {
//     loadPosts();
//   }

//   // ===============================
//   // USER DATA & NAVBAR DISPLAY
//   // ===============================
//   const userNameDisplay = document.getElementById("userNameDisplay");
//   const profileImage = document.getElementById("profileImage");
//   const logoutBtn = document.getElementById("logoutBtn");

//   // Get data from localStorage
//   const storedName = localStorage.getItem("userName");
//   const savedPic = localStorage.getItem("profilePic");

//   // Update Navbar Name: Show name if exists, else "Guest"
//   if (userNameDisplay) {
//     userNameDisplay.textContent = storedName ? storedName : "Guest";
//   }

//   // Load Saved Profile Pic if it exists
//   if (profileImage && savedPic) {
//     profileImage.src = savedPic;
//   }

//   // ===============================
//   // LOGOUT LOGIC
//   // ===============================
// //   if (logoutBtn) {
// //     // Hide logout button if user is just a Guest
// //     logoutBtn.style.display = storedName ? "block" : "none";

// //     logoutBtn.addEventListener("click", () => {
// //       // Clear specific user data
// //       localStorage.removeItem("userName");
// //       localStorage.removeItem("profilePic");
      
// //       // Refresh the page to update UI
// //       window.location.reload();
// //     });
// //   }


// // This function handles the logout process
// async function logoutUser() {
//     // 1. Clear the saved data
//     localStorage.removeItem("userName");
//     localStorage.removeItem("profilePic");

//     // 2. Optional: Show a goodbye message
//     alert("are you sure you want to logged out!");

//     await supabase.auth.signOut();

//  localStorage.clear();

//    window.location.href = "/index.html";
//     // 3. Redirect to login page or refresh
//     // window.location.href = "./index.html"; // Change this to your login page name
//     // // ___logout function____

// // async function logout() {

// //   
// // }
// }

// // 👉 CRITICAL STEP: This connects the function to the HTML "onclick"
// window.logout = logoutUser;

//   // ===============================
//   // PROFILE IMAGE UPLOAD
//   // ===============================
//   if (profileImage) {
//     profileImage.addEventListener("click", () => {
//       const input = document.createElement("input");
//       input.type = "file";
//       input.accept = "image/*";

//       input.addEventListener("change", (event) => {
//         const file = event.target.files[0];
//         if (file) {
//           const reader = new FileReader();
//           reader.onload = (e) => {
//             profileImage.src = e.target.result;
//             // Save to LocalStorage
//             localStorage.setItem("profilePic", e.target.result);
//           };
//           reader.readAsDataURL(file);
//         }
//       });
//       input.click();
//     });
//   }
// });

// // 👉 Call this function on your Login Page when the user submits their name
// function saveLoginSession(name) {
//   localStorage.setItem("userName", name);
// }
// window.saveLoginSession = saveLoginSession
// window.selectImg = selectImg;
// window.logout = logout;
// window.
// window.loadPosts = loadPosts




import { supabase } from "./supabase.js"

// ================= DISPLAY POST =================

function displayPost(post) {
  var postContainer = document.getElementById("posts");

  var postCard = document.createElement("div");
  postCard.classList.add("card", "m-2");
  postCard.style.padding = "15px";

  if (post.image_url) {
    postCard.style.backgroundImage = `url(${post.image_url})`;
    postCard.style.backgroundSize = "cover";
    postCard.style.backgroundPosition = "center";
    postCard.style.color = "white";
  }

  postCard.innerHTML = `
    <div class="card-header post-header" style="background: rgba(0,0,0,0.5);">
      <img src="Post_App_Logo_Red_and_Royal_Blue-removebg-preview.png" height="47" width="47">
    </div>
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${post.description}</p>
    </div>
    <div class="ms-auto m-2">
      <button class="btn btn-success edit-btn">Edit</button>
      <button class="btn btn-danger delete-btn">Delete</button>
    </div>
  `;

  postContainer.appendChild(postCard);

  // ================= DELETE POST =================
  postCard.querySelector(".delete-btn").addEventListener("click", async function () {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error } = await supabase
          .from("posts")
          .delete()
          .eq("id", post.id)

        if (error) {
          Swal.fire("Error", error.message, "error")
          return
        }

        postCard.remove()
        Swal.fire("Deleted!", "Your post has been removed.", "success");
      }
    });
  });

  // ================= EDIT POST =================
  postCard.querySelector(".edit-btn").addEventListener("click", function () {
    Swal.fire({
      title: "Edit your post",
      html: `
        <input id="edit-title" class="swal2-input" value="${post.title}">
        <textarea id="edit-desc" class="swal2-textarea">${post.description}</textarea>
      `,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const newTitle = document.getElementById("edit-title").value.trim();
        const newDesc = document.getElementById("edit-desc").value.trim();

        if (!newTitle || !newDesc) {
          Swal.fire("Error", "Title and description cannot be empty", "error");
          return;
        }

        const { error } = await supabase
          .from("posts")
          .update({ title: newTitle, description: newDesc })
          .eq("id", post.id)

        if (error) {
          Swal.fire("Error", error.message, "error")
          return
        }

        postCard.querySelector(".card-title").textContent = newTitle;
        postCard.querySelector(".card-text").textContent = newDesc;

        Swal.fire("Updated!", "Your post has been updated.", "success");
      }
    });
  });
}

// ================= CREATE POST =================

var backgroundImg = "";

async function post() {
  var title = document.getElementById("title").value.trim();
  var description = document.getElementById("description").value.trim();

  if (!title || !description) {
    Swal.fire({
      icon: "error",
      title: "😥 Empty Post...",
      text: "Enter title & description",
    });
    return;
  }

  // ✅ FIX: Get currently logged-in user
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    Swal.fire("Error", "You must be logged in to post.", "error")
    return
  }

  const { data, error } = await supabase
    .from("posts")
    .insert([{
      title,
      description,
      image_url: backgroundImg,
      user_id: user.id
    }])
    .select()

  if (error) {
    Swal.fire("Error", error.message, "error")
    return
  }

  displayPost(data[0])

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

// ================= LOAD POSTS =================

async function loadPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; // ✅ Clear old posts before reloading

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.log(error)
    return
  }

  data.forEach(post => displayPost(post))
}

// ================= SELECT BG IMAGE =================

function selectImg(src) {
  backgroundImg = src;

  const bgImgs = document.getElementsByClassName("bgImg");
  for (let i = 0; i < bgImgs.length; i++) {
    bgImgs[i].classList.remove("selectedImg");
  }

  event.target.classList.add("selectedImg");
}

// ================= LOGOUT =================

async function logout() {
  const confirmed = confirm("Are you sure you want to log out?");
  if (!confirmed) return;

  await supabase.auth.signOut();
  localStorage.clear();
  window.location.href = "/index.html";
}

// ================= DOM READY =================

document.addEventListener("DOMContentLoaded", async () => {

  // Load posts on page load
  loadPosts();

  const userNameDisplay = document.getElementById("userNameDisplay");
  const profileImage = document.getElementById("profileImage");

  // ✅ FIX: Get username from Supabase auth, fallback to localStorage
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    // Try to get display name from user metadata, then email, then localStorage
    const name =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      localStorage.getItem("userName") ||
      user.email ||
      "Guest";

    if (userNameDisplay) userNameDisplay.textContent = name;

    // Save to localStorage so it persists
    localStorage.setItem("userName", name);
  } else {
    // Not logged in — redirect to login
    window.location.href = "/index.html";
    return;
  }

  // Restore saved profile pic
  const savedPic = localStorage.getItem("profilePic");
  if (profileImage && savedPic) {
    profileImage.src = savedPic;
  }

  // Profile image upload on click
  if (profileImage) {
    profileImage.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            profileImage.src = e.target.result;
            localStorage.setItem("profilePic", e.target.result);
          };
          reader.readAsDataURL(file);
        }
      });

      input.click();
    });
  }
});

// ================= EXPOSE TO WINDOW =================
// ✅ FIX: All functions used in HTML onclick must be on window
window.post = post;
window.loadPosts = loadPosts;
window.selectImg = selectImg;
window.logout = logout;