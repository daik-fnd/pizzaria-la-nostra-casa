let btn = document.querySelector("#delivery-btn");

function redirectBtn() {
    var win = window.open("https://wa.me/551140028922?text=Agradecemos+a+prefer%C3%AAncia%2C+como+podemos+te+ajudar%3F", target="_blank");
    win.focus();
}

// Form

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let textArea = document.querySelector("#messageText");
let select = document.querySelector("#select");
let btnEnviar = document.querySelector("#btn-enviar");
let form = document.querySelector("#form");

form.addEventListener("submit", (event) => {

    // verifica os campos
    event.preventDefault();
    if (username.value === "") {
        alert("Por favor, preencha o seu nome antes de continuar.");
        return;
    }

    if (email.value === "" || !validaEmail(email.value)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (textArea.value === "") {
        alert("Por favor, não envie mensagens em branco.");
        return;
    }

    if (select.value === ""){
        alert("Por favor, especifique o tipo de comentário.");
        return;
    }
    
    // se tudo estiver certo, envia o form
    form.submit();
});

// Função que valida email
function validaEmail(emailInput) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(emailInput)) {
        return true;
    }

    return false;
}