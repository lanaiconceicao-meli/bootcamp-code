import React from 'react';
import { useI18n } from 'nordic/i18n';
import config from 'nordic/config';
import PropTypes from 'prop-types';
import Image from 'nordic/image';

import demoService from '../../services/demo';
import DemoComponent from '../components/DemoComponent';

const DemoWithNordicPage = (props) => {
  const { i18n } = useI18n();
  const { site, lowEnd, deviceType, company } = props;
  return (
    <>
      <h1>
        {i18n.gettext('This page was created using Nordic Page ')}
        <a
          className="demo-nordic-page-link"
          href="https://nordic.adminml.com/docs/nordic-page/what-is-nordic-page"
          target="_blank"
          rel="noreferrer"
        >
          {i18n.gettext('Learn more about this feature')}
        </a>
      </h1>
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
    </>
  );
};

export const getServerSideProps = async (req) => {
  const { i18n, device, platform } = req;
  const site = await demoService.getSite(platform.siteId);
  return {
    props: {
      site,
      lowEnd: device.lowEnd,
      deviceType: device.type,
      company: config.get('companyName', platform.id, platform.siteId),
    },
    settings: {
      title: i18n.gettext('Demo Page'),
    },
  };
};

export const setPageSettings = ({ settings }) => ({
  title: settings.title,
  className: 'demo',
  melidata: {
    path: '/demo-with-nordic-page',
    event_data: { demo: 'data' },
  },
  analytics: {
    section: 'universal',
    page: 'test',
  },
  navigation: {
    type: 'full',
  },
  layout: {
    staticMarkup: false,
  },
});

DemoWithNordicPage.propTypes = {
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    default_currency_id: PropTypes.string.isRequired,
  }).isRequired,
  lowEnd: PropTypes.bool,
  deviceType: PropTypes.string,
  company: PropTypes.string,
};

DemoWithNordicPage.defaultProps = {
  lowEnd: false,
  deviceType: null,
  company: null,
};

export default DemoWithNordicPage;
