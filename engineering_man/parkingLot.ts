const parkingLot = (plateNo: number[]) => {
  const len = plateNo.length
  return plateNo
  return plateNo.map((plate) => {
    console.log(len % plate)
    return plate % len
        
  })
}

console.log(parkingLot(15 10 5 25 20))
console.log(parkingLot(process.argv.slice(3)))
console.log(process.argv.slice(2))