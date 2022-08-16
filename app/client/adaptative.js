require('../pages/adaptative/styles.scss');

const React = require('react');
const hydrate = require('nordic/hydrate');
const I18n = require('nordic/i18n');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ImageProvider = require('nordic/image/provider');
const AdaptativeView = require('../pages/adaptative/view');

const {
  site,
  siteId,
  lowEnd,
  deviceType,
  company,
  translations,
  imagesPrefix,
} = window.__PRELOADED_STATE__;

const i18n = new I18n({ translations });

hydrate(
  <I18nProvider i18n={i18n}>
    <ImageProvider prefix={imagesPrefix}>
      <AdaptativeView
        site={site}
        siteId={siteId}
        lowEnd={lowEnd}
        deviceType={deviceType}
        company={company}
      />
    </ImageProvider>
  </I18nProvider>,
  document.getElementById('root-app'),
);
