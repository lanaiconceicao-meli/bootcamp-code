// Tente fazer dois testes por função, testando as funcionalidades de maneiras diferentes.
// Execute os testes em execução no console npm run test:unit e verifique se estão
// funcionando.

const { ToUpperCase, Soma, AddToArray } = require('../../app/helpers/functions');

describe('Testing functions: "ToUpperCase", "Soma" and "AddToArray"', () => {
  beforeAll(() => {
    console.log('I am beforeAll, and I run before all tests');
  });

  beforeEach(() => {
    console.log('I am beforeEach, and I run before each test');
  });

  afterAll(() => {
    console.log('I am afterAll, and I run after all tests');
  });

  afterEach(() => {
    console.log('I am afterEach, and I run after each test');
  });

  // =============== ToUpperCase ===============

  test('if function "ToUpperCase" is defined', () => {
    expect(ToUpperCase('string')).toBeDefined();
  });
  test('if function "ToUpperCase" returns the expected value', () => {
    expect(ToUpperCase('string')).toBe('String');
  });
  test('if function "ToUpperCase" returns all letters Upper Case when parameter it is all letters Upper Case', () => {
    expect(ToUpperCase('STRING')).toEqual('STRING');
  });

  // =================== Soma ===================

  test('if function "Soma" is defined', () => {
    expect(Soma(1, 2)).toBeDefined();
  });
  test('if function "Soma" returns the expected value', () => {
    expect(Soma(1, 2)).toBe(3);
  });
  test('if function "Soma" returns an error when it is called with not number parameters', () => {
    expect(Soma('1', 2)).toBe('Coloque os números');
  });

  // ================ AddToArray ================

  test('if function "AddToArray" is defined', () => {
    expect(AddToArray([1, 2], 3)).toBeDefined();
  });
  test('if function "AddToArray" returns the expected value', () => {
    expect(AddToArray([1, 2], 3)).toContain(3);
  });
  test('if function "AddToArray" not contain a value', () => {
    expect(AddToArray([1, 2], 3)).not.toContain(4);
  });
});
