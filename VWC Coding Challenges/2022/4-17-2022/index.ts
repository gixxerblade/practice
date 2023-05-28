/**
 * Write a JavaScript function to check whether a given value is IP value or not.
 * Input
 * console.log(is_IP('198.156.23.5'));
 * console.log(is_IP("172.16.0.1"));
 * Output
 * true
 * true 
 */

const hasOnlyDigits = (ip: number[]) => {
  return ip.every((n) => Number.isInteger(n));
}
const is_IP = (ipToCheck: string) => {
  const ip = ipToCheck.split('.').map((n) => +n)
  if (ip.length !== 4) {
    return false
  }
  if (!hasOnlyDigits(ip)) {
    return false
  }
  ip.forEach((num) => {
    if (num < 0 || num > 255) {
      return false
    }
  })
  return true
}

console.log(is_IP('198.156.23.5'));
console.log(is_IP("172.16.0.1"));
console.log(is_IP("172.16.0.f"));
console.log(is_IP("33333.16.0.f"));
console.log(is_IP('y.y.y.y'));
console.log(is_IP('not.an.ip.address'));
