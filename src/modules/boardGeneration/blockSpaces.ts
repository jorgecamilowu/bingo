import { transposeTable } from "./transpose";

/**
 * @param matrix of the size 18x9
 * @returns the same matrix but with 4 spaces blocked in each row and 8 spaces block across the columns
 */
export function blockSpaces<T>(matrix: NonNullable<T>[][]): (T | null)[][] {
  const output: (T | null)[][] = structuredClone(matrix);

  output.forEach((row) => {
    const indices = generateUniqueRandomIntegers();

    indices.forEach((i) => {
      row[i] = null;
    });
  });

  const transposed = transposeTable(output);

  evenOut(transposed);

  return transposeTable(transposed);
}

function evenOut<T>(matrix: (T | null)[][]) {
  for (let row = 0; row < matrix.length; ++row) {
    let col = 0;
    while (countNullsInRow(matrix, row) < 8 && col < matrix[0].length) {
      if (matrix[row][col] !== null) {
        pull(matrix, row, col);
      }

      col++;
    }

    col = 0;
    while (countNullsInRow(matrix, row) > 8 && col < matrix[0].length) {
      if (matrix[row][col] === null) {
        push(matrix, row, col);
      }

      col++;
    }
  }
}

function pull<T>(matrix: (T | null)[][], row: number, col: number) {
  for (let i = row; i < matrix.length; ++i) {
    if (matrix[i][col] === null) {
      swap(matrix, row, col, i, col);
      return;
    }
  }
}
function push<T>(matrix: (T | null)[][], row: number, col: number) {
  for (let i = row; i < matrix.length; ++i) {
    if (matrix[i][col] !== null) {
      swap(matrix, row, col, i, col);
      return;
    }
  }
}

function countNullsInRow<T>(matrix: (T | null)[][], x: number): number {
  return matrix[x].filter((x) => x === null).length;
}

function swap<T>(matrix: T[][], x: number, y: number, x2: number, y2: number) {
  const temp = matrix[x][y];

  matrix[x][y] = matrix[x2][y2];
  matrix[x2][y2] = temp;
}

function generateUniqueRandomIntegers(): number[] {
  const result: number[] = [];
  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < 4) {
    const randomInteger = Math.floor(Math.random() * 9); // Generates random integer from 0 to 8
    if (!uniqueNumbers.has(randomInteger)) {
      uniqueNumbers.add(randomInteger);
      result.push(randomInteger);
    }
  }

  return result;
}
