import { describe, it, expect } from "bun:test";
import { generateBoard } from "./generateBoard";

describe("Generate board tests", () => {
  it("returns a table with dimensions 9 by 18", () => {
    const table = generateBoard();

    expect(table[0].length).toBe(9);
    expect(table.length).toBe(18);
  });

  it("the elements of the table are either number or null", () => {
    const table = generateBoard();

    for (let row = 0; row < table.length; ++row) {
      for (let col = 0; col < table[0].length; ++col) {
        expect(
          typeof table[row][col] === "number" || table[row][col] === null
        ).toBeTrue();
      }
    }
  });
});
