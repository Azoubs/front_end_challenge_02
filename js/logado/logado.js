const botaoAdicionar = document.querySelector('.main__logado__adiciona');
const botaoEditar = document.querySelector('.main__logado__edita');



botaoAdicionar.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'adicionaProduto.html';
})

botaoEditar.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'editaProduto.html';
})