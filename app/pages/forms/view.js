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
    price: '',
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

  // parei aqui nessa função que roda ao apertar "Enviar" do modal
  // ainda preciso mostrar essas coisas na tela (linha 210)
  const handleClickModal = () => {
    setProd([...prod, objProduct]);
    setObjProduct({
      name: '',
      description: '',
      country: '',
      category: '',
      price: '',
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
        />
        <TextField
          label="Descrição do produto"
          width={150}
          maxLength={300}
          value={objProduct.description}
          id="description"
          onChange={handleInput}
        />
        <Dropdown
          type="form"
          label="País"
          placeholder="Selecciona tu país de residencia"
          defaultValue="argentina"
          id="country"
          onChange={handleCountry}
        >
          <DropdownItem value="argentina" primary="Argentina" key="argentina" name="argentina" />
          <DropdownItem value="brazil" primary="Brazil" key="brazil" />
          <DropdownItem value="uruguay" primary="Uruguay" key="uruguay" />
          <DropdownItem value="chile" primary="Chile" key="chile" />
        </Dropdown>
        <Dropdown
          type="form"
          label="Categoria"
          placeholder="Selecione a categoria do produto"
          defaultValue="categoria1"
          onChange={handleCategory}
        >
          <DropdownItem value="categoria1" primary="Categoria 1" key="categoria1" />
          <DropdownItem value="categoria2" primary="Categoria 2" key="categoria2" />
          <DropdownItem value="categoria3" primary="Categoria 3" key="categoria3" />
          <DropdownItem value="categoria4" primary="Categoria 4" key="categoria4" />
          <DropdownItem value="categoria5" primary="Categoria 5" key="categoria5" />
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
        <TextField label="Marca" width={150} maxLength={300} onChange={handleInput} id="brand" />
        <TextField label="Thumbnail" width={150} maxLength={300} onChange={handleInput} id="thumbnail" />
        <div className="checkbox">
          <RadioList id="shipping" onClick={handleShipping}>
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
          <Button hierarchy="loud" size="large" onClick={handleClick}>
            {i18n.gettext('Cadastrar')}
          </Button>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Produto cadastrado com sucesso!"
            type="large"
            actions={{
              fixed: false,
              primary: <Button onClick={handleClickModal}>{i18n.gettext('Enviar')}</Button>,
            }}
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
          {prod && prod.map((item) => console.log(item))}
        </div>
      </Form>
    </div>
  );
}

module.exports = injectI18n(View);
