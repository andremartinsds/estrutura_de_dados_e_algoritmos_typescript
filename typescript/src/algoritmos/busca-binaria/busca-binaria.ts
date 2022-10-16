/**
 ** Busca binária
 ** a busca binária é um algorítimo que consegue filtrar dados ordenados de forma mais performática que uma busca
 ** linear.
 ** A estratégia é sempre dividir a lista em duas partes e verificar se o item pesquisado é igual ao item a posição da divisão,
 ** caso o chute seja menor que o item o incio será igual à posição meio, então o meio é atualizado e então é desconsiderado várias posições
 ** do vetor para comparação, caso o chute for maior que o item então o tamanho da lista é atribuída para partir do meio também.
 ***/
export const buscaBinaria = (lista: number[], item: number): number => {
  let finalDaLista = lista.length - 1;
  let inicioDaLista = 0;
  while (inicioDaLista <= finalDaLista) {
    let meioDaLista = Math.floor((finalDaLista + inicioDaLista) / 2);
    let aposta = lista[meioDaLista];
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
const result = buscaBinaria(listaOrdenada, 5);
console.log(result);
