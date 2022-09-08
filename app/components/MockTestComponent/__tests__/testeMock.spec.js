const { addFacilitador, modificarNome, usingCallback, isOld } = require('../__mocks__/testeMock');

describe('Prática', () => {
  let facilitador;
  let array;

  beforeAll(() => {
    array = [
      { name: 'João', age: 32 },
      { name: 'Thiago', age: 35 },
      { name: 'Isabella', age: 23 },
      { name: 'Sabrina', age: 27 },
      { name: 'Gabriela', age: 23 },
      { name: 'Thomas', age: 17 },
      { name: 'Natan', age: 15 },
    ];
  });

  /* Não há modificações neste teste, ele está usando uma função exportada */

  test('Para as pessoas maiores de idade atribuir "check: true"', () => {
    const mockFunction = jest.fn(person => person.age > 18);
    usingCallback(array, mockFunction);
    expect(mockFunction.mock.calls.length).toBe(7);
  });

  describe('isOld', () => {
    /* Para que este teste funcione, você terá que implementar a função isOld corretamente.
        Ele deve funcionar com a variável de teste e o array de pessoas implementadas no beforeAll neste arquivo.
    */
    test('excluir os menores de idade', () => {
      const test = [{ name: 'lala', age: 19 }, { name: 'pepito', age: 10 }, { name: 'xuxa', age: 6 }];
      const result = isOld(array);
      expect(isOld(test).length).toBe(1);
      // execute a função passando a variável de teste.
      expect(result.length).toBe(5);
    });
  });

  describe('AddFacilitador', () => {
    /* a função addFacilitador deve adicionar corretamente um novo objeto ao array */
    test('agregar un facilitador', () => {
      facilitador = { name: 'Leticia', age: 'undefined' };
      const result = addFacilitador(array, facilitador);
      expect(result).toBe(8);
    });

    /* Você deve usar a função addFacilitador passando o array de objetos como argumento
      e as variáveis (emptyObj, emptyObj2 y emptyObj3).
    */

    test('Se o objeto estiver vazio ou sem dados, ele não deve ser adicionado.', async () => {
      const emptyObj = {};
      const emptyObj2 = { name: 'Matheus' };
      const emptyObj3 = { age: 5 };
      const result = addFacilitador(array, emptyObj);
      const result2 = addFacilitador(array, emptyObj2);
      const result3 = addFacilitador(array, emptyObj3);
      /* seu código aqui: use o método expect() e toEqual() para completar o teste */
      expect(result).toEqual([]);
      expect(result2).toEqual([]);
      expect(result3).toEqual([]);
    });
  });

  describe('modificarNome', () => {
    /* Este teste não exige que você modifique nada, mas certifique-se de implementar corretamente
     a função modificarNome */

    test('por padrão deve retornar o primeiro nome do array com asterisco', () => {
      expect(modificarNome('*', '*', array)).toEqual('*João*');
    });

    /* A função modificarNome deve ser executada dentro do método expect, lembre-se que Sabrina
      está localizada na posição 3 da matriz */

    test('deve retornar o array inteiro incluindo o *nome* passado pelo parâmetro', async () => {
      const obj = { name: '*Sabrina*', age: 27, check: true };
      const functionNome = modificarNome('*', '*', array, 3);

      /* Aqui seu código */
      expect(functionNome.length).toBe(8);// Verifica se a length do array está correta.
    });

    /* Neste teste, você não precisa fazer nada, mas deve garantir que ele passe em todos os casos */
    test('passada uma posição, ele deve retornar o nome dessa posição com "*" ', async () => {
      const gabriela = await modificarNome('*', '*', array, 4)[4].name;
      const isabella = await modificarNome('*', '*', array, 2)[2].name;
      const thiago = await modificarNome('*', '*', array, 1);
      const joao = await modificarNome('*', '*', array, 0)[0].name;
      const leticia = await modificarNome('*', '*', array, 7)[7].name;
      expect(leticia).toEqual('*Leticia*');
      expect(gabriela).toEqual('*Gabriela*');
      expect(isabella).toEqual('*Isabella*');
      expect(thiago[1].name).toEqual('*Thiago*');
      expect(joao).toEqual('*João*');
      expect(thiago.length).toBe(8);
    });
  });

  /* Use o método expect para verificar se todas são funções */

  test('deve ser uma função', () => {
    /* Aqui é seu código: deve implementar 4 expects (um para cada função) */
  });
});
