const React = require('react');
const { injectI18n } = require('nordic/i18n');
const Style = require('nordic/style');

function ProfileView(props) {
  const { i18n } = props;
  return (
    <form>
      <Style href="products.css" />

      <label htmlFor="nome">{i18n.gettext('Nome:')}
        <input id="nome" type="text" />
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

      <p>{i18n.gettext('Método de entrega:')}</p>
      <input name="metodo" type="radio" id="envio" />
      <label htmlFor="envio">{i18n.gettext('Entrega em domicílio')}</label>
      <input name="metodo" type="radio" id="retirada" />
      <label htmlFor="retirada">{i18n.gettext('Retirada na filial')}</label>

      <p>{i18n.gettext('Selecione um produto:')}</p>
      <input name="produtos" type="checkbox" id="bicicleta" />
      <label htmlFor="bicicleta">{i18n.gettext('Bicicleta')}</label>
      <input name="produtos" type="checkbox" id="relogio" />
      <label htmlFor="relogio">{i18n.gettext('Relógio')}</label>
      <input name="produtos" type="checkbox" id="colchao" />
      <label htmlFor="colchao">{i18n.gettext('Colchão')}</label>
      <input name="produtos" type="checkbox" id="caderno" />
      <label htmlFor="caderno">{i18n.gettext('Caderno')}</label>
      <input name="produtos" type="checkbox" id="mouse" />
      <label htmlFor="mouse">{i18n.gettext('Mouse')}</label>
      <input name="produtos" type="checkbox" id="fones de ouvido" />
      <label htmlFor="fones de ouvido">{i18n.gettext('Fones de ouvido')}</label>
      <input name="produtos" type="checkbox" id="outros" />
      <label htmlFor="outros">{i18n.gettext('Outros')}</label>
    </form>
  );
}

module.exports = injectI18n(ProfileView);
