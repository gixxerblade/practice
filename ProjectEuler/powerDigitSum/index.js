
let powerDigitSum = () =>{
    let power = BigInt(Math.pow(2, 1000))
    let arr = power.toString().split("")
    let newArr = Array.from(arr)
    return newArr.map(Number).reduce((a,b)=>a+b)
}
console.log(powerDigitSum());