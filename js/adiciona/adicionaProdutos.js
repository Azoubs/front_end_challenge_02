const nome = document.querySelector('#nome')
const preco = document.querySelector('#preco')
const categoria = document.querySelector('#categoria')
const descricao = document.querySelector('#desc')
const imagem = document.querySelector('#img')
const botao = document.querySelector('.adiciona__button')

console.log(botao);

let img64;

const leImagem = () => {
    imagem.addEventListener('change', function(){
        const reader = new FileReader()
        reader.addEventListener('load', () => {
           img64 = reader.result;
        })

        reader.readAsDataURL(this.files[0])
    })
}

leImagem();

botao.addEventListener('click', function(e) {
    e.preventDefault()
    leImagem();

    let produto = {
        nome: nome.value,
        preco: preco.value,
        categoria: categoria.value,
        descricao: descricao.value,
        img: img64
    }

    if ((produto.nome == '') || 
        (produto.preco == '') || 
        (produto.categoria == '') ||
        (produto.descricao == '') || 
        (produto.img == undefined )){
            alert('Por favor, preencha todos os campos!')
            
            return;
    }
    
    alert('Produto adicionado com sucesso!');
    createProd(produto)
    window.location.reload();

})

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_prods')) ?? []
const setLocalStorage = (dbProds) => localStorage.setItem("db_prods", JSON.stringify(dbProds))

const createProd = (prod) => {
    const dbProd = getLocalStorage()

    dbProd.push(prod)
    setLocalStorage(dbProd)
}