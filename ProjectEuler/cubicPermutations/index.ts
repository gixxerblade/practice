/**
 * The cube, 41063625 (345^3), can be permuted to produce two other cubes: 56623104 (384^3) and 66430125
 * (405^3). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are
 * also cube.
 * Find the smallest cube for which exactly five permutations of its digits are cube.</p>
 */

import { getPermutations } from '../utils/utils';

function solve() {
  const cubeMap: Map<string, number[]> = new Map();
  
  let n = 1;
  while (true) {
    const cube = n ** 3;
    const key = cube.toString().split('').sort().join('');
    
    if (!cubeMap.has(key)) {
      cubeMap.set(key, []);
    }
    cubeMap.get(key)?.push(cube);
    
    if (cubeMap.get(key)?.length === 5) {
      return Math.min(...(cubeMap.get(key) || []));
    }
    n++;
  }
}

console.log(solve())