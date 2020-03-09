/* 
Make a function that takes two arguments the first is a file name and the second is data. 
Save the data with the file name as a key in local storage. 
Also create a local storage key in local storage that holds all saved file names saved
*/
const button = document.getElementById("btn");
//first argument also file input
const filenameInput = document.getElementById("filename-input");
//second argument also data input
const dataInput = document.getElementById("data-input");
let fileNameOutput = document.getElementById("filename-output");
let dataOutput = document.getElementById("data-output");
let error = document.getElementById("error");
let table = document.getElementById("table");
//starting position for row. zero indexed have to start at 1 to keep headings
let count = 1;
//array to store all filename keys
let filenameList = [];

//function to add item to table
function addRow(row, filename, data) {
  let newRow = table.insertRow(row);
  let newFilenameCell = newRow.insertCell(0);
  let newDataCell = newRow.insertCell(1);
  let filenameText = document.createTextNode(filename);
  let dataText = document.createTextNode(data);
  newFilenameCell.appendChild(filenameText);
  newDataCell.appendChild(dataText);
}

let storeData = (filename, data) => {
  //validate entry
  if (filename === "" || data === "") {
    error.innerHTML = "You must enter a value";
    filenameInput.focus();
  } else {
    //clear the error message, if any
    error.innerHTML = "";

    //trim all whitespace from filename
    let trimmedFilename = filename.replace(/ /g, "");

    //add entered values to local storage
    localStorage.setItem(trimmedFilename, data);

    //add a row to the table
    //args filename, and data for the cells
    addRow(count, filename, data);

    //add trimmed filename to new filenameList array
    filenameList.push(localStorage.key(trimmedFilename));

    //add new item to All Files Names list
    //JSON.stringify to make it JSON compliant
    localStorage.setItem("All File Names", JSON.stringify(filenameList));
    console.log(localStorage.getItem("All File Names"));
    
    //add 1 to table row count so next item goes to bottom
    count++;
  }
};

button.addEventListener("click", () => {
  storeData(filenameInput.value, dataInput.value);
  filenameInput.value = "";
  dataInput.value = "";
  filenameInput.focus;
});
