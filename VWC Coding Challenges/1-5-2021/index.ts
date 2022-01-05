/**
 * Write a JavaScript function that accepts a string as a parameter
 * and find the longest word within the string.
 * Input
 * 'Web Development Tutorial'
 * Output
 * 'Development'
 */

const findLongestString = (str: string) => {
    const obj = {}
    const strArr = str.split(' ').map((word)=> {
        obj[word] = word.length
    })
    return Object.keys(obj).reduce((a, b)=> {
        return obj[a] > obj[b] ? a : b;
    })
}
console.log(findLongestString('Web Development Tutorial'))
