export class RandomNumberAssigner {
  private numbers: number[];

  constructor(min: number, max: number) {
    this.numbers = [];

    for (let i = min; i <= max; ++i) {
      this.numbers.push(i);
    }
  }

  assign(): number {
    if (this.numbers.length === 0) {
      throw new Error("ran out of numbers!");
    }

    const index = Math.floor(Math.random() * this.numbers.length);
    const output = this.numbers[index];

    // Remove the picked number from this.numbers
    this.numbers.splice(index, 1);

    return output;
  }
}
