// const array = [{ name: 'z', checked: true },
//   { name: 'r', checked: false },
//   { name: 'b', checked: true },
//   { name: 'x', checked: true },
//   { name: 'a', checked: false }];

// array.sort((a, b) => {
//   const checkedOrder = +b.checked - +a.checked;
//   const nameOrder = a.name.localeCompare(b.name);
//   return checkedOrder || nameOrder
// })
// console.log(array)

/**
 * [ { name: 'b', checked: true },
 * { name: 'x', checked: true },
 * { name: 'z', checked: true },
 * { name: 'a', checked: false },
 * { name: 'r', checked: false } ]
 */

// const compress = (str: string) => {
//   let output = '';
//   let curr = str[0];
//   let n = 0;

//   for (let i = 0; i <= str.length; i++) {
//     const char = str[i];
//     if (char === curr) {
//       n++
//     } else {
//       if (n > 1) {
//         output += curr + n
//       } else {
//         output += curr
//       }
//       curr = char
//       n = 1
//     }
//   }
//   return output
// }

// console.log(compress('abcaaabbb'));
 
// const getBreakTime = (breakTime: number): number => {
//   const { log } = Math;
//   return log(breakTime) / log(2)
// }

// console.log(getBreakTime(1))
// console.log(getBreakTime(2))
// console.log(getBreakTime(4))
// console.log(getBreakTime(8))
// console.log(getBreakTime(16))
// console.log(getBreakTime(32))
// console.log(getBreakTime(64))

// console.log(Array.from({ length: 10}, () => Math.random()))

// P = N x T x (0.55 - 0.00005 x N x (N - 1))

// const productivity = (people: number, timePerson: number) => {
//   const totalTime = timePerson * people;
//   return people * totalTime * (0.55 - 0.0005 * people * (people - 1)); 
// }

// console.log(productivity(6, 7))

// interface Product {
//   id: string,
//   companionProducts?: Product[],
//   companionToProductId?: string,
//   name: string,
// }

// function extractCompanionProductsForEach (products: Product[]) {
//   const extractedProducts: Product[] = [];
//   products.forEach((product) => {
//     if (product.companionProducts) {
//       product.companionProducts.forEach((companionProduct) => {
//         extractedProducts.push({
//           ...companionProduct,
//           companionToProductId: product.id,
//         });
//       });
//     }
//   });
//   return [
//     ...products.map((product) => (
//       { ...product, companionProducts: undefined }
//     )),
//     ...extractedProducts,
//   ] as Product[];
// }

// function extractCompanionProductsReduce (products: Product[]) {
//   const extractedProducts = products.reduce<Product[]>((acc, product) => {
//     if (product.companionProducts) {
//       product.companionProducts.forEach(companionProduct => {
//         acc.push({
//           ...companionProduct,
//           companionToProductId: product.id,
//         });
//       });
//     }
//     return acc;
//   }, []);

//   const productsWithoutCompanionProducts = products.map(product => ({ ...product, companionProducts: undefined }));

//   return [...productsWithoutCompanionProducts, ...extractedProducts];
// }

// function generateRandomId() {
//   return Math.random().toString(36).substring(2) + Date.now().toString(36);
// }

// const companionProducts: Product[] = Array.from({ length: 1000 }, (product, idx) => ({
//   name: `Product ${idx + 1}`,
//   id: generateRandomId(),
// }))

// const products: Product[] = Array.from({ length: 1000 }, (product, idx) => ({
//   name: `Product ${idx + 1}`,
//   companionProducts,
//   id: generateRandomId()
// }));

// console.time('forEach');
// extractCompanionProductsForEach(products);
// console.timeEnd('forEach');

// console.time('reduce');
// extractCompanionProductsReduce(products);
// console.timeEnd('reduce');
// const reverse = (input: number) => {
//   let error: Error;
//   if (input > Number.MAX_SAFE_INTEGER) {
//     error = new Error('Number too large!');
//     return error.message
//   }
//   const isNegative = input < 0;
//   let absoluteNumber = Math.abs(input);
//   let numberReversed = 0;
//   while (absoluteNumber > 0) {
//     const lastNumber = Math.floor(absoluteNumber % 10);
//     numberReversed = (numberReversed * 10) + lastNumber;
//     absoluteNumber = Math.floor(absoluteNumber / 10);
//   }
//   return isNegative ? -numberReversed : numberReversed;
// }
// console.log(reverse(102));
// console.log(reverse(-102));
// console.log(reverse(-102000022));


/**
 * 
 * Given a start number a, an ending number b, and a string str that can be "odd", "even", or "prime", return all of the numbers that are odd, even, or prime between a and b. a will not always necessarily be less than b!

Example:

> betweenNums(3, 11, 'even')
> [4,6,8,10]

> betweenNums(15, 1, 'prime')
> [2,3,5,7,11,13]

 */

// const isPrime = (num: number) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1 && num !== 0;
// }

// Using bitwise operator '&' we can determine odd or even
// All odd binary numbers end in 1
// 00
// 0011 - 3 ends in 1
// how it works:
// 0 0 1 1 - 3
// 0 0 0 1 - 1
// ---------
// 0 0 0 1 < last number is 1 so 3 is odd
// const isOdd = (num: number) => num & 1;

// type WhichSet = 'odd' | 'even' | 'prime';
// const betweenNums = (start: number, end: number, whichSet: WhichSet) => {
//   let arr: number[] = [];
//   const length = Math.abs(start - end) - 1;
//   if (start < end) {
//     arr = Array.from({ length }, (_, idx) => {
//       return idx + start + 1
//     });
//   } else {
//     arr = Array.from({ length }, (_, idx) => {
//       return idx + end + 1
//     });
//   }
//   switch (whichSet) {
//     case 'odd':
//       return arr.filter((n) => isOdd(n))
//     case 'even':
//       return arr.filter((n) => !isOdd(n))
//     // defaults to 'prime'
//     default:
//       return arr.filter((n) => isPrime(n));
//   }
// }

// console.log(betweenNums(3, 11, 'odd'));
// console.log(betweenNums(3, 11, 'even'));
// console.log(betweenNums(3, 11, 'prime'));

// console.log(betweenNums(15, 1, 'odd'));
// console.log(betweenNums(15, 1, 'even'));
// console.log(betweenNums(15, 1, 'prime'));
