const month_name = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
};

console.log(month_name(new Date('1/25/2020')));
console.log(month_name(new Date('10/11/2009')));
console.log(month_name(new Date('11/13/2014')));
console.log(month_name(new Date())); // today
