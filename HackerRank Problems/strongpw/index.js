let minimumNumber = (n, password) => {
  //password = password.split(" ");
  let count = 0;
  let lower = password.match(/[a-z]/g);
  let upper = password.match(/[A-Z]/g);
  let numbers = password.match(/[0-9]/g);
  let special = password.match(/[!@#\$%\^&\*\(\)\-\+]/g);
  if (!lower) count++;
  if (!upper) count++;
  if (!numbers) count++;
  if (!special) count++;
  if (6 - n > 0 && count <= 6 - n) return 6 - n;
  return count;
};

console.log(minimumNumber(3, "Ab1"));
console.log(minimumNumber(4, "4700"));
console.log(minimumNumber(4, "goxg"));
console.log(minimumNumber(4, "790"));
console.log(minimumNumber(7, "AUzs-nV"));
console.log(minimumNumber(11, "#HackerRank"));
