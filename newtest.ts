type Separator = '-' | '/' | ':' | '.' | '~' | '_' | '|' | '' | ',';

const curday = (sep: Separator): string => {
  const date = new Date();
  return [date.getMonth(), date.getDay(), date.getFullYear()].join(sep);
};

console.log(curday('-'));
console.log(curday(''));

const num = undefined;
console.log(Number(num) ?? 0);
console.log(Number(num ?? 0));

const weekend = (dateStr: string | number | Date) => {
  const date: Date = new Date(dateStr);
  const day: number = date.getDay();
  if (day === 6 || day === 0) {
    return 'weekend';
  }
  return 'not weekend'
};
console.log(weekend('Nov 15, 2014'));
console.log(weekend('July 30, 2021'));
console.log(weekend('July 31, 2021'));
