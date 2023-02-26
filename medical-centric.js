
let user_records = new Array();
var storedEmail = localStorage.getItem('email');

//var myFormData = new formData();

function addData() {
    var mobno = document.getElementById("mobno").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var dob = document.getElementById("dob").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var country = document.getElementById("country").value;
    var diabetic = document.querySelector('input[name=daibetic]:checked').value;
    var cardiac = document.querySelector('input[name=cardiac]:checked').value;
    var bloodpressure = document.querySelector('input[name=bloodpressure]:checked').value;
    var diseasetype = document.getElementById('diseasetype').value;
    var descp = document.getElementById('descp').value;



    //let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("patients")) ? JSON.parse(localStorage.getItem("patients")) : [];

    user_records.push({
        //"first_name": first_name,
        //"last_name": last_name,
        "mobno": mobno,
        "dob": dob,
        "weight": weight,
        "height": height,
        "country": country,
        "diabetic": diabetic,
        "cardiac": cardiac,
        "bloodpressure": bloodpressure,
        "diseasetype": diseasetype,
        "descp": descp
    });

    localStorage.setItem('patients', JSON.stringify(user_records));
}


function addPersonalData() {

    var father_name = document.getElementById("father_name").value;
    var father_age = document.getElementById("father_age").value;
    var father_country = document.getElementById("father_country").value;
    var mother_name = document.getElementById("mother_name").value;
    var mother_age = document.getElementById("mother_age").value;
    var pdiabetic = document.querySelector('input[name=pdaibetic]:checked').value;
    var pcardiac = document.querySelector('input[name=pcardiac]:checked').value;
    var pbloodpressure = document.querySelector('input[name=pbloodpressure]:checked').value;

    //let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("patients")) ? JSON.parse(localStorage.getItem("patients")) : [];



    user_records.push({
        "father_name": father_name,
        "father_age": father_age,
        "father_country": father_country,
        "mother_name": mother_name,
        "mother_age": mother_age,
        "pdiabetic": pdiabetic,
        "pcardiac": pcardiac,
        "pbloodpressure": pbloodpressure
    });


    localStorage.setItem("patientsPersonal", JSON.stringify(user_records));



}



function addDocuments() {

    var front_aadhar = document.getElementById("front_aadhar").value;
    var back_aadhar = document.getElementById("back_aadhar").value;
    var front_pan = document.getElementById("front_pan").value;
    var back_pan = document.getElementById("back_pan").value;

    //let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("patientsPersonal")) ? JSON.parse(localStorage.getItem("patientsPersonal")) : [];



    user_records.push({
        "front_aadhar": front_aadhar,
        "back_aadhar": back_aadhar,
        "front_pan": front_pan,
        "back_pan": back_pan
    });


    localStorage.setItem("patientsIdentity", JSON.stringify(user_records));

    //location.reload();
}


function showData() {
    document.getElementById('showContent').innerHTML = localStorage.getItem('patientsIdentity');

    /*var key = localStorage.getItem("patientsIdentity");
    var value = localStorage.getItem(key)
    for (var i = 0; i < user_records.length; i++) {
        document.getElementById("showContent").innerHTML += value;
    }*/

   /* var datacount = localStorage.length;
    if (datacount > 0)
    {
        var render = "<table border='1'>";
        render += "<tr><th>First Name</th><th>Last Name</th><th>Mobile No</th><th>Date of Birth</th><th>Weight</th><th>Height</th><th>Country of origin</th><th>Diabetic</th><th>cardiac </th><th>blood pressure</th><th>Disease type</th><th>Disease desc</th></tr>";

           // var key = localStorage.key('patientsIdentity'); //Get  the Key
           // var patients = localStorage.getItem(key); //Get Data from Key
           // var data = JSON.parse(patients); //Parse the Data back into the object
           var patients = localStorage.getItem('patientsIdentity');
           var data = JSON.parse(patients);
            render += "<tr><td>" + data.first_name + "</td>";
            /*render += "<td>" + data.last_name + " </td>";
            render += "<td>" + data.mobno + "</td>";
            render += "<td>" + data.dob + "</td>";
            render += "<td>" + data.weight + "</td>";
            render += "<td>" + data.height + "</td>";
            render += "<td>" + data.Occupation + "</td>";
            render += "<td>" + data.country + "</td>";
            render += "<td>" + data.diabetic + "</td></tr>";
        
        render+="</table>";
        showContent.innerHTML = render;
    }*/
   
    /*console.log(user_records.length);
    var key = localStorage.key("patientsIdentity");
    var data = localStorage.getItem(key);
    console.log(data);
    for (var i = 0; i <= data.length; i++) {
        //document.getElementsByName("").innerText = dataValues[i];
        document.getElementById("showContent").innerHTML = data[i];
    }*/


}




const viewdata = document.querySelector('#viewdata');

viewdata.addEventListener("click", showData);

