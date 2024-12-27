import { getGrid } from '../largestProductInGrid/grid'

const maxPath = async () => {
 const grid = await getGrid('./values.txt');
 for (let row = grid.length - 2; row >= 0; row--) {
  for (let col = 0; col < grid[row].length; col++) {
    grid[row][col] += Math.max(grid[row + 1][col], grid[row + 1][col + 1]);
  }
 }
 return grid[0][0];
}
maxPath().then((data) => console.log(data));
