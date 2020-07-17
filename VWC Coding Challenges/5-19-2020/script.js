let parent = document.getElementById("container");
const button = document.getElementById("button");
let inputString = document.getElementById("input-string");
let inputCell = document.getElementById("input-cell");
let wrong = document.getElementById("wrong");
let row,
  cell,
  count = 1;
for (let columns = 1; columns <= 7; columns++) {
  row = document.createElement("div");
  for (let rows = 1; rows <= 4; rows++) {
    cell = document.createElement("div");
    empty = document.createElement("div");
    //console.log(count);
    cell.innerHTML = count;
    row.append(cell);
    cell.append(empty);
    cell.setAttribute("class", `cell`);
    empty.setAttribute("id", count);
    empty.setAttribute("class", "empty");
    count++;
  }
  row.setAttribute("class", "row");
  parent.append(row);
}
let reset = () => {
  let getCell = inputCell.value;
  let cellNumber = document.getElementById(getCell);
  cellNumber.innerHTML = getCell;
};
let changeText = () => {
  wrong.innerHTML = "";
  let none = document.getElementsByClassName("empty");
  console.log(none);
  none.innerHTML = "";
  let getString = inputString.value;
  let getCell = inputCell.value;
  if (getCell && getString) {
    let cellNumber = document.getElementById(getCell);
    cellNumber.innerHTML = `${getString}`;
    inputString.value = "";
    inputCell.value = "";
  } else {
    wrong.innerHTML = "WRONG! EMPTY VALUES ARE NOT ALLOWED!";
  }
};

button.addEventListener("click", changeText);

console.log(parent.childNodes[1].children[0]);
