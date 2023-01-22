
let userData = JSON.parse(localStorage.getItem("userData")) || []; 

let form = document.querySelector("form");
let button = document.getElementById("signupbtn");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        email : document.getElementById("email").value,
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        password : document.getElementById("pass").value,
    }

    userData.push(obj);
    localStorage.setItem("userData",JSON.stringify(userData));
    alert("Account Created");
    form.reset();

    
    
});