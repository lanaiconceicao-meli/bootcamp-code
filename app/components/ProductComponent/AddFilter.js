const React = require('react');

const { useState } = React;

// const Image = require('nordic/image');

const AddFilter = ({ i18n, addFilterList, setAddFilterList }) => {
  const [rangePrice, setRangePrice] = useState({
    priceRangeMin: 0,
    priceRangeMax: 0,
  });

  // ========= LÓGICA PARA FILTRAR ============
  // const [filteredPrice, setFilteredPrice] = useState([]);
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRangePrice({ ...rangePrice, [name]: value });
  };

  const handleClickRangeprice = () => {
    setAddFilterList((prevState) => [...prevState, rangePrice]);
  };

  // ========= LÓGICA PARA FILTRAR ============
  // const handlePrice = () => {
  //   // e.preventDefault();
  //   // const filtered = products.filter((product) => (
  //   //   rangePrice.priceRangeMin <= product.price && rangePrice.priceRangeMax >= product.price));
  //   // setFilteredPrice(prevState => [...prevState, filtered]);
  // };
  // ==========================================

  return (
    <>
      <form>
        {i18n.gettext('Faixa de preço: ')}
        <label htmlFor="price-range-min">
          <input
            type="number"
            id="price-range-min"
            placeholder="150"
            name="priceRangeMin"
            value={rangePrice.priceRangeMin}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price-range-max">
          <input
            type="number"
            id="price-range-max"
            placeholder="5000"
            name="priceRangeMax"
            value={rangePrice.priceRangeMax}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleClickRangeprice}>
          {i18n.gettext('Adicionar faixa de preço')}
        </button>
        <br />
        <label htmlFor="category-filter">
          {i18n.gettext('Filtro por categoria: ')}
          <input type="text" id="category-filter" placeholder="Digite aqui..." />
        </label>
        <button type="button">{i18n.gettext('Adicionar filtro por categoria')}</button>
      </form>
      {/* {
        // ========= LÓGICA PARA FILTRAR ============
        filteredPrice && filteredPrice.map((productArray) => productArray.map((product) => (
          <>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </>
        )))
        // ==========================================
      } */}
    </>
  );
};

module.exports = AddFilter;
