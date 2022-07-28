// =================================== Nordic Server Sider ===================================
// 1. Vamos simular uma chamada da API do MeLi (no momento não vamos utilizar a API
//     oficial, apenas nas próximas aulas). Para conseguir isso, precisaremos criar uma array
//     de produtos em uma variável em nosso código.
//     Queremos que ao acessar o caminho “/api/products” nos traga 4 produtos diferentes.
//     Eles devem ter as seguintes propriedades (respeite os nomes):
//     ● id
//     ● title
//     ● price
//     ● description
//     ● quantity

const router = require('nordic/ragnar').router();

const products = [
  {
    name: 'Mouse',
    price: 4598,
    stock: 30,
  },
  {
    name: 'Notebook',
    price: 2598,
    stock: 30,
  },
  {
    name: 'Macbook',
    price: 9898,
    stock: 0,
  },
];

const getProducts = (req, res) => res.status(200).json(products);

// =================================== HTTP Requests ===================================
// // Exercício integrador

// Objetivo
// O objetivo deste guia prático é que possamos consolidar e aprofundar os conceitos sobre
// requisições HTTP. Para isso, vamos propor uma série de exercícios simples que nos
// permitirão revisar os tópicos que estudamos.

// Exercício 3
// Utilizando a array disponibilizada acima. Vamos implementar vários endpoints em nossa
// aplicação, que nos permitirão filtrar os produtos segundo os seguintes critérios:

// 1. Nome: nos devolverá os produtos cujo nome contenha o texto que passamos pelo
// parâmetro (QueryString).

// 2. Preco: Nos devolverá os produtos cujo preço esteja dentro de um limite definido
// parâmetro (QueryString).
// 3. Stock: Nos devolverá os produtos que possuem disponibilidade no estoque

// IMPORTANTE: Testar tudo no Postman.

const getProductName = (req, res) => {
  const getQuery = req.query.name;
  const filteredName = products.filter((item) => item.name.toLowerCase() === getQuery.toLowerCase());
  return res.status(200).json(filteredName);
};

const getProductPrice = (req, res) => {
  const getQuery = req.query.price;
  const filteredPrice = products.filter((item) => item.price <= getQuery);
  return res.status(200).json(filteredPrice);
};

const getProductStock = (req, res) => {
  const filteredStock = products.filter((item) => item.stock > 0);
  return res.status(200).json(filteredStock);
};

router.get('/', getProducts);
router.get('/name', getProductName);
// https://dev.mercadolivre.com.br:8443/api/products/name?name=Mouse
router.get('/price', getProductPrice);
// https://dev.mercadolivre.com.br:8443/api/products/price?price=4000
router.get('/stock', getProductStock);
// https://dev.mercadolivre.com.br:8443/api/products/stock?stock=40

module.exports = router;
