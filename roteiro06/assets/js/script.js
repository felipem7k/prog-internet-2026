const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (nome.length < 3) {
        alert("Nome deve ter 3 ou mais caracteres!");
        return;
    }

    if (!email.includes("@")) {
        alert("E-mail inválido!");
        return;
    }

    mensagemSucesso.textContent = "Formulário enviado com sucesso!";
    alert(`Obrigado por entrar em contato, ${nome}! Responderemos em breve para o email: ${email}`);
});