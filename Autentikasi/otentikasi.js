function autentikasi(){

    let form = document.getElementById("form");
    let username = form.username.value;
    let password = form.password.value;

    if(username == "ahmad2017" && password == "integrity"){
        alert("Login Berhasil");
        document.getElementById("form");
        form.innerHTML = "Login Berhasil"
    }
    else{
        alert("Login Gagal");
    }
    
}