const React = require('react');
const { injectI18n } = require('nordic/i18n');
const Image = require('nordic/image');
const Style = require('nordic/style');

// Exercício 1
// Crie uma estrutura semântica que precisamos ter:
// ● Um cabeçalho
// ● Um menu de navegação
// ● Um conteúdo principal

// Exercício 2
// Em nosso conteúdo principal, precisamos que ele tenha:
// ● Seção
// ● Artigo
// ● Figura - Inclua aqui uma imagem sua que funcione como um hiperlink para o seu perfil do
// Linkedin.
// ● Descrição da imagem (poderíamos colocar nosso nome)
// ● Rodapé onde temos um parágrafo.

// https://ux.sapo.pt/acessibilidade/web-acessibilidade/aria/

function ProfileView(props) {
  const { i18n } = props;
  return (
    <>
      <header role="banner">
        <h1>{i18n.gettext('Meu perfil')}</h1>
        <nav role="navigation">
          <a href="/html/">{i18n.gettext('HTML')}</a>
          <a href="/css/">{i18n.gettext('CSS')}</a>
          <a href="/js/">{i18n.gettext('JavaScript')}</a>
          <a href="/python/">{i18n.gettext('Python')}</a>
        </nav>
      </header>
      <main role="main">
        <section>
          <article>
            <Style href="products.css" />
            <Image
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEp3-mgn2A4bw/profile-displayphoto-shrink_400_400/0/1657832114130?e=1665014400&v=beta&t=5_Dg5OPuKoJ1_YkrBbDQJCqDZdxFCTvKKYUnnD9sJco"
              alt="Lanai"
            />
          </article>
        </section>
      </main>
      <footer role="contentinfo">
        <p>{i18n.gettext('Rodapé aqui')}</p>
      </footer>
    </>
  );
}

module.exports = injectI18n(ProfileView);
