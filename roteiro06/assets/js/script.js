const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");
const btnAlerta = document.querySelector("#btn-alerta");
const btnCor = document.querySelector("#btn-cor");
const btnConteudo = document.querySelector("#btn-conteudo");

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

btnAlerta.addEventListener("click", function() {
    alert("Este é um alerta!");
});

btnCor.addEventListener("click", function() {
    const colors = ["lightblue", "lightgreen", "lightyellow", "lightcoral", "lightgray", "lightpink", "lightseagreen", "lightsteelblue", "lightgoldenrodyellow", "lightcyan", "lightSalmon", "lightSkyBlue", "lightSlateGray", "lightYellowGreen", "lightBlueViolet", "lightCoral", "lightGreenYellow", "lightPink", "lightSeaGreen", "lightSteelBlue"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

btnConteudo.addEventListener("click", function() {
    mensagemSucesso.textContent = "O conteúdo foi alterado!";
});