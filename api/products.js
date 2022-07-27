// Vamos simular uma chamada da API do MeLi (no momento não vamos utilizar a API
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
    id: 1,
    title: 'Iphone X',
    price: 3500,
    description: 'Apple smartphone version X',
    quantity: 10,
  },
  {
    id: 2,
    title: 'Iphone 11 pro',
    price: 4500,
    description: 'Apple smartphone version 11 pro',
    quantity: 15,
  },
  {
    id: 3,
    title: 'Iphone 12',
    price: 5500,
    description: 'Apple smartphone version 12',
    quantity: 20,
  },
];

const getProducts = (req, res) => res.status(200).json(products);

router.get('/', getProducts);

module.exports = router;
