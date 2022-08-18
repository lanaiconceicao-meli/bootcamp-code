const React = require('react');

// const Image = require('nordic/image');

const FilterList = ({ i18n, addFilterPriceList, setAddFilterPriceList, addFilterCategoryList, setAddFilterCategoryList }) => {
  const deletePriceRangeFilter = ({ priceRangeMin, priceRangeMax }) => {
    const filteredPrice = addFilterPriceList
      .filter((filter) => (
        filter.priceRangeMin !== priceRangeMin && filter.priceRangeMax !== priceRangeMax
      ));
    return setAddFilterPriceList(filteredPrice);
  };

  const deleteCategoryFilter = ({ category }) => {
    const filteredCategory = addFilterCategoryList
      .filter((filter) => (
        filter.category !== category
      ));
    return setAddFilterCategoryList(filteredCategory);
  };

  return (
    <>
      <h2>{i18n.gettext('Filtros')}</h2>
      <p>{i18n.gettext('Filtros de preço mínimo e máximo:')}</p>
      <ul>
        {
          addFilterPriceList.length > 0
            ? addFilterPriceList.map((filter) => (
              <>
                <li>{`${filter.priceRangeMin} e ${filter.priceRangeMax}`}</li>
                <button type="button" onClick={() => deletePriceRangeFilter(filter)}>{i18n.gettext('X')}</button>
              </>
            ))
            : (<p>{i18n.gettext('Nenhum filtro de preço criado')}</p>)
        }
      </ul>
      <p>{i18n.gettext('Filtros de categoria criado:')}</p>
      <ul>
        {
          addFilterCategoryList.length > 0
            ? addFilterCategoryList.map((filter) => (
              <>
                <li>{`${filter.category}`}</li>
                <button type="button" onClick={() => deleteCategoryFilter(filter)}>{i18n.gettext('X')}</button>
              </>
            ))
            : <p>{i18n.gettext('Nenhum filtro de categoria criado')}</p>
        }
      </ul>
    </>
  );
};

module.exports = FilterList;
