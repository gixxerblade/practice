//@ Write a JavaScript program to display the reading status
//(i.e. display book name, author name and reading status) of the following books.

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
//! OUTPUT
// Already read 'Bill Gates' by The Road Ahead.
// Already read 'Steve Jobs' by Walter Isaacson.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

interface Library {
  forEach: any;
  [index: number]: {
    author: string;
    title: string;
    readingStatus: boolean;
  };
}
const outputStatus = (obj: Library): string => {
  let output = "";
  obj.forEach((item: any) => {
    if (item.readingStatus === false) {
      output += `You still need to read '${item.title}' by ${item.author}.\n`;
    }
    if (item.readingStatus === true)
      output += `Already read '${item.title}' by ${item.author}.\n`;
  });
  return output;
};
console.log(outputStatus(library));
