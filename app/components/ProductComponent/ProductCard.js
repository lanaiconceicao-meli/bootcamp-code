const React = require('react');

const Image = require('nordic/image');

const ProductCard = ({ nome, srcImage, altImage, price, className }) => (
  <>
    <div id="product-card">
      <h2 className={className}>{nome}</h2>
      <Image src={srcImage} alt={`Imagem de ${altImage}`} className="product_img" />
      <p className={className}>R$ {price}</p>
    </div>
  </>
);

module.exports = ProductCard;

// const React = require('react');

// const Image = require('nordic/image');

// const ProductCard = ({ data, size }) => {
//   const { children } = size.props;

//   const classNameGenerate = () => {
//     if (children === 'desktop') {
//       return 'desktop';
//     }
//     if (children === 'mobile') {
//       return 'mobile';
//     }
//     return 'desktop';
//   };

//   return (
//     <>
//       <section className="product-container">
//         {
//           data.map((product) => (
//             <article className={classNameGenerate()}>
//               <h2>{product.title}</h2>
//               <Image src={product.thumbnail} alt={`Imagem de ${product.title}`} className="product_img" />
//               <p>R$ {product.price}</p>
//               <p>Estoque disponível: {product.available_quantity}</p>
//             </article>
//           ))
//         }
//       </section>
//     </>
//   );
// };

// module.exports = ProductCard;
