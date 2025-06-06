function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const status = document.getElementById("msg-status");

    if (nome.length < 3) {
        status.innerText = "⚠️ O nome precisa ter ao menos 3 caracteres.";
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        status.innerText = "⚠️ Por favor, insira um e-mail válido.";
        return false;
    }
    if (mensagem.length < 10) {
        status.innerText = "⚠️ A mensagem deve ter pelo menos 10 caracteres.";
        return false;
    }
    status.innerText = "✅ Mensagem enviada com sucesso!";
    return false;
}