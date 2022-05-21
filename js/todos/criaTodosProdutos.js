const galeria = document.querySelector('.main__todos__galeria');

let id = 0;

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_prods')) ?? [];
const setLocalStorage = (dbProds) => localStorage.setItem("db_prods", JSON.stringify(dbProds));

const readProd = () => getLocalStorage();
let produtosCadastrados = readProd();

const criaProduto = (pai, produto, classe) => {
    let elemento = document.createElement('div');
    pai.appendChild(elemento);
    elemento.classList.add(classe);
    elemento.innerHTML = `
        <img src="${produto.img}" class="todos__galeria__card_imagem">
        <p class="id" >${id}</p>
        <p class="todos__galeria__card_nome">${produto.nome}</p>
        <p class="todos__galeria__card_preco">R$ ${produto.preco},00</p>
        <p class="todos__galeria__card_desc">${produto.descricao}</p>
        <a href="#" class="open_modal">Ver mais</a>
    `;
    id++;
}


produtosCadastrados.forEach((produto) => criaProduto(galeria, produto, 'todos__main__galeria__card'))
console.log(produtosCadastrados);