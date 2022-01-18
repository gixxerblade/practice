/**
 * Write a JavaScript function which returns the n rows by n columns identity matrix.
 * Input
 * matrix(4);
 * Output
 *  1 
 *  0 
 *  0 
 *  0 
 *  0 
 *  1 
 *  0 
 *  0 
 *  0 
 *  0 
 *  1 
 *  0 
 *  0 
 *  0 
 *  0 
 *  1 
 */

const matrix = (size: number) => {
  const array: number[] = []
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (row === col) {
        array.push(1)
      } else {
        array.push(0)
      }
    }
  }
  return array.join()
}

console.log(matrix(4)); // 1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1
/**
 * 1 0 0 0
 * 0 1 0 0
 * 0 0 1 0
 * 0 0 0 1
 */
console.log(matrix(5)); //1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1
/**
 * 1 0 0 0 0
 * 0 1 0 0 0
 * 0 0 1 0 0
 * 0 0 0 1 0
 * 0 0 0 0 1
 */
