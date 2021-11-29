/**
 * Alphabetical Words
 * Given a list of words or sentences, rearrange the sentences or words 
 * so they return in alphabetical order.
 * eg.
 * @INPUT my zebra had a kitten
 * @OUTPUT a had kitten my zebra
 */

console.log(process.argv[2].split(' ').sort().join(' '))
