let user_records = new Array();
var storedEmail = localStorage.getItem('email');

/*var first_name = document.getElementById('first_name').value;
var last_name = document.getElementById('last_name').value;
var email_id = document.getElementById('email').value;
var password = document.getElementById('password').value;*/

function registered(){
    
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    user_records = JSON.parse(localStorage.getItem("patients")) ? JSON.parse(localStorage.getItem("patients")) : [];

    if(storedEmail == null){
    
        console.log("hi from first if");
        if((email === storedEmail )){
            console.log("hi from second if");
        alert("User already exist.Please try another mailid?");
        }
        else{
            //alert("User already exist.Please try another mailid?");
            user_records.push({
                "first_name":first_name,
                "last_name":last_name,
                "email":email,
                "password":password
            });
    
            localStorage.setItem('patients', JSON.stringify(user_records));
    
            alert("You are now registered..!!!");
    
            console.log("hello")
    
            window.location.href="login.html";
        }
    }
    else{
        alert("User already exist.Have you already registere?");
        console.log("hello from else");
        //window.location.href="register.html";
    }
    //store values in array form
    //let user_records = new Array();
    //user_records = JSON.parse(localStorage.getItem("patients"))?JSON.parse(localStorage.getItem("patients")) : [];

    //user_records = JSON.parse(localStorage.getItem("patients"));

    /*user_records=({
        first_name:first_name,
        last_name:last_name,
        email:email_id,
        password:password
    })*/


}

const button = document.querySelector("button");

button.addEventListener("click",registered);
