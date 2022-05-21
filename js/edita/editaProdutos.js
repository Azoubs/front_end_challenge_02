const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const descricao = document.querySelector("#desc");
const imagem = document.querySelector("#img");
const overModal = document.querySelector(".over_modal");
const adicionaButton = document.querySelector(".adiciona__button");
const modalImagem = document.querySelector(".modal__imagem");

let img64;

const leImagem = () => {
  imagem.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      img64 = reader.result;
    });

    reader.readAsDataURL(this.files[0]);
  });
};

leImagem();
let edit = 0;

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_prods")) ?? [];
const setLocalStorage = (dbProds) => localStorage.setItem("db_prods", JSON.stringify(dbProds));

const readProd = () => getLocalStorage();
const produtos = readProd();
let produtoEditar = produtos[edit];
const modal = document.querySelector(".modal");

const botaoFechar = document.querySelector(".botao-fechar");

botaoFechar.addEventListener("click", function (e) {
    console.log('oie');
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("invisivel");
});

console.log(produtos);

let id = 0;

const botaoDeleta = (e) => {
  const botaoDeleta = document.createElement("button");
  botaoDeleta.innerText = "x";
  botaoDeleta.classList.add("deleta_item");
  botaoDeleta.addEventListener("click", function (e) {
    const dbProd = readProd();
    let pai = e.target.parentElement;
    let filho = pai.querySelector(".id").innerText;
    dbProd.splice(filho, 1);
    setLocalStorage(dbProd);
    location.reload();
  });

  return botaoDeleta;
};

const botaoUpdate = (e) => {
  const botaoUpdate = document.createElement("button");
  botaoUpdate.innerHTML = '<i class="fas fa-pen"></i>';
  botaoUpdate.classList.add("edita_item");
  botaoUpdate.addEventListener("click", (e) => {
    const dbProd = readProd();

    modal.classList.remove("invisivel");
    
    let pai = e.target.parentElement.parentElement;
    console.log('pai: ', pai)
    let filho = pai.querySelector(".id").innerText;
    console.log('filho: ', filho)
    let produtoEditar = dbProd[filho];

    nome.value = produtoEditar.nome;
    preco.value = produtoEditar.preco;

    function selectElement(id, valueToSelect) {
      let element = document.getElementById(id);
      element.value = valueToSelect;
    }

    modalImagem.innerHTML = `
            <img src="${produtoEditar.img}" class="imagem__mudar">
        `;

    selectElement("categoria", produtoEditar.categoria);

    console.log(categoria);

    descricao.value = produtoEditar.descricao;
    adicionaButton.addEventListener("click", function (e) {

      e.preventDefault();

      leImagem();
      

      let novoProd = {
        nome: nome.value,
        preco: preco.value,
        categoria: categoria.value,
        descricao: descricao.value,
        img: img64,
      };

      if ((novoProd.nome == '') || 
        (novoProd.preco == '') || 
        (novoProd.categoria == '') ||
        (novoProd.descricao == '') || 
        (novoProd.img == undefined )){
            alert('Por favor, preencha todos os campos!')            
            return;
    }

      
      dbProd[filho] = novoProd;
      setLocalStorage(dbProd);
      alert("Produto adicionado com sucesso!");
      window.location.reload();
    });
  });
  return botaoUpdate;
};

const updateClient = (index, prod) => {
  const dbProd = readProd();
  dbProd[index] = prod;
  setLocalStorage(dbProd);
};

const deleteProd = (index) => {
  const dbProd = readProd();
  dbProd.splice(index, 1);
  setLocalStorage(dbProd);
};

const editDelete = (event) => {
  const prod = readProd()[index];
  console.log(prod);
};

const galeria = document.querySelector(".galeria__todos");

const criaProdutoEditavel = (produto) => {
  let elemento = document.createElement("div");
  galeria.appendChild(elemento);
  elemento.classList.add("card__editavel");
  elemento.innerHTML = `
    
    <img src="${produto.img}" class='img'>
    <p class='id'>${id}</p>
    <p class='categoria invisivel'>${produto.categoria}</p>
    <p class='nome'>${produto.nome}</p>
    <p class='preco'>R$ ${produto.preco},00</p>
    <p class='descricao'>${produto.descricao}</p>
    `;
  elemento.appendChild(botaoDeleta());
  elemento.appendChild(botaoUpdate());
  id++;
};

produtos.forEach((produto) => {
  criaProdutoEditavel(produto);
});

function index() {
  let pai = e.target.parentElement;
  let filho = pai.querySelector(".invisivel").innerText;
  return filho;
}
