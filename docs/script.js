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

function captureEmailValue() {
    // Obtenha o valor do campo de entrada com a classe "email"
    var emailValue = document.querySelector('.email').value;

    // Use a variável conforme necessário
    console.log(emailValue);
}

function capturePasswordValue() {
    // Obtenha o valor do campo de entrada com a classe "email"
    var passValue = document.querySelector('.password').value;

    // Use a variável conforme necessário
    console.log(passValue);
}