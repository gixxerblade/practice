var library = [
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
    }
];
var printReadingList = function (lib) {
    return lib.map(function (item) {
        return item.readingStatus
            ? "Already read '" + item.title + "' by " + item.author
            : "Still need to read '" + item.title + "' by " + item.author;
    }).join('\n');
};
console.log(printReadingList(library));
