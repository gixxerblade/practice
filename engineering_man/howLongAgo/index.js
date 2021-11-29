const value1 = '2015-12-03,2013-12-03'

const howLongAgo = (dates) => {
  const [date1, date2] = dates.split(',')
  const total = Math.abs(Date.parse(date1) - Date.parse(date2))
  return Math.ceil(total / (1000 * 60 * 60 * 24)); 
}

console.log(howLongAgo(value1))