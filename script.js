

// JavaScript
function nameValidate() {
    var usernameInput = document.getElementById('username');
    var usernameError = document.getElementById('usernameError');
    if(usernameInput.value == "") {
        usernameInput.classList.add('input-error');
        usernameError.textContent = "Por favor, preencha o campo nome.";
    } else {
        usernameInput.classList.remove('input-error');
        usernameError.textContent = "";
    }
}


// JavaScript
function emailValidate() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(emailInput.value == "") {
        emailInput.classList.add('input-error');
        emailError.textContent = "Por favor, preencha o campo email.";
    } else if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('input-error');
        emailError.textContent = "Por favor, insira um email válido.";
    } else {
        emailInput.classList.remove('input-error');
        emailError.textContent = "";
    }
}

// JavaScript funçao ver senha
document.getElementById('toggleSenha').addEventListener('click', function () {
    var senhaInput = document.getElementById('senha');
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        senhaInput.type = "password";
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});

// JavaScript
function senhaValidate() {
    var senhaInput = document.getElementById('senha');
    var senhaError = document.getElementById('senhaError');

    if(senhaInput.value == "") {
        senhaInput.classList.add('input-error');
        senhaError.textContent = "Por favor, preencha o campo senha.";
    } else if (senhaInput.value.length < 8) {
        senhaInput.classList.add('input-error');
        senhaError.textContent = "A senha deve ter pelo menos 8 caracteres.";
    } else {
        senhaInput.classList.remove('input-error');
        senhaError.textContent = "";
    }
}

// JavaScript
function userValidate() {
    var usernameInput = document.getElementById('user');
    var usernameError = document.getElementById('userError');

    if(usernameInput.value == "") {
        usernameInput.classList.add('input-error');
        usernameError.textContent = "Por favor, preencha o campo nome de usuário.";
    } else {
        usernameInput.classList.remove('input-error');
        usernameError.textContent = "";
    }
}


// Seleciona os botões pelo ID
var btnCadastrar = document.getElementById('btn');
var btnEntrar = document.getElementById('button');

// Função para validar o botão Cadastrar
btnCadastrar.addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(nome == "" || email == "" || senha == "") {
        alert("Por favor, preencha todos os campos para se cadastrar.");
        return false;
    } else {
        // Aqui você pode adicionar a lógica para cadastrar o usuário
        alert("Usuário cadastrado com sucesso!");
    }
});

// Função para validar o botão Entrar
btnEntrar.addEventListener('click', function() {
    var email = document.getElementById('emailLogin').value;
    var senha = document.getElementById('senhaLogin').value;

    if(email == "" || senha == "") {
        alert("Por favor, preencha todos os campos para entrar.");
        return false;
    } else {
        // Aqui você pode adicionar a lógica para autenticar o usuário
        alert("Usuário autenticado com sucesso!");
    }
});

// JavaScript
var comentarios = [];

function postarComentario() {
    var textoComentario = document.getElementById('textoComentario').value;
    comentarios.push(textoComentario);

    document.getElementById('textoComentario').value = '';
    alert('Comentário adicionado com sucesso!');
}



