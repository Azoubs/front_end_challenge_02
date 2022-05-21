const abreModal = document.querySelectorAll('.open_modal')
const fechaModal = document.querySelector('.index__modal__sair')
const modal = document.querySelector('.index__modal')
const modalProduto = document.querySelector('.index__modal__produto');

// const readProd = () => getLocalStorage();
const listaProdutos = readProd();
const imagensListadas = [];

listaProdutos.forEach((produto) => {
    imagensListadas.push(produto.img);
});

abreModal.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        modal.classList.remove('invisivel');
        let pai = e.target.parentElement;
        let filho = pai.querySelector('.id').innerText;
        console.log(filho);
        let produto =  listaProdutos[filho]
    
        const setaImagem = () => produto.img;
        console.log(setaImagem())

        modalProduto.innerHTML = `
            <img src="${imagensListadas[filho]}" class="index__modal__produto__img">
            <p class="index__modal__nome">${produto.nome}</p>
			<p class="index__modal__preco">R$ ${produto.preco},00</p>
			<p class="index__modal__descricao">${produto.descricao}</p>
        `        
    });
});

fechaModal.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('invisivel');
})