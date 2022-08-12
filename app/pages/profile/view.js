const React = require('react');
const { injectI18n } = require('nordic/i18n');
const Head = require('nordic/head');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const ProfileComponent = require('../../components/ProfileComponent/ProfileComponent');

function ProfileView(props) {
  const { i18n, translations, imagesPrefix } = props;
  const preloadedState = {
    translations, imagesPrefix,
  };
  return (
    <>
      <Head>
        <title>
          {i18n.gettext('Demo Page')}
        </title>
      </Head>

      <Style href="profile.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Profile page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="profile.js" />
      <ProfileComponent i18n={i18n} />
    </>
  );
}

module.exports = injectI18n(ProfileView);
