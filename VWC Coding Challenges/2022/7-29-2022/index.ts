const dayTillChristmas = (): string => {
  const today = new Date()
  const christmas = new Date('12-25-2022')
  const day = 1000 * 60**2 * 24
  return `${Math.ceil(
    (christmas.getTime() - today.getTime()) / day
  )} till Christmas 🎄🎅🏻`
}

console.log(dayTillChristmas());
