
//****Task 1 ****
const reverse = (str) => {
   let reversedStr = "";
   for (let i = str.length - 1; i >= 0; i--) {
     reversedStr += str.charAt(i);
   }
   console.log(reversedStr);
 }
 
 reverse("hellow");
 
 
 
 // *****Task 2 ****
 const positiveSum = (arr) => {
   let sum = 0;
   for (let num of arr) {
     if (num > 0) {
       sum += num;
     }
   }
   return sum;
 }
 
 const numbers = [2, -5, 10, -3, 7];
 const result = positiveSum(numbers);
 console.log(result);
 
 
 
 //  ***** Task 3 ****
 const frequent = (arr) => {
   let frequentNumber = {}
   let mostFrequent
   let count = 0
   for (let num of arr) {
 
     if (frequentNumber[num]) {
       frequentNumber[num]++
     }
     else {
       frequentNumber[num] = 1
     }
 
   }
   for (let frequent in frequentNumber) {
     if (frequentNumber[frequent] > count) {
       count = frequentNumber[frequent]
       mostFrequent = frequent
 
     }
   }
 
   return mostFrequent
 }
 const frequentResult = frequent([3, 5, 2, 5, 3, 3, 1, 4, 5, 3])
 console.log(frequentResult)
 
 
 
 
 //Task-4 ****
 const findTwoNumbersWithSum = (arr, target) => {
   const map = new Map();
 
   for (let i = 0; i < arr.length; i++) {
     const complement = target - arr[i];
     if (map.has(complement)) {
       return [map.get(complement), i];
     }
     map.set(arr[i], i);
   }
   return null;
 }
 
 const sumResults = findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9);
 console.log(sumResults);
 
 
 // Task-5****
 const calculator = (num1, operator, num2) => {
   if (operator === '+') {
     return num1 + num2;
   } else if (operator === '-') {
     return num1 - num2;
   } else if (operator === '*') {
     return num1 * num2;
   } else if (operator === '/') {
     if (num2 === 0 || num1 === 0) {
       return ("you can't Division a number by zero !!");
     }
     return num1 / num2;
   }
   else {
     return ("Invalid operator ")
   }
 }
 
 
 const Sum = calculator(2,"/",5 )
 console.log(Sum)
 
 
 //Task-6 *****
 
 const  Password = (length) =>{
   const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
   const numbers = '0123456789';
   const specialCharacters = '@#$%&';
 
   const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
 
   let password = '';
   for (let i = 0; i < length; i++) {
     const Index = Math.floor(Math.random() * allChars.length);
     password += allChars[Index];
   }
 
   return password;
 }
 
 ;
 const randomPassword = Password(10);
 console.log(randomPassword);
 
 //Task - 8 ***
 
 const fiindSecondSmallest=(arr)=> {
   if (arr.length < 2) {
  return("Array should have at last two elements.");
   }
 
   let smallest = arr[0];
   let secondSmallest = arr[1];
 
   if (secondSmallest < smallest) {
     [smallest, secondSmallest] = [secondSmallest, smallest];
   }
 
   for (let i = 2; i < arr.length; i++) {
     if (arr[i] < smallest) {
       secondSmallest = smallest;
       smallest = arr[i];
     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
       secondSmallest = arr[i];
     }
   }
 
 
 
   return secondSmallest;
 }
 
 
 const resultsss = fiindSecondSmallest ( [3, 5, 2, 5, 3, 1, 4]);
 console.log(resultsss); 
 
 