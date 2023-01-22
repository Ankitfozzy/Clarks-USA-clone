
let userData = JSON.parse(localStorage.getItem("userData")) || []; 

let form = document.querySelector(".login");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    let flag = false;

    userData.forEach(element => {
        if(email===element.email && password===element.password){
            flag = true;
            window.location.href='index.html';
        }        
    });
    if(flag==false){
        alert("Wrong Credentials");
        form.reset();
    }
});