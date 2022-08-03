const React = require('react');
const { injectI18n } = require('nordic/i18n');

// Exercício 1
// Crie uma estrutura semântica que precisamos ter:
// ● Um cabeçalho
// ● Um menu de navegação
// ● Um conteúdo principal

function ProfileView(props) {
  const { i18n } = props;
  return (
    <>
      <header>
        <h1>{i18n.gettext('Meu perfil')}</h1>
        <nav>
          <a href="/html/">{i18n.gettext('HTML')}</a> |
          <a href="/css/">{i18n.gettext('CSS')}</a> |
          <a href="/js/">{i18n.gettext('JavaScript')}</a> |
          <a href="/python/">{i18n.gettext('Python')}</a>
        </nav>
      </header>
      <main>{i18n.gettext('Meu conteúdo principal aqui')}</main>
    </>
  );
}

module.exports = injectI18n(ProfileView);
