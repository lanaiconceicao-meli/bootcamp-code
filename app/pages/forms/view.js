const PropTypes = require('prop-types');
const React = require('react');

const { useState } = React;
const { injectI18n } = require('nordic/i18n');
const Style = require('nordic/style');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const Image = require('nordic/image');

const TextField = require('@andes/textfield');
const Form = require('@andes/form');
const Dropdown = require('@andes/dropdown');
const AmountField = require('@andes/amount-field');
const Button = require('@andes/button');
const RadioList = require('@andes/radio-list');
const Modal = require('@andes/modal');

const { DropdownItem } = Dropdown;
const { ListItem } = require('@andes/list');

function View(props) {
  const { i18n, translations, imagesPrefix } = props;
  const preloadedState = {
    i18n,
    imagesPrefix,
    translations,
  };

  const [prod, setProd] = useState([]);

  const [objProduct, setObjProduct] = useState({
    name: '',
    description: '',
    country: '',
    category: '',
    price: '0,00',
    brand: '',
    thumbnail: '',
    shipping: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setObjProduct({
      ...objProduct,
      [id]: value,
    });
  };

  const handleCountry = (_e, value) => {
    setObjProduct({
      ...objProduct,
      country: value,
    });
  };

  const handleCategory = (_e, value) => {
    setObjProduct({
      ...objProduct,
      category: value,
    });
  };

  const handlePrice = (e) => {
    const { value } = e.target;
    setObjProduct({
      ...objProduct,
      price: value,
    });
  };

  const handleShipping = (_e, selected) => {
    setObjProduct({
      ...objProduct,
      shipping: selected,
    });
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleClickModal = () => {
    setProd([...prod, objProduct]);
    setObjProduct({
      name: '',
      description: '',
      country: '',
      category: '',
      price: '0,00',
      brand: '',
      thumbnail: '',
      shipping: '',
    });
    onClose();
  };

  return (
    <div id="forms">
      <Style href="forms.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Form page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="forms.js" />
      <Form>
        <TextField
          label="Nome do produto"
          width={150}
          maxLength={120}
          value={objProduct.name}
          id="name"
          onChange={handleInput}
          messageShow={objProduct.name.length < 2}
          message="* Preenchimento obrigatório"
          required
        />
        <TextField
          label="Descrição do produto"
          width={150}
          maxLength={300}
          value={objProduct.description}
          id="description"
          onChange={handleInput}
          messageShow={objProduct.description.length < 2}
          message="* Preenchimento obrigatório"
        />
        <Dropdown
          type="form"
          label="País"
          placeholder="Selecione o país"
          id="country"
          onChange={handleCountry}
          value={objProduct.country}
        >
          <DropdownItem value="Argentina" primary="Argentina" key="country" name="argentina" />
          <DropdownItem value="Brazil" primary="Brazil" key="country" />
          <DropdownItem value="Uruguay" primary="Uruguay" key="country" />
          <DropdownItem value="Chile" primary="Chile" key="country" />
        </Dropdown>
        <Dropdown
          type="form"
          label="Categoria"
          placeholder="Selecione a categoria do produto"
          defaultValue="categoria1"
          onChange={handleCategory}
          value={objProduct.category}
        >
          <DropdownItem value="categoria1" primary="Categoria 1" key="category" />
          <DropdownItem value="categoria2" primary="Categoria 2" key="category" />
          <DropdownItem value="categoria3" primary="Categoria 3" key="category" />
          <DropdownItem value="categoria4" primary="Categoria 4" key="category" />
          <DropdownItem value="categoria5" primary="Categoria 5" key="category" />
        </Dropdown>
        <AmountField
          id="amount-field"
          aria-label="Indique o valor do produto"
          currencyId="BRL"
          countryId="BR"
          helper="Indique o valor do produto"
          onChange={handlePrice}
          value={objProduct.price}
        />
        <TextField
          label="Marca"
          width={150}
          maxLength={300}
          onChange={handleInput}
          id="brand"
          messageShow={objProduct.brand.length < 2}
          message="* Preenchimento obrigatório"
          required
          value={objProduct.brand}
        />
        <TextField
          label="Thumbnail"
          width={150}
          maxLength={300}
          onChange={handleInput}
          id="thumbnail"
          messageShow={objProduct.thumbnail.length < 2}
          message="* Preenchimento obrigatório"
          required
          value={objProduct.thumbnail}
        />
        <div className="checkbox">
          <p>{i18n.gettext('Escolha a forma de envio:')}</p>
          <RadioList id="shipping" onClick={handleShipping} value={objProduct.shipping}>
            <ListItem
              primary="Retirada na loja"
              value="Retirada na loja"
            />
            <ListItem
              primary="Envio à domicílio"
              value="Envio à domicílio"
            />
            <ListItem
              primary="Retirada em filial"
              value="Retirada em filial"
            />
          </RadioList>
        </div>
        <div className="btnSendProduct">
          <Button
            hierarchy="loud"
            size="large"
            onClick={handleClick}
            disabled={
              objProduct.name.length < 2
              || objProduct.description.length < 2
              || objProduct.country === ''
              || objProduct.category === ''
              || objProduct.price === 0
              || objProduct.brand.length < 2
              || objProduct.thumbnail.length < 2
              || objProduct.shipping === ''
            }
          >
            {i18n.gettext('Cadastrar')}
          </Button>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title="Deseja cadastrar realmente esse produto?"
          type="large"
          actions={{
            fixed: false,
            primary: <Button onClick={handleClickModal}>{i18n.gettext('Cadastrar')}</Button>,
          }}
          closeButtonLabel="Close demo modal"
        >
          <h2>{objProduct.name}</h2>
          <p>{objProduct.description}</p>
          <p>{objProduct.country}</p>
          <p>{objProduct.category}</p>
          <p>{i18n.gettext(`R$ ${objProduct.price}`)}</p>
          <p>{objProduct.brand}</p>
          <Image src={objProduct.thumbnail} alt={objProduct.name} lazyload="off" />
          <p>{objProduct.shipping}</p>
        </Modal>
        {prod && prod.map((item) => (
          <div className="registeredProduct">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.country}</p>
            <p>{item.category}</p>
            <p>{i18n.gettext(`R$ ${item.price}`)}</p>
            <p>{item.brand}</p>
            <Image src={item.thumbnail} alt={item.name} lazyload="off" />
            <p>{item.shipping}</p>
          </div>
        ))}
      </Form>
    </div>
  );
}

View.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func,
  }),
  imagesPrefix: PropTypes.string,
  translations: PropTypes.shape({}),
};

module.exports = injectI18n(View);
