











// let button=document.querySelectorAll(".accordion-button");
// // let content =document.querySelectorAll(".content")

// button.forEach(button =>{
//     button.addEventListener("click",()=>{
//         button.classList.toggle("para");

  
// })

// });


// let buttons = document.querySelectorAll(".accordion-button");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
    
//         document.querySelectorAll(".content").forEach(content => {
//             content.style.display = "none"; // Hide all content
//         });

//         // Toggle the content of the clicked button
//         let content = button.nextElementSibling;
//         if (content.style.display === "none" || content.style.display === "") {
//             content.style.display = "block"; // Show the content if it's currently hidden
//         }
//     });
// });


document.querySelectorAll("button").forEach(button => {
    button.onclick = () => {
        const content = button.nextElementSibling;
        document.querySelectorAll("div > div").forEach(c => c.style.display = "none");
        content.style.display = content.style.display === "block" ? "none" : "block";
    };
});

const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');


form.addEventListener('submit',(e)=>{
const namevalue = name.value.trim();
const emailvalue = email.value.trim();
const phonevalue = phone.value.trim();
const passwordvalue = password.value.trim();

if(namevalue==""){
    e.preventDefault();
    alert("please provide a name");
    name.focus();
    return false;
}

if(!isNaN (namevalue)){
    e.preventDefault();
    alert("please provide a vaild name");
    name.focus();
    return false;
}

if(phonevalue==""){
    e.preventDefault();
    alert("please provide a phone");
    phone.focus();
    return false;
}
if(phonevalue.length<10 || phonevalue.length>10 ){
    e.preventDefault();
    alert("please provide a valid number phone");
    phone.focus();
    return false;
}

if(emailvalue==""){
    e.preventDefault();
    alert("please provide a email");
    email.focus();
    return false;
}

if(passwordvalue==""){
    e.preventDefault();
    alert("please provide a password ");
    password.focus();
    return false;
}
if(passwordvalue.length<5){
    e.preventDefault();
    alert("please provide a valid  password");
    password.focus();
    return false;
}
alert('data saveds successfully')

})




// const form =document.querySelector("#form");
// const name =document.querySelector("#name");
// const email =document.querySelector("#email");
// const phone =document.querySelector("#phone");
// const password =document.querySelector("#password");

// form.addEventListener("submit",(e) => {
//     const namevalue =name.value.trim();
//     const emailvalue =email.value.trim();
//     const phonevalue =phone.value.trim();
//     const passwordvalue =password.value.trim();

//     if(namevalue==""){
//         e.preventDefualt();
//         alert("please provide the name!");
//         name.focus();
//         return false;
//     }

//     if(!isNaN(namevalue)){
//         e.preventDefualt();
//         alert("please provide a valid name!");
//         name.focus();
//         return false;
//     }

//     if(emailvalue==""){
//         e.preventDefualt();
//         alert("please provide an email!");
//         email.focus();
//         return false;
//     }

//     if(phonevalue==""){
//         e.preventDefualt();
//         alert("please provide the phone number!");
//         phone.focus();
//         return false;
//     }

//     if(phonevalue.length<10 ||phonevalue.length>10){
//         e.preventDefualt();
//         alert("please provide the phone number!");
//         phone.focus();
//         return false;
//     }

//     if(passwordvalue==""){
//         e.preventDefualt();
//         alert("please provide the password!");
//         password.focus();
//         return false;
//     }

//     if(passwordvalue.length<5){
//         e.preventDefualt();
//         alert("password can't be less than 5 digits");
//         password.focus();
//         return false;

//     }
// localStorage.setItem('name', nameValue);
//     localStorage.setItem('email', emailValue);
//     localStorage.setItem('phone', phoneValue);
//     localStorage.setItem('password', passwordValue);
//     alert("data saved successfully")

// });


// const form = document.querySelector('#form');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const phone = document.querySelector('#phone');
// const password = document.querySelector('#password');


// form.addEventListener('submit',(e)=>{
// const namevalue = name.value.trim();
// const emailvalue = email.value.trim();
// const phonevalue = phone.value.trim();
// const passwordvalue = password.value.trim();

// if(namevalue==""){
//     e.preventDefault();
//     alert("please provide a name");
//     name.focus();
//     return false;
// }

// if(!isNaN (namevalue)){
//     e.preventDefault();
//     alert("please provide a vaild name");
//     name.focus();
//     return false;
// }

// if(phonevalue==""){
//     e.preventDefault();
//     alert("please provide a phone");
//     phone.focus();
//     return false;
// }
// if(phonevalue.length<10 || phonevalue.length>10 ){
//     e.preventDefault();
//     alert("please provide a valid number phone");
//     phone.focus();
//     return false;
// }

// if(emailvalue==""){
//     e.preventDefault();
//     alert("please provide a email");
//     email.focus();
//     return false;
// }

// if(passwordvalue==""){
//     e.preventDefault();
//     alert("please provide a password ");
//     password.focus();
//     return false;
// }
// if(passwordvalue.length<5){
//     e.preventDefault();
//     alert("please provide a valid  password");
//     password.focus();
//     return false;
// }
// alert('data saveds successfully')

// })

// localStorage

// localStorage.setItem('name', nameValue);
//     localStorage.setItem('email', emailValue);
//     localStorage.setItem('phone', phoneValue);
//     localStorage.setItem('password', passwordValue);