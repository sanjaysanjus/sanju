//! 46. Find Average of given array

// var arr = [10, 20, 30];
// var sum = 0;
// var avg;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// avg = sum / arr.length;
// console.log(avg);

// //! 16. Program for Calculator

// const operator = prompt("Enter operator ( either +, -, * or / ): ");
// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// let result;
// if (operator == "+") {
//   result = number1 + number2;
// } else if (operator == "-") {
//   result = number1 - number2;
// } else if (operator == "*") {
//   result = number1 * number2;
// } else {
//   result = number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);

// ! 35. program to find the ASCII value of a character

// const string = prompt("Enter a character: ");
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result}`);

//! program to find the ASCII value of a character

// take input from the user
// const string = prompt('Enter a character: ');

// convert into ASCII value
// const result = string.codePointAt(0);

// console.log(`The ASCII value is: ${result}`);

// //! 13. Program to sort array in Ascending Order

// var array = [10, 98, 54, 23, 78, 45];
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

//! 1.Find Average of given array

// var arr = [40, 50, 60];
// var sum = 0;
// var avg;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// avg = sum / arr.length;
// console.log(avg);

//! 2. Program for Calculator

// const operator = prompt("Enter operator ( either +, -, * or / ): ");
// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// let result;
// if (operator == "+") {
//   result = number1 + number2;
// } else if (operator == "-") {
//   result = number1 - number2;
// } else if (operator == "*") {
//   result = number1 * number2;
// } else {
//   result = number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);

// ! 3. program to find the ASCII value of a character

// const string = prompt("Enter a character: ");
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result}`);

//! 4. Program to sort array in Ascending Order

var array = [10, 98, 54, 23, 78, 45];
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);