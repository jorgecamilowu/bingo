import { Cycler } from "./Cycler";
import { RandomNumberAssigner } from "./NumberAssigner";
import { transposeTable } from "./transpose";

export function assignNumbersToNonNulls<T>(
  matrix: (T | null)[][]
): (number | null)[][] {
  const numberCycler = new Cycler([
    new RandomNumberAssigner(1, 10),
    new RandomNumberAssigner(11, 20),
    new RandomNumberAssigner(21, 30),
    new RandomNumberAssigner(31, 40),
    new RandomNumberAssigner(41, 50),
    new RandomNumberAssigner(51, 60),
    new RandomNumberAssigner(61, 70),
    new RandomNumberAssigner(71, 80),
    new RandomNumberAssigner(81, 90),
  ]);

  const transposed = transposeTable(structuredClone(matrix));

  const filled = transposed.map((row) => {
    const numberAssigner = numberCycler.next();
    return row.map((ele) => {
      if (ele === null) {
        return null;
      }
      return numberAssigner.assign();
    });
  });

  const output = transposeTable(filled);

  return output;
}
