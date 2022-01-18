/**
 * Write a JavaScript function to check whether a given value is IP value or not.
 * @Input
 * console.log(is_IP('198.156.23.5'));
 * console.log(is_IP("172.16.0.1"));
 * @Output
 * true
 * true
 */
const ip1 = '198.156.23.5';
const ip2 = '198.156.23.-1';
const ip3 = '253,253?253.1'
const isIp = (ip: string) => {
  let ipArr = ip.split('.')
  if(ipArr.length < 4 || ipArr.length > 4) return false
  // >>> will allow representation if unsigned (read: negative) bits 
  // num.toString(2) will only represent positive numbers
  const max = (253 >>> 0).toString(2)
  return ipArr.map((num)=> {
    const num2Bin = (parseInt(num) >>> 0).toString(2)
    return num2Bin < max && parseInt((parseInt(num) >>> 0).toString(2)) > 0
  }).every(Boolean)
}

console.log(isIp(ip1))
console.log(isIp(ip2))
console.log(isIp(ip3))