let listOfNumsOfRndLen = () => {
  /* 
Create random length of list no greater than 100
*/
  let len = Math.floor(Math.random() * 100);
  /* 
  Something to store the list in
  */
  let list = [];
  console.log("Length of list: ", len);
  /* 
  Create list of random numbers (num) no greater than 1000
  */
  for (let i = 0; i <= len; i++) {
    let num = Math.floor(Math.random() * 1000);
    /* 
    Push list of numbers to an array
    */
    list.push(num);
  }
  console.log(list.join(", "));

  /* 
  Find max using Math.max and the spread operator. 
  */
  console.log("Largest number in list: ", Math.max(...list));
};
listOfNumsOfRndLen();
