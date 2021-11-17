/**
 * Write a JavaScript program to display the reading status (i.e. display book name, author
 * name and reading status) of the following books.
 * @Input
 * const library = [ 
 *    {
 *        author: 'Bill Gates',
 *        title: 'The Road Ahead',
 *        readingStatus: true
 *    },
 *    {       author: 'Steve Jobs',
 *        title: 'Walter Isaacson',      
 *        readingStatus: true
 *    },
 *    {
 *        author: 'Suzanne Collins',
 *        title:  'Mockingjay: The Final Book of The Hunger Games', 
 *        readingStatus: false
 *    }];
 * @Output
 * Already read 'Bill Gates' by The Road Ahead.
 * Already read 'Steve Jobs' by Walter Isaacson.
 * You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
 */
interface Library {
  author: string;
  title: string;
  readingStatus: boolean;
}
const library: Library[] = [
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

const printReadingList = (lib: Library[]) => {
  return lib.map((item) => {
    return item.readingStatus
      ? `Already read '${item.title}' by ${item.author}`
      : `Still need to read '${item.title}' by ${item.author}`
  }).join('\n')
}
console.log(printReadingList(library))