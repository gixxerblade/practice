/**
 * You have some gifts you want to return. Gifts bought in December have a 90-day return window,
 * and all other gifts have a 30-day return window. Given a gift's buy date,
 * write a function that prints the last day you can return the gift.
 */
const formatShortDate = (date: Date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  if (isNaN(day)) {
    throw new Error('Not a valid date');
  }
  return `${month} ${day < 10 ? `0${day}`: day} ${year}`
}

const returnGift = (dateString: string) => {
  const dateBought = new Date(dateString);
  if (dateBought.getMonth() === 11) {
    dateBought.setDate(dateBought.getDate() + 90)
    return formatShortDate(dateBought)
  }
  dateBought.setDate(dateBought.getDate() + 30)
  return formatShortDate(dateBought);

}

console.log(returnGift('Dec 25 2023'));
console.log(returnGift('Dec 1 2023'));
console.log(returnGift('Nov 25 2023'));
console.log(returnGift('Jan 25 2024'));
console.log(returnGift('not a valid date'));