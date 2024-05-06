// validates that the rows in the matrix are of same length and are non-empty
export const isValidMatrix = <T>(table: T[][]) => {
  const set = new Set<number>();

  table.forEach((row) => {
    set.add(row.length);
  });

  return set.size === 1 && [...set][0] > 0;
};

/**
 * Performs transpose operation on a given matrix
 * @param table Well-formed matrix (rows are of equal length and non-empty)
 * @returns transposed matrix or undefined if given mal-formed matrix
 */
export const transposeTable = <T>(table: T[][]): T[][] => {
  // transpose operation is undefined for empty row
  if (table.length === 0 || !isValidMatrix(table)) {
    throw new Error("failed to transpose");
  }

  const output: T[][] = Array(table[0].length).fill([]);

  table.forEach((row) => {
    row.forEach((col, colIdx) => {
      output[colIdx] = [...output[colIdx], col];
    });
  });

  return output;
};
