const Mock = require('nordic-dev/mocks');
const CurrenciesService = require('../../services/currenciesService');

const mock = Mock();
const apiDomain = 'https://internal-api.mercadolibre.com/currencies';

describe('Currencies service', () => {
  beforeAll(() => {
    mock.intercept(apiDomain, ['/*']);
  });

  afterAll(() => {
    mock.restore(apiDomain, ['/*']);
  });

  test('should fetch the data of site for the endpoint currencies', (done) => {
    CurrenciesService
      .getCurrencies()
      .then((data) => {
        expect(typeof data).toBe('object');
        expect(data.length).toBeGreaterThan(20);
        done();
      });
  });

  test('should fetch the data of site for the endpoint currencies/CURRENCY_ID for COP', (done) => {
    CurrenciesService
      .getCurrencyById('COP')
      .then((data) => {
        expect(typeof data).toBe('object');
        expect(Object.keys(data)).toEqual(
          expect.arrayContaining(['id', 'symbol', 'description', 'decimal_places']),
        );
        expect(data.id).toBe('COP');
        done();
      });
  });
  test('should fetch the data of site for the endpoint currencies/CURRENCY_ID for BRL', (done) => {
    CurrenciesService
      .getCurrencyById('BRL')
      .then((data) => {
        expect(typeof data).toBe('object');
        expect(Object.keys(data)).toEqual(
          expect.arrayContaining(['id', 'symbol', 'description', 'decimal_places']),
        );
        expect(data.decimal_places).toBe(2);
        done();
      });
  });
  test('should fetch the data of site for the endpoint currencies/CURRENCY_ID for CRC', (done) => {
    CurrenciesService
      .getCurrencyById('CRC')
      .then((data) => {
        expect(typeof data).toBe('object');
        expect(Object.keys(data)).toEqual(
          expect.arrayContaining(['id', 'symbol', 'description', 'decimal_places']),
        );
        expect(data.description).toBeDefined();
        expect(data.decimal_places).toBe(2);
        done();
      });
  });
  test('should fetch not return the data of USS', (done) => {
    CurrenciesService
      .getCurrencyById('USS')
      .then((data) => {
        expect(data).not.toBeDefined();
        done();
      })
      .catch((err) => {
        expect(err.message).toBe('Request failed with status code 404');
        done();
      });
  });
  test('should fetch the data of site for the endpoint currencies/CURRENCY_ID for CLP', (done) => {
    CurrenciesService
      .getCurrencyById('CLP')
      .then((data) => {
        expect(typeof data).toBe('object');
        expect(data.decimal_places).not.toBe(2);
        done();
      });
  });
});
