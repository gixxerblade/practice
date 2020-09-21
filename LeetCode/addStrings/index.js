/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let longest
    let resultString = []
    let first = 0
    let lookup = {
        "0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9
    }
    if(num1.length > num2.length) {
        longest = num1
         let fillNum = longest - num2.length
         let fillArr = new Array(fillNum).fill("0")
         num2 = [...fillArr, ...num2.split("")].join("")
      }
    if(num2.length > num1.length) {
        longest = num2
          let fillNum = longest - num1.length
         let fillArr = new Array(fillNum).fill("0")
         num1= [...fillArr, ...num1.split("")].join("")
    }
    if(num1.length === num2.length) longest = num1
    for(let i= longest.length - 1; i >= 0; i--){
        let result = lookup[num2[i]] + lookup[num1[i]] + first
            let last = result % 10
            resultString.unshift(last)
            first = Math.floor(result/10)     
    }
    if(first !== 0) resultString.unshift("1")
    return resultString.join("")
};