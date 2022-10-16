''''
Busca binária
a busca binária é um algorítimo que consegue filtrar dados ordenados de forma mais performática que uma busca
linear.
A estratégia é sempre dividir a lista em duas partes e verificar se o item pesquisado é igual ao item a posição da divisão,
caso o chute seja menor que o item o incio será igual à posição meio, então o meio é atualizado e então é desconsiderado várias posições
do vetor para comparação, caso o chute for maior que o item então o tamanho da lista é atribuída para partir do meio também.
'''


def busca_binaria(lista, item):
    inicio = 0
    fim = len(lista) - 1
    while inicio <= fim:
        meio = (fim + inicio) // 2
        chute = lista[meio]
        if chute == item:
            return {chute: meio}
        if chute < item:
            inicio = meio + 1
        else:
            fim = meio
    return None


if __name__ == '__main__':
    lista = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
             'u', 'v', 'w', 'x', 'y', 'z']
    print(busca_binaria(lista, 'y'))
