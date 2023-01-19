
let userData = JSON.parse(localStorage.getItem("userData")) || []; 

let form = document.querySelector(".login");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    userData.forEach(element => {
        if(email===element.email && password===element.password){
            window.location.href='index.html';
        }        
    });
    let pre = document.createElement("p");
    pre.textContent = "Wrong Credentials";
    form.append(pre);
    form.reset();
});