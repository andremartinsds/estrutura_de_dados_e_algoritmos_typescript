export class VetorNaoOrdenado {
  private ultimaPosicao: number;
  private vetor: number[];

  constructor(private capacidade: number) {
    this.ultimaPosicao = -1;
    this.vetor = [];
  }

  valorNaoEncontrado(value: number): boolean {
    return this.procurar(value) === -1;
  }

  inserir(value: number) {
    if (this.ultimaPosicao == this.capacidade - 1) {
      return -1;
    }
    if (this.valorNaoEncontrado(value)) {
      this.ultimaPosicao += 1;
      this.vetor[this.ultimaPosicao] = value;
    } else {
      return -1;
    }
  }

  remover(value: number) {
    const foundIndex = this.procurar(value);
    if (!this.vetor[foundIndex]) {
      return -1;
    }

    for (let i = 0; i < this.capacidade - 1; i++) {
      if (this.vetor[i] == value) {
        for (let j = i; j < this.capacidade - 1; j++) {
          this.vetor[j] = this.vetor[j + 1];
        }
      }
    }
    this.ultimaPosicao -= 1;
  }

  procurar(value: number): number {
    let result = -1;
    for (let i = 0; i < this.capacidade - 1; i++) {
      if (this.vetor[i] === value) {
        result = i;
      }
    }
    return result;
  }

  imprimir() {
    for (let i = 0; i < this.capacidade - 1; i++) {
      if (!this.vetor[i]) continue;
      console.log(`[Posição: ${i}] -> Valor: ${this.vetor[i]}`);
    }
  }
}

const lista = new VetorNaoOrdenado(5);

lista.inserir(1);
lista.inserir(3);
lista.inserir(2);
lista.inserir(10);

lista.remover(1);

lista.imprimir();
