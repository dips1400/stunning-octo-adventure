// Name and Password from the register-form
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;


function check() {

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    // check if stored data from register-form is equal to data from login form
    if((!email == storedEmail && password == storedPassword)) {
        alert('error');
    }else {
        window.location.href="medical-centric.html";
        alert('You are loged in.');
    }
}

const button = document.querySelector("button");

button.addEventListener("click",check);