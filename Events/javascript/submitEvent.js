// submit event
let getVal = document.getElementById('userForm')
getVal.addEventListener('submit',function(e){
    e.preventDefault();
    let uname = document.getElementById("getName")
    let upass = document.getElementById("getpwd")

    if (uname.value == "" || upass.value == "") {
        console.log("Please fill UserName and Password !");
    }else{
        console.log("This form has been successfully submitted!");
        console.log(`This form has a username of ${uname.value} and password of ${upass.value}`);
        uname.value = "";
        upass.value = "";
    }
})