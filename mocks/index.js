const env = require('nordic/env');

if (!env.PRODUCTION) {
  const mock = require('nordic-dev/mocks')(); // eslint-disable-line

  mock.intercept('https://internal-api.mercadolibre.com/', [
    '/sites/*',
  ]);

  if (env.TEST) {
    // Sessions api
    mock.intercept('https://internal-api.mercadolibre.com', ['/auth/user_session*'], {
      ignoreParams: ['platform_id', 'site_id'],
      includeHeaders: ['x-session-id'],
    });

    // Users API
    mock.intercept('https://internal-api.mercadolibre.com', [
      '/users/:userId',
    ], { ignoreParams: ['caller.id', 'api_version'] });

    mock.intercept('https://internal-api.mercadolibre.com/', [
      '/v2/kyc/vault',
      '/frontend/carts/*',
    ]);
  }
}
