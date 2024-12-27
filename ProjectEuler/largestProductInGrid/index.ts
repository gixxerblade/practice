import { getGrid } from './grid';

const left = (currIdx: number, arr: number[]) => {
  const canGoLeft =
    arr[currIdx - 1] !== undefined &&
    arr[currIdx - 2] !== undefined &&
    arr[currIdx - 3] !== undefined;
  if (canGoLeft) {
    const fourLeft = arr.slice(currIdx - 4, currIdx);
    return fourLeft.reduce((a, b) => a * b, 1);
  }
  return 0;
};
const right = (currIdx: number, arr: number[]) => {
  const canGoRight =
    arr[currIdx + 1] !== undefined &&
    arr[currIdx + 2] !== undefined &&
    arr[currIdx + 3] !== undefined;
  if (canGoRight) {
    const fourRight = arr.slice(currIdx, currIdx + 4);
    return fourRight.reduce((a, b) => a * b, 1);
  }
  return 0;
};
const up = (rowIdx: number, colIdx: number, grid: number[][]) => {
  const canGoUp = rowIdx - 3 >= 0;
  if (canGoUp) {
    const fourUp =
      grid[rowIdx][colIdx] *
      grid[rowIdx - 1][colIdx] *
      grid[rowIdx - 2][colIdx] *
      grid[rowIdx - 3][colIdx];
    return fourUp;
  }
  return 0;
};
const down = (rowIdx: number, colIdx: number, grid: number[][]) => {
  const canGoDown = rowIdx + 3 < grid.length;
  if (canGoDown) {
    const fourDown =
      grid[rowIdx][colIdx] *
      grid[rowIdx + 1][colIdx] *
      grid[rowIdx + 2][colIdx] *
      grid[rowIdx + 3][colIdx];
    console.log(fourDown);
    return fourDown;
  }
  return 0;
};
const upLeft = (rowIdx: number, colIdx: number, grid: number[][]) => {
  const canGoUp = rowIdx - 3 >= 0;
  if (canGoUp) {
    const fourUp =
      grid[rowIdx][colIdx] *
      grid[rowIdx - 1][colIdx - 1] *
      grid[rowIdx - 2][colIdx - 2] *
      grid[rowIdx - 3][colIdx - 3];
    return fourUp;
  }
  return 0;
};
const upRight = (rowIdx: number, colIdx: number, grid: number[][]) => {
  const canGoUp = rowIdx - 3 >= 0;
  if (canGoUp) {
    const fourUp =
      grid[rowIdx][colIdx] *
      grid[rowIdx - 1][colIdx + 1] *
      grid[rowIdx - 2][colIdx + 2] *
      grid[rowIdx - 3][colIdx + 3];
    return fourUp;
  }
  return 0;
};
// Did not do since answer was found diagonally up
const downRight = (rowIdx: number, colIdx: number, grid: number[][]) => {
  const canGoDown = rowIdx + 3 < grid.length;
};
// Did not do since answer was found diagonally up
const downLeft = (rowIdx: number, colIdx: number, grid: number[][]) => {
  const canGoDown = rowIdx + 3 < grid.length;
};
const largestProductInGrid = async () => {
  const grid = await getGrid('./grid.txt');
  let largest = 0;
  grid.forEach((row, rowIndex) => {
    row.forEach((_num: number, colIdx: number, self: number[]) => {
      const leftDirection = left(colIdx, self);
      const rightDirection = right(colIdx, self);
      const upDirection = up(rowIndex, colIdx, grid);
      const downDirection = down(rowIndex, colIdx, grid);
      const upLeftDirection = upLeft(rowIndex, colIdx, grid);
      const upRightDirection = upRight(rowIndex, colIdx, grid);
      const best = Math.max(
        leftDirection,
        rightDirection,
        upDirection,
        downDirection,
        upLeftDirection,
        upRightDirection
      );
      if (best > largest) {
        largest = best;
      }
    });
  });
  return largest;
};
largestProductInGrid().then(val => console.log(val));
