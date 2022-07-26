/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const Head = require('nordic/head');
const MeliGA = require('nordic/analytics/meli-ga');
const MelidataTrack = require('nordic/melidata/melidata-track');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const Image = require('nordic/image');
const DemoComponent = require('../../components/DemoComponent');

/**
 * View Component
 */
function View(props) {
  const { i18n, translations, site, siteId, lowEnd, deviceType, company, imagesPrefix } = props;
  const preloadedState = {
    i18n,
    translations,
    site,
    siteId,
    lowEnd,
    deviceType,
    company,
    imagesPrefix,
  };
  return (
    <div className="demo">
      <MeliGA
        section="universal"
        page="test"
      />

      <MelidataTrack path="/demo" event_data={{ demo: 'data' }} />

      <Head>
        <title>
          {i18n.gettext('Demo Page')}
        </title>
      </Head>

      <Style href="demo.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Demo page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="demo.js" />

      <DemoComponent i18n={i18n} />

      <h2>
        {i18n.gettext('Site details:')}
      </h2>
      <p>
        {i18n.gettext('Country: {0}, default currency: {1}, company: {2}',
          site.name, site.default_currency_id, company)}
      </p>
      <h2>
        {i18n.gettext('Device details:')}
      </h2>
      <p>
        {i18n.gettext('Is low-end: {0}, type: {1}', String(lowEnd), deviceType)}
      </p>

      <h2>
        {i18n.gettext('API endpoints:')}
      </h2>
      <ul>
        <li>
          <a href="/api/demo/platform">
            {i18n.gettext('Platform')}
          </a>
        </li>
        <li>
          <a href="/api/demo/user">
            {i18n.gettext('User')}
          </a>
        </li>
        <li>
          <a href="/api/demo/device">
            {i18n.gettext('Device')}
          </a>
        </li>
        <li>
          <a href="/api/demo/browser">
            {i18n.gettext('Browser')}
          </a>
        </li>
      </ul>

      <h2>
        {i18n.gettext('i18n')}
      </h2>
      <p>
        {i18n.gettext('Usuarios')}
      </p>

      <h2>
        {i18n.gettext('Image component:')}
      </h2>
      <div className="demo-images">
        <div>
          <Image className="demo-images__img" src="demo-image.jpg" alt="Mural painting" />
          <p>
            <a href="https://github.com/mercadolibre/fury_frontend-image#an-image-as-a-local-resource">
              {i18n.gettext('An image as a local resource')}
            </a>
          </p>
        </div>
        <div>
          <Image className="demo-images__img" src="https://http2.mlstatic.com/D_Q_NP_2X_635310-MLA31090504228_062019-AB.webp" alt="White ukelele" />
        </div>
      </div>
    </div>
  );
}

View.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  siteId: PropTypes.string.isRequired,
  translations: PropTypes.shape({}),
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    default_currency_id: PropTypes.string.isRequired,
  }).isRequired,
  lowEnd: PropTypes.bool,
  deviceType: PropTypes.string,
  company: PropTypes.string,
  imagesPrefix: PropTypes.string,
};

View.defaultProps = {
  translations: {},
  lowEnd: false,
  deviceType: null,
  company: null,
  imagesPrefix: '/',
};

/**
 * Inject i18n context as props into View.
 */
module.exports = injectI18n(View);
