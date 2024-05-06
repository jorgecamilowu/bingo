import { describe, it, expect } from "bun:test";
import { blockSpaces } from "./blockSpaces";
import { transposeTable } from "./transpose";

describe("block spaces tests", () => {
  it("blocks 4 spaces in each row and 8 spaces in each column", () => {
    const matrix = Array.from({ length: 18 }, () =>
      Array.from({ length: 9 }, () => 0)
    );
    const output = blockSpaces(matrix);

    expect(
      output.every(
        (row) => row.filter((element) => element === null).length === 4
      )
    ).toBeTrue();

    const transposed = transposeTable(output);

    expect(
      transposed.every(
        (row) => row.filter((element) => element === null).length === 8
      )
    ).toBeTrue();
  });
});
