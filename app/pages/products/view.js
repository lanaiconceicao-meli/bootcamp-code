const React = require('react');

const { useState } = React;
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');

function ProductView(props) {
  // eslint-disable-next-line react/prop-types
  const { products, i18n, imagesPrefix, translations } = props;
  const preloadedState = {
    products,
    i18n,
    imagesPrefix,
    translations,
  };
  const [prod, setProd] = useState(products);

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

      <h2>
        {i18n.gettext('Product details:')}
      </h2>

      <ul>
        {prod ? prod.map(({ id, title }) => <li key={id}>{title}</li>) : ''}
      </ul>

      <form>
        <Style href="products.css" />

        <label htmlFor="nome">{i18n.gettext('Nome:')}
          <input id="nome" type="text" />
        </label>

        <label htmlFor="sobrenome">{i18n.gettext('Sobrenome:')}
          <input id="sobrenome" type="text" />
        </label>

        <label htmlFor="email">{i18n.gettext('E-mail:')}
          <input id="email" type="email" />
        </label>

        <label htmlFor="telefone">{i18n.gettext('Telefone:')}
          <input id="telefone" type="tel" />
        </label>

        <label htmlFor="país">{i18n.gettext('País:')}
          <select id="país">
            <option name="pais" value="argentina" id="argentina">{i18n.gettext('Argentina')}</option>
            <option name="pais" value="chile" id="chile">{i18n.gettext('Chile')}</option>
            <option name="pais" value="colombia" id="colombia">{i18n.gettext('Colômbia')}</option>
            <option name="pais" value="venezuela" id="venezuela">{i18n.gettext('Venezuela')}</option>
            <option name="pais" value="mexico" id="mexico">{i18n.gettext('México')}</option>
            <option name="pais" value="brasil" id="brasil">{i18n.gettext('Brasil')}</option>
            <option name="pais" value="bolivia" id="bolivia">{i18n.gettext('Bolívia')}</option>
            <option name="pais" value="uruguai" id="uruguai">{i18n.gettext('Uruguai')}</option>
          </select>
        </label>

        <label htmlFor="cidade">{i18n.gettext('Cidade:')}
          <select id="cidade">
            <option name="cidade" value="cidade1" id="cidade1">{i18n.gettext('Cidade 1')}</option>
            <option name="cidade" value="cidade2" id="cidade2">{i18n.gettext('Cidade 2')}</option>
            <option name="cidade" value="cidade3" id="cidade3">{i18n.gettext('Cidade 3')}</option>
            <option name="cidade" value="cidade4" id="cidade4">{i18n.gettext('Cidade 4')}</option>
          </select>
        </label>

        <p tabIndex={0}>{i18n.gettext('Tipo de domicílio:')}</p>
        <input name="domicilio" type="radio" id="residencial" />
        <label htmlFor="residencial">{i18n.gettext('Residencial')}</label>
        <input name="domicilio" type="radio" id="trabalho" />
        <label htmlFor="trabalho">{i18n.gettext('Trabalho')}</label>

        <label htmlFor="endereco">{i18n.gettext('Endereço:')}
          <input id="endereco" type="text" />
        </label>

        <label htmlFor="numero">{i18n.gettext('Número:')}
          <input id="numero" type="number" min="1" />
        </label>

        <label htmlFor="CEP">{i18n.gettext('CEP:')}
          <input id="CEP" type="text" />
        </label>

        <input name="produtos" type="checkbox" id="carros" />
        <label htmlFor="carros">{i18n.gettext('carros')}</label>
        <br />
        <input name="produtos" type="checkbox" id="tecnologia" />
        <label htmlFor="tecnologia">{i18n.gettext('tecnologia')}</label>
        <br />
        <input name="produtos" type="checkbox" id="jogos" />
        <label htmlFor="jogos">{i18n.gettext('jogos')}</label>
        <br />
        <input name="produtos" type="checkbox" id="confeccoes" />
        <label htmlFor="confeccoes">{i18n.gettext('confecções')}</label>

        <label htmlFor="nome">{i18n.gettext('Senha:')}
          <input id="nome" type="password" />
        </label>

        <label htmlFor="nome">{i18n.gettext('Repetir senha:')}
          <input id="nome" type="password" />
        </label>

      </form>
    </>
  );
}

module.exports = injectI18n(ProductView);
