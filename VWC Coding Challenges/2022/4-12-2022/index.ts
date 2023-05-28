/**
 * Write a JavaScript program to display the reading status (i.e. display book name, author name and reading
 * status) of the following books.
 * Input
 * const library = [ 
 *    {
 *        author: 'Bill Gates',
 *        title: 'The Road Ahead',
 *        readingStatus: true
 *    },
 *    {
 *        author: 'Steve Jobs',
 *        title: 'Walter Isaacson',
 *        readingStatus: true
 *    },
 *    {
 *        author: 'Suzanne Collins',
 *        title:  'Mockingjay: The Final Book of The Hunger Games', 
 *        readingStatus: false
 *    }];
 * Output
 * Already read 'Bill Gates' by The Road Ahead.
 * Already read 'Steve Jobs' by Walter Isaacson.
 * You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
 */

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }];
type Library = {
  author: string,
  title: string,
  readingStatus: boolean,
}
const readingStatus = (library: Library[]) => library.map((book) => {
  const { readingStatus, author, title } = book
  return `${readingStatus
      ? 'Already read'
      : 'You still need to read'} ` +
    `${title} by ${author}`
}).join('\n');

console.log(readingStatus(library))

const getLastOfPi = () => {
  const PI = Math.PI.toString()
  return PI.charAt(PI.length - 1)
}
