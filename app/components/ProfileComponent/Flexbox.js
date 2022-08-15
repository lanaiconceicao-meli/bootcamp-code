const React = require('react');
// const Image = require('nordic/image');
const Style = require('nordic/style');

const PosicionamentoPseudoclasse = (props) => {
  const { i18n } = props;
  return (
    <>
      <Style href="profile.css" />
      <div id="container">
        <div className="quadrado1 quadrado">{i18n.gettext('1')}</div>
        <div className="quadrado2 quadrado">{i18n.gettext('2')}</div>
        <div className="quadrado3 quadrado">{i18n.gettext('3')}</div>
        <div className="quadrado4 quadrado">{i18n.gettext('4')}</div>
      </div>
    </>
  );
};
module.exports = PosicionamentoPseudoclasse;
