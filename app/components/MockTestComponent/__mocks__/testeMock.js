/* Você não precisa fazer nenhuma alteração nessa função. */
function usingCallback(array, callback) {
  return array.map((e) => {
    if (callback(e)) e.check = true;
    return e;
  });
}

/* Temos que implementar a lógica para verificar se é um Facilitador com todos os dados,
  se um dado estiver faltando ele deve retornar um array , caso contrário você deve adicioná-lo
  ao array ...possíveis dados {nome:’’, idade:’’, facilitador:’’}
*/

function addFacilitador(array, facilitador) {
  if (facilitador.name && facilitador.age) {
    return array.push(facilitador);
  }
  return [];
}

/** Deverá implementar a lógica para que:
 * 1- Caso não passem a posição (pos) como parâmetro, só retorna o primeiro nome do array.
 * entre asteriscos *nome*
 * 2- Se eles passarem a posição, você deve adicionar asteriscos apenas ao nome da
 posição e retornar o array inteiro com todos os dados
 */

function modificarNome(esquerda, direita, array, pos = null) {
  if (pos !== null) {
    array[pos].name = (`${esquerda}${array[pos].name}${direita}`);
    return array;
  }
  return `${esquerda}${array[0].name}${direita}`;
}

/* Você deve filtrar e remover pessoas menores de 18 anos */

function isOld(array) {
  return array.filter((item) => item.age >= 18);
}

module.exports = {
  usingCallback,
  addFacilitador,
  modificarNome,
  isOld,
};
