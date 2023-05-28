const dayOfProgrammer = (year: number): string => {
  const isJulian = year < 1918 && year > 1699;
  const isGregorian = year > 1917;
  if (isJulian) {
    return 'julian'
  }
  if (isGregorian) {
    return 'gregorian'
  }
  return ''
}

console.log(dayOfProgrammer(1917))