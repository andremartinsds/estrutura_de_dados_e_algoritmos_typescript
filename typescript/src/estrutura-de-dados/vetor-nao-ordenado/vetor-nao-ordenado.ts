export class VetorNaoOrdenado {
  private lastPosition: number;
  private vect: Array<number>;
  constructor(private capacidade: number) {
    this.lastPosition = -1;
    this.vect = [];
  }

  insert(value: number) {
    if (this.lastPosition == this.capacidade - 1) {
    } else {
      if (this.search(value) === -1) {
        this.lastPosition += 1;
        this.vect[this.lastPosition] = value;
      } else {
        console.log('Does not permit put one value equal to to other on vect');
      }
    }
  }

  search(value: number): number {
    let result = -1;
    for (let i = 0; i < this.capacidade - 1; i++) {
      if (this.vect[i] === value) {
        result = i;
      }
    }
    return result;
  }

  print() {
    for (let i = 0; i < this.capacidade - 1; i++) {
      if (this.vect[i] === undefined) continue;
      console.log(`Vector position ${i} has the value ${this.vect[i]}`);
    }
  }
}

const vect = new VetorNaoOrdenado(5);
vect.insert(1);
vect.insert(1);
vect.print();
