const isDateString = (str: string): boolean => {
  let date: RegExpMatchArray = str.match(
    /(([0-2][0-9])|([1-9])|(3[0-1]))\/((1[0-2])|([1-9]))\/[0-9]{4}/g
  );
  return Date.parse(date) ? true : false;
};
console.log(isDateString("1/5/2020 omg wtf"));
console.log(isDateString("01/22/2015 lol"));
console.log(isDateString("32/01/2015 lol"));
