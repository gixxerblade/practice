const getSize = (obj: {}):number => {
  let size = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
};
let obj = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(getSize(obj));
