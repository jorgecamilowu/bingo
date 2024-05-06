export class Cycler<T> {
  private index = 0;

  constructor(private targets: T[]) {}

  next(): T {
    return this.targets[this.index++ % this.targets.length];
  }
}
