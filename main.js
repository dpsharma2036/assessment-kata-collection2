console.log("My-kata-Collection2");

//0 kata
console.log("add+++====++++");

function add(a,b) {
    let result = a + b;
    return result;
    return a + b;
}

console.log( add(2,4) );

// 1 kata
console.log("multiply+++++====");

function multiply(x, y) {
  let result = 0;
  let count= 0;
  while (count<y) {
      result=add (x,result)
      count = count +1;
  }
  return result;
}
console.log(multiply(6,4));

//2 kata
console.log("exponenetial====+++++++");

function power(x,n) {
  let result = 1;
  let count =0;
  while (count<n){
      result = multiply (x,result)
      count = count +1;
  }
  return result;
}
console.log(power(2,8));
console.log(power(3,4));

// 3 kata
console.log("factorial+++++====+++");

function factorial (x){
  let result = 1;
  let count = 0;
  while (count<x) {
      result = multiply(x-count,result)
      count = count +1;
  }
  return result;
}
console.log(factorial(5));

// 4 kata

/*console.log("fibonacci");

 function fibonacci(result ,len) {

 let  num1 = result[0],
  num2= result[1],
  next,
  count = 2;

  while (count< len) {

    next = num1 + num2;
    num1 = num2;
    num2 = next;
    result.push(next);
    count = count +1;
  }
  return result;
}

 console.log (fibonacci(8));
*/

// Kata 5
console.log("fibonnacci");

function fibonacci(n){
  if(n ==1) {
    return 0
  }
  if(n == 2){
    return 1
  }else{
    return fibonacci(n-2) + fibonacci(n-1)
  }
}

console.log(fibonacci(8));