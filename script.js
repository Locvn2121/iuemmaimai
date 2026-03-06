function checkPass(){

var pass = document.getElementById("pass").value;

if(pass == "yeuem"){
location.href = "page1.html";
}

else if(pass == "voanh"){
location.href = "page2.html";
}

else{
alert("Sai mật khẩu rồi :(");
}

}
