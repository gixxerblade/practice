const fibonacci = (num) => {
    if (num == 0) return 0; //Because Ben
    if (num == 1) return 1;
    else return fibonacci(num - 1) + fibonacci(num - 2);
  }
//console.log(fibonacci(81))

var fib = [0,1];
var i = 0;
var sum = 0;
while (fib[0]+fib[1] < 4000000){
    i= fib[0]+fib[1];
    fib[0]=fib[1];
    fib[1]=i;

        if(i%2 === 0){
        sum += i;
    }
}
console.log(sum);