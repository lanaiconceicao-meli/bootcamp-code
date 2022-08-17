const React = require('react');
const PropTypes = require('prop-types');
const Head = require('nordic/head');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const ProductCard = require('../../components/ProductComponent/ProductCard');

function View(props) {
  const { products, i18n, translations, site, siteId, lowEnd, deviceType, company, imagesPrefix } = props;
  const preloadedState = {
    products,
    i18n,
    translations,
    site,
    siteId,
    lowEnd,
    deviceType,
    company,
    imagesPrefix,
  };

  const getDeviceType = () => (
    <div>
      {deviceType.type}
    </div>
  );

  return (
    <div>
      <Head>
        <title>
          {i18n.gettext('Adaptative Page')}
        </title>
      </Head>

      <Style href="adaptative.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Adaptative page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="adaptative.js" />

      <p>{i18n.gettext('Device type:')}<span>{getDeviceType()}</span></p>
      <ProductCard
        data={products}
        size={getDeviceType()}
      />
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
    name: PropTypes.string,
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

module.exports = injectI18n(View);
