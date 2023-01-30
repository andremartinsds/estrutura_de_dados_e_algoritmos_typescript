import numpy as np

'''
Vetor ordenado de inteiros
Operações:
    inserir
    imprimir
'''


class VetorOrdenado:
    def __init__(self, capacidade_vetor):
        self.capacidade_vetor = capacidade_vetor
        self.ultima_posicao = -1
        self.valores = np.empty(self.capacidade_vetor, dtype=int)

    def insere(self, valor):
        if self.ultima_posicao == self.capacidade_vetor - 1:
            print('O vetor está cheio')
            return

        posicao_para_insercao = 0
        for i in range(self.ultima_posicao + 1):
            posicao_para_insercao = i
            if self.valores[i] > valor:
                break
            if i == self.ultima_posicao:
                posicao_para_insercao = i + 1

        x = self.ultima_posicao
        while x >= posicao_para_insercao:
            self.valores[x + 1] = self.valores[x]
            x -= 1

        self.valores[posicao_para_insercao] = valor
        self.ultima_posicao += 1

    def imprime(self):
        if self.ultima_posicao == -1:
            print('O vetor está vazio')
        else:
            for i in range(self.ultima_posicao + 1):
                print(i, '-->', '[', self.valores[i], ']')


if __name__ == '__main__':
    vetor = VetorOrdenado(5)
    vetor.insere(1)
    vetor.insere(2)
    vetor.insere(5)
    vetor.insere(10)
    vetor.insere(7)
    vetor.imprime()
