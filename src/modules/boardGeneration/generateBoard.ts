import { blockSpaces } from "./blockSpaces";
import { assignNumbersToNonNulls } from "./assignNumbersToNonNulls";

export function generateBoard(): (number | null)[][] {
  const emptyTable = blockSpaces(
    // matrix of 9 by 18
    Array.from({ length: 18 }, () => Array.from({ length: 9 }, () => 0))
  );

  return assignNumbersToNonNulls(emptyTable);
}
