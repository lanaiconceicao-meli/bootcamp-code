const React = require('react');
// const Image = require('nordic/image');
const Style = require('nordic/style');

const PosicionamentoPseudoclasse = (props) => {
  const { i18n } = props;
  return (
    <>
      <Style href="profile.css" />
      <nav id="menu">
        <a className="link1" href="https://www.mercadolivre.com.br/">{i18n.gettext('Link 1')}</a>
        <a className="link2" href="https://www.mercadolivre.com.br/">{i18n.gettext('Link 2')}</a>
        <a className="link3" href="https://www.mercadolivre.com.br/">{i18n.gettext('Link 3')}</a>
        <a className="link4" href="https://www.mercadolivre.com.br/">{i18n.gettext('Link 4')}</a>
      </nav>
    </>
  );
};
module.exports = PosicionamentoPseudoclasse;
