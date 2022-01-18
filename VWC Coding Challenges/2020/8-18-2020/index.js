const values = [
  {
    name: "John",
    address: "Doe",
    city: "120 jefferson st.",
    state: "Riverside",
    zip: "NJ",
  },
  {
    name: "Jack",
    address: "McGinnis",
    city: "220 hobo Av.",
    state: "Phila",
    zip: "PA",
  },
  {
    name: 'John "Da Man"',
    address: "Repici",
    city: "120 Jefferson St.",
    state: "Riverside",
    zip: " NJ",
  },
  {
    name: "Stephen",
    address: "Tyler",
    city: '7452 Terrace "At the Plaza" Road',
    state: "SomeTown",
    zip: "SD",
  },
  {
    name: "John",
    address: "Blankman",
    city: "123 Sesasme St",
    state: "SomeTown",
    zip: "SD",
  },
  {
    name: 'Joan "the bone"',
    address: "Anne",
    city: "9th St",
    state: "Desert City",
    zip: "CO",
  },
];

let arrOfObjToCSV = (arr) => {
  arr.forEach((el, i, arr) => {
    return Array.prototype.map.call(arr, (el) => el[i]).toString();
  });
};

console.log(arrOfObjToCSV(values));
