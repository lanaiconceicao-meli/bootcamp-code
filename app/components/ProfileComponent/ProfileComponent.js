const React = require('react');
const Image = require('nordic/image');
const Style = require('nordic/style');

const ProfileComponent = (props) => {
  const { i18n } = props;
  return (
    <div id="profile">
      <Style href="profile.css" />
      <section className="principal-content">
        <h2 className="presentation">{i18n.gettext('Oi, meu nome é')}</h2>
        <section>
          <Image
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEp3-mgn2A4bw/profile-displayphoto-shrink_400_400/0/1657832114130?e=1665014400&v=beta&t=5_Dg5OPuKoJ1_YkrBbDQJCqDZdxFCTvKKYUnnD9sJco"
            alt="Lanai Conceição"
            className="image"
          />
        </section>
        <h1>{i18n.gettext('Lanai Conceição =)')}</h1>
        <h2>{i18n.gettext('Essas são algumas das tecnologias que aprendi:')}</h2>
      </section>
      <section>
        <nav role="navigation">
          <span><a href="/html/">{i18n.gettext('HTML')}</a></span>
          <span><a href="/css/">{i18n.gettext('CSS')}</a></span>
          <span><a href="/javascript/">{i18n.gettext('JavaScript')}</a></span>
          <span><a href="/python/">{i18n.gettext('Python')}</a></span>
        </nav>
      </section>
    </div>
  );
};
module.exports = ProfileComponent;
