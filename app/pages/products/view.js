const React = require('react');

const { useState } = React;
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');

const AddFilter = require('../../components/ProductComponent/AddFilter');
const FilterList = require('../../components/ProductComponent/FilterList');

function ProductView(props) {
  const { products, i18n, imagesPrefix, translations } = props;
  const preloadedState = {
    products,
    i18n,
    imagesPrefix,
    translations,
  };
  const [addFilterPriceList, setAddFilterPriceList] = useState([]);
  const [addFilterCategoryList, setAddFilterCategoryList] = useState([]);
  const [addFilterFeedback, setAddFilterFeedback] = useState([]);

  const [feedback, setFeedback] = useState({
    name: '',
    content: '',
  });

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setAddFilterFeedback((prevState) => [...prevState, feedback]);
    setFeedback({
      name: '',
      content: '',
    });
  };

  const handleChangeFeedback = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  return (
    <>
      <Style href="products.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Product page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="products.js" />
      <AddFilter
        i18n={i18n}
        setAddFilterPriceList={setAddFilterPriceList}
        setAddFilterCategoryList={setAddFilterCategoryList}
      />
      <FilterList
        i18n={i18n}
        addFilterPriceList={addFilterPriceList}
        setAddFilterPriceList={setAddFilterPriceList}
        addFilterCategoryList={addFilterCategoryList}
        setAddFilterCategoryList={setAddFilterCategoryList}
      />
      <form onSubmit={handleFeedbackSubmit}>
        <h3>{i18n.gettext('Feedback: ')}</h3>
        <label htmlFor="name">
          <input
            value={feedback.name}
            id="name"
            placeholder="Digite aqui seu nome..."
            type="text"
            onChange={handleChangeFeedback}
            name="name"
          />
        </label>
        <br />
        <label htmlFor="feedback">
          <textarea
            value={feedback.content}
            id="feedback"
            placeholder="Digite aqui feedback..."
            name="content"
            rows="5"
            cols="33"
            onChange={handleChangeFeedback}
          />
        </label>
        <label htmlFor="sendBtn">
          <input id="sendBtn" type="submit" />
        </label>
      </form>
      <p>{i18n.gettext('Feedback inserido: ')}</p>
      {
          addFilterFeedback.length > 0
            ? addFilterFeedback.map((filter) => (
              <>
                <p>{`Nome: ${filter.name}`}</p>
                <p>{`Feedback: ${filter.content}`}</p>
                <p>{i18n.gettext('==================')}</p>
              </>
            ))
            : <p>{i18n.gettext('Nenhum filtro de categoria criado')}</p>
        }
    </>
  );
}

module.exports = injectI18n(ProductView);
