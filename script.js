let btn = document.querySelector("#delivery-btn");

function redirectBtn() {
    window.location = "delivery.html";
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