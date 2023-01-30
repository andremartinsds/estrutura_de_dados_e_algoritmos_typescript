/**
 ** Busca binária
 ** a busca binária é um algorítimo que consegue filtrar dados ordenados de forma mais performática que uma busca
 ** linear.
 ** A estratégia é sempre dividir a lista em duas partes e verificar se o item pesquisado é igual ao item a posição da divisão,
 ** caso o chute/aposta seja menor que o item o incio será igual à posição meio, então o meio é atualizado e então é desconsiderado várias posições
 ** do vetor para comparação, caso o chute for maior que o item então o tamanho total da lista é atribuída para o final da liata para partir do meio.
 ***/

/**
 * Teste
 * Buscando valor 5 da lista [1, 2, 3, 4, 5, 6, 7]
 * * valor para final da lista -> 6
 * * valor para inicio da lista -> 0
 * * enquanto inicio da lista for menor ou igual ao final da lista faça:
 * *
 * * meio da lista é igual a divisão da soma do final mais o inicio da lista por 2: passo 1 = 3
 * * aposta é igual ao elemento da lista que se encontra no meio: passo 1 = 4
 * * item é igual a aposta: not
 * * aposta é maior que item: não
 * * incicio da lista é igual a 3 + 1 (neste caso adicionamos 1 pois o valor na posição 3 já foi verificado)
 * *
 * * meio da lista é igual ao finalDaLista(6) + inicioDaLista(4) dividido por 2 = 5
 * * aposta é igual á 6
 * * aposta(6) é maior que item(5): sim
 * * final da lista recebe meio da lista = 5
 *
 * * meio da lista é igual ao finalDaLista(5) + inicioDaLista(4) dividido por 2 com Math.floor = 4
 * * aposta é igual a lista na posição meio, neste caso 4, ou seja aposta é igual a 5
 * * item é igual a aposta: sim
 * **/
export const buscaBinaria = (lista: number[], item: number): number => {
  let finalDaLista = lista.length - 1;
  let inicioDaLista = 0;
  while (inicioDaLista <= finalDaLista) {
    let meioDaLista = Math.floor((finalDaLista + inicioDaLista) / 2); // => p1->3 p2->5 p3->4
    let aposta = lista[meioDaLista]; // p1->4 p2->6 p3->5
    if (item === aposta) {
      return meioDaLista;
    }
    if (aposta > item) {
      finalDaLista = meioDaLista;
    } else {
      inicioDaLista = meioDaLista + 1;
    }
  }
  return -1;
};
const listaOrdenada = [1, 2, 3, 4, 5, 6, 7];
let result = buscaBinaria(listaOrdenada, 5);

const message =
  result === -1
    ? 'não encontrado'
    : 'Posição da lista que se encontra o elemento \n' + result;
console.log(message);
