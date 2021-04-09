const findEvenOrOdd = (num: number): string => {
    const sum: number = num.toString().split('').reduce((a, b) => Number(a) + Number(b), 0)
    return sum % 2 === 0 ? 'even' : 'odd'
}

console.log(findEvenOrOdd(622653))
