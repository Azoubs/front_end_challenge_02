// Produtos iniciais
let prods = [
    { nome: 'Clássico ABC', preco: 100, categoria: 'classic', descricao: 'Relógio de pulso clássico', img: 'img/pulso/small/sp_01.jpg' },
    { nome: 'Clássico DEF', preco: 120, categoria: 'classic', descricao: 'Relógio de pulso clássico', img: 'img/pulso/small/sp_02.jpg' },
    { nome: 'Clássico GHI', preco: 140, categoria: 'classic', descricao: 'Relógio de pulso clássico', img: 'img/pulso/small/sp_03.jpg' },
    { nome: 'Clássico JKL', preco: 160, categoria: 'classic', descricao: 'Relógio de pulso clássico', img: 'img/pulso/small/sp_04.jpg' },
    { nome: 'Clássico MNO', preco: 180, categoria: 'classic', descricao: 'Relógio de pulso clássico', img: 'img/pulso/small/sp_05.jpg' },
    { nome: 'Clássico PQR', preco: 200, categoria: 'classic', descricao: 'Relógio de pulso clássico', img: 'img/pulso/small/sp_06.jpg' },
    { nome: 'Smart 123', preco: 200, categoria: 'smart', descricao: 'New Smartwatch', img: 'img/smart/small/ss_01.jpg' },
    { nome: 'Smart 123', preco: 300, categoria: 'smart', descricao: 'New Smartwatch', img: 'img/smart/small/ss_02.jpg' },
    { nome: 'Smart 123', preco: 400, categoria: 'smart', descricao: 'New Smartwatch', img: 'img/smart/small/ss_03.jpg' },
    { nome: 'Smart 123', preco: 500, categoria: 'smart', descricao: 'New Smartwatch', img: 'img/smart/small/ss_04.jpg' },
    { nome: 'Smart 123', preco: 600, categoria: 'smart', descricao: 'New Smartwatch', img: 'img/smart/small/ss_05.jpg' },
    { nome: 'Smart 123', preco: 700, categoria: 'smart', descricao: 'New Smartwatch', img: 'img/smart/small/ss_06.jpg' },
    { nome: 'Pocket @@@', preco: 1000, categoria: 'pocket', descricao: 'Relógio de bolso sofisticado', img: 'img/bolso/small/spc_01.jpg' },
    { nome: 'Pocket @@@', preco: 1100, categoria: 'pocket', descricao: 'Relógio de bolso sofisticado', img: 'img/bolso/small/spc_02.jpg' },
    { nome: 'Pocket @@@', preco: 1200, categoria: 'pocket', descricao: 'Relógio de bolso sofisticado', img: 'img/bolso/small/spc_03.jpg' },
    { nome: 'Pocket @@@', preco: 1300, categoria: 'pocket', descricao: 'Relógio de bolso sofisticado', img: 'img/bolso/small/spc_04.jpg' },
    { nome: 'Pocket @@@', preco: 1400, categoria: 'pocket', descricao: 'Relógio de bolso sofisticado', img: 'img/bolso/small/spc_05.jpg' },
    { nome: 'Pocket @@@', preco: 1500, categoria: 'pocket', descricao: 'Relógio de bolso sofisticado', img: 'img/bolso/small/spc_06.jpg' },
];

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_prods')) ?? [];
const setLocalStorage = (dbProds) => localStorage.setItem("db_prods", JSON.stringify(dbProds));

const createProd = (prod) => {
    const dbProd = getLocalStorage();
    dbProd.push(prod);
    setLocalStorage(dbProd);
};

// Só adiciona os produtos iniciais se não existir o db_prods
if("db_prods" in localStorage) {
   console.log("DB já existe! :)");
} else {
    console.log("Adicionando produtos...");
    prods.forEach((produto) => {
        createProd(produto);
    });
    console.log("Produtos adicionados!");
}