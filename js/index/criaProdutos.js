const galeriaClassico = document.querySelector('.galeria_classico');
const galeriaSmart = document.querySelector('.galeria_smart');
const galeriaPocket = document.querySelector('.galeria_pocket');

let id = 0;

const readProd = () => getLocalStorage();

let produtosCadastrados = readProd();

const checaClassico = (produto) => produto.categoria == "classic";
const checaSmart = (produto) => produto.categoria == "smart";
const checaPocket = (produto) => produto.categoria == "pocket";

let produtosClassicos = produtosCadastrados.filter(checaClassico);
let produtosSmart = produtosCadastrados.filter(checaSmart);
let produtosPocket = produtosCadastrados.filter(checaPocket);

console.log('Produtos Clássicos: ', produtosClassicos, '\n\n');
console.log('Produtos Smart: ', produtosSmart, '\n\n');
console.log('Produtos Pocket: ', produtosPocket, '\n\n');

const criaProduto = (pai, produto, classe) => {
    let elemento = document.createElement('div');
    pai.appendChild(elemento);
    elemento.classList.add(classe);
    elemento.innerHTML = `
        <p class="id invisivel" >${id}</p>
        <img src="${produto.img}" class="main__galeria__card_imagem">
        <p class="main__galeria__card_nome">${produto.nome}</p>
        <p class="main__galeria__card_preco">R$ ${produto.preco},00</p>
        <a href="#" class="open_modal">Ver mais</a>
    `;
    id++;
}

produtosClassicos.forEach(prod => criaProduto(galeriaClassico, prod, 'index__main__galeria__card'));
produtosSmart.forEach(prod => criaProduto(galeriaSmart, prod, 'index__main__galeria__card'));
produtosPocket.forEach(prod => criaProduto(galeriaPocket, prod, 'index__main__galeria__card'));


