const loginSalvo = "Alura";
const senhaSalva = "12345";

const avisoLogin = document.querySelector('.aviso-login');
const avisoSenha = document.querySelector('.aviso-senha');


const login = document.querySelector('#login');
const senha = document.querySelector('#password');
const botao = document.querySelector('.login__main__button');

const verificaLogin = (login) => {
    if (login == loginSalvo) {
        avisoLogin.classList.add('esconde-aviso');
        return true;
    }
    avisoLogin.classList.remove('esconde-aviso');
}

const verificaSenha = (senha) => {
    if(senha == senhaSalva) {
        avisoSenha.classList.add('esconde-aviso');
        return true;
    }
    avisoSenha.classList.remove('esconde-aviso');
}

const verificaUsuario = (login, senha) => {
    verificaLogin(login);
    verificaSenha(senha);
    if (verificaLogin(login) && verificaSenha(senha)) {
        window.location.href = 'logado.html';
    }
}

botao.addEventListener('click', (e) => {
    e.preventDefault();
    verificaUsuario(login.value, senha.value)
    
});

