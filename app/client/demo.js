/**
 * Styles
 */
require('../pages/demo/styles.scss');

/**
 * Module dependencies
 */
const React = require('react');
const hydrate = require('nordic/hydrate');
const I18n = require('nordic/i18n');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ImageProvider = require('nordic/image/provider');
const DemoView = require('../pages/demo/view');

/**
 * Get server state
 */
const {
  site,
  siteId,
  lowEnd,
  deviceType,
  company,
  translations,
  imagesPrefix,
} = window.__PRELOADED_STATE__;


/**
 * i18n
 */
const i18n = new I18n({ translations });

/**
 * Mount DemoView on client
 */
hydrate(
  <I18nProvider i18n={i18n}>
    <ImageProvider prefix={imagesPrefix}>
      <DemoView
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
