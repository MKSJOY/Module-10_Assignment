function calculateSum(a, b){
    return a + b;
  }
  
function isEven(num){
    return num % 2 === 0;
  }
  
function findMax(arr){
    return Math.max(...arr);
  }
  
function reverseString(str){
    return str.split('').reverse().join('');
  }
  
function filterOddNumbers(arr){
    return arr.filter(num => num % 2 !== 0);
  }
  
function sumArray(arr){
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
function sortArray(arr){
    return [...arr].sort((a, b) => a - b);
  }
  
function capitalizeFirstLetter(str){
    if (str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
  }
  
console.log(calculateSum(2, 3));
console.log(isEven(10));
console.log(findMax([109, 200, 633, 54, 995]));
console.log(reverseString("Assignment"));
console.log(filterOddNumbers([13, 22, 31, 73, 98]));
console.log(sumArray([10, 5, 2, 1, 12]));
console.log(sortArray([9, 1, 7, 2, 4]));
console.log(capitalizeFirstLetter("hello"));

  