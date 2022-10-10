import numpy as np

'''
Vetor não ordenado de inteiros, não permite inserção de valores duplicados
Operações:
    inserir
    imprimir
    excluir
    pesquisar
'''


class VetorNaoOrdenado:
    def __init__(self, capacidade_vetor):
        self.capacidade_vetor = capacidade_vetor
        self.ultima_posicao = -1
        self.valores = np.empty(self.capacidade_vetor, dtype=int)

    def insere_no_vetor(self, valor):
        self.ultima_posicao += 1
        self.valores[self.ultima_posicao] = valor

    def insere(self, valor):
        if self.ultima_posicao == self.capacidade_vetor - 1:
            print('A capacidade foi atingida')
        else:
            if self.ultima_posicao == -1:
                self.insere_no_vetor(valor)
            else:
                for i in range(self.ultima_posicao + 1):
                    if self.valores[i] == valor:
                        print(f'Não é permitido inserir {valor} já existe no vetor')
                        return
                self.insere_no_vetor(valor)

    def pesquisa_linear(self, valor):
        for i in range(self.ultima_posicao + 1):
            if self.valores[i] == valor:
                return i
        return -1

    def excluir(self, valor):
        if self.ultima_posicao == -1:
            return -1
        indice_pesquisado = self.pesquisa_linear(valor)
        for i in range(indice_pesquisado, self.ultima_posicao):
            self.valores[i] = self.valores[i + 1]
        self.ultima_posicao -= 1

    def imprime_valores(self):
        if self.ultima_posicao == -1:
            print('O vetor está vazio')
        else:
            for i in range(self.ultima_posicao + 1):
                print(i, '-->', '[', self.valores[i], ']')


if __name__ == '__main__':
    vetor = VetorNaoOrdenado(5)
    vetor.insere(1)
    vetor.insere(8)
    vetor.insere(7)
    vetor.insere(6)
    vetor.insere(5)
    vetor.excluir(7)
    vetor.imprime_valores()

    print('Posicao', vetor.pesquisa_linear(19))
