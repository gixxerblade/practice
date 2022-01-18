//@ Write a JavaScript program to display the reading status
//(i.e. display book name, author name and reading status) of the following books.
var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    },
];
var outputStatus = function (obj) {
    var output = "";
    obj.forEach(function (item) {
        if (item.readingStatus === false) {
            output += "You still need to read '" + item.title + "' by " + item.author + ".\n";
        }
        if (item.readingStatus === true)
            output += "Already read '" + item.title + "' by " + item.author + ".\n";
    });
    return output;
};
console.log(outputStatus(library));
