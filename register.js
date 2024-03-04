console.log("Hello World.", 43, 409.23, true, false, ["banana", "apple", "orange"]);

console.log(typeof("Hello World."), typeof (342334), typeof(["banana"]))

//string = "asd"

let btnRegister = document.querySelector('#btnRegister');
let txtUsernsmer = document.querySelector("#txtUsername");
let txtPassword = document.querySelector("#txtPassword");
let txtConfirmPassword = document.querySelector("#txtConfirmPassword");
let txtAge = document.querySelector("#txtAge");

btnRegister.onclick = function() {
register(txtUsername.value, txtPassword.value, txtConfirmPassword.value, txtAge.value);
}

function register (username, password, confirmPassword, age) {
    alert(username);  
    //alert("Register button has been clicked.")

}