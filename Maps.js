const prompt = require('prompt-sync')();
//1 Second maximum and second minimum without sorting 
var numArray = new Array();
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    numArray.push(num);
}
console.log(numArray);
let maxNum = 0;
let minNum = 1000;
let max2 = 0;
let min2 = 1000;
for (let element of numArray) {
    maxNum = Math.max(element, maxNum);
    minNum = Math.min(element, minNum);
}
for (let element of numArray) {
    max2 = (element < maxNum && element > max2) ? element : max2;
    min2 = (element > minNum && element < min2) ? element : min2;
}
console.log("2nd Maximum =" + max2);
console.log("2nd Minimum =" + min2);

//2 Second maximum and second minimum without sorting 
let sortedArray = new Array();
sortedArray = numArray.slice(0).sort();
console.log("2nd Maximum =" + sortedArray[numArray.length - 2]);
console.log("2nd Minimum =" + sortedArray[1]);

//3 Factorization
function primeNumberChecker(number) {
    if (number != 1) {
        for (let i = 2; i <= number; i++) {
            if (i == number) {
                return true;
            }
            if (number % i == 0) {
                return false;
            }
        }
    }
}

let primeFactorsArray = new Array();
let number = prompt("Enter the number :");
for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0 && primeNumberChecker(i)) {
        primeFactorsArray.push(i);
    }
}
console.log(primeFactorsArray);

//4 Sum should be zero
let numberArray = new Array();
let number1 = prompt("Enter the first number :");
let number2 = prompt("Enter the second number :");
let number3 = prompt("Enter the third number :");
numberArray.push(number1);
numberArray.push(number2);
numberArray.push(number3);
console.log(numberArray);
let sum = 0;
function findSum(sum, num) {
    sum += num;
    return sum;
}
numberArray.reduce(findSum, 0);
console.log("Sum is " + sum);

//5 Digits repeated twice
let start = prompt("Enter the first number :");
let end = prompt("Enter the last number :");
let numArray1 = new Array();
function isValidNumber(number) {
    return number % 10 == (Math.floor(number / 10) % 10) && number % 10 != 0;
}
for (num = start; num <= end; num++) {
    numArray1.push(num);
}
let filteredArray = numArray1.filter(isValidNumber);
console.log("Filtered array: " + filteredArray);
