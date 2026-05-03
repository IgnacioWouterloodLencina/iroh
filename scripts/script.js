document.getElementById("Login").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!"
});