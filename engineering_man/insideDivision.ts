const insideDivision = (i: number) => {
  const ar = i.toString().split('')
  for (let x = 0; x < ar.length; x++) {
    const n = Number(ar.slice(x, x + 3).join(''))
    if (i % n === 0) {
      return n
    }
  }
}

const id=i=>{const n = i;while(i){let t=i%1000;if(n%t===0){return t};i = Math.floor(i / 10)};};
console.log(insideDivision(11224))
console.log(id(11224))