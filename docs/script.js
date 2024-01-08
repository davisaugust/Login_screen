const btn = document.querySelector('#send_btn');


function redirectPage(){
    var email = document.querySelector('.email').value;
    var pass = document.querySelector('.password').value;
    if (email !== "" && pass !== ""){
        window.location.href = "index.html";
    } else{
        alert('Por favor, preencha os dois campos corretamente.');
    }
}