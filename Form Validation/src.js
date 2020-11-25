function disubmit(event){
    
    let form = document.getElementById("form");
    let nama = form.nama.value;
    let email = form.email.value;
    let waktu = form.waktu.value;
    let tujuan = form.tujuan.value;
    let tiket = form.tiket.value;
    let nama_blank = document.getElementById("nama-blank");
    let nama_invalid = document.getElementById("nama-invalid");
    let waktu_blank = document.getElementById("waktu-blank");
    let tujuan_blank = document.getElementById("tujuan-blank");

    const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const event_default = event.preventDefault();

    if (nama == ""){
        alert("Must Be Filled");
        console.log("Form Kosong");
        nama_blank.hidden = false;
        event_default;
    }
    if (nama.length >= 30){
        alert("Nama Max 30 Character");
        console.log("MAX 30 Character");
        nama_invalid.hidden = false;
        event_default;
    }
    if (email == ""){
        alert("Must Be Filled");
        console.log("Form Kosong");
    }
    if (!(regex_email.test(String(email)))){
        alert("Invalid Email Format");
        console.log("Invalid Email Format");
    }    
    if (waktu == ""){
        alert("Must Be Filled");
        console.log("Form Kosong");
        waktu_blank.hidden = false;
        event_default;
    }
    if (tujuan == ""){
        alert("Must Be Filled");
        console.log("Form Kosong");
        tujuan_blank.hidden = false;
        event_default;
    }
    if (tiket == ""){
        alert("Must Be Filled");
        console.log("Form Kosong");
    }
    if (parseInt(tiket) < 0 || parseInt(tiket) > 10 ){
        alert("Invalid tiket value");
        console.log("Form Kosong");
    }
    // if (/^[0-9]+$/.test(tiket)){
    //     alert("Dont Fill This Form Blank");
    //     console.log("Form Kosong");
    // }
}