// ************************************** 7. Loops **********************

// --------------------------------
// Assignment 1 (1 to 10)
// ---------------------------------

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }

// --------------------------------
// Assignment 2 (10 to 1)
// ---------------------------------

// for(let i = 10 ; i >= 1 ; i--){
//     console.log(i);
// }

// --------------------------------
// Assignment 3 (Even Numbers)
// ---------------------------------

// for(let i = 0 ; i <= 20 ; i++){
//     if(i % 2 == 0){
//         console.log("Even numbers" , i);
//     }
// }

// --------------------------------
// Assignment 4 (Odd Numbers)
// ---------------------------------

// for(let i = 0 ; i <= 20 ; i++){
//     if(i % 2 != 0){
//         console.log("Odd numbers" , i);
//     }
// }

// --------------------------------
// Assignment 5 (Table of 5)
// ---------------------------------

// let num = +prompt("Enter table number")
// for(let i = 1 ; i <= 10 ; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// -----------------------------------------------------

// for -------> known iterations
// while -----> Unknown iterations
// do while --> Must execute once

// ------------------------------------------------

// let i = 1;
// while (i <= 5) {
//     if(i == 3){
//         i++
//         continue
//     }
//   console.log(i);
//   i++;
// }

// -------------------------------------------------

// do {
//     console.log(i);
//     i++
// } while (i <= 5);

// --------------------------------
// Assignment 6 (sum of 1 to 10)
// ---------------------------------

// let sum = 0
// for(let i = 1 ; i <= 10 ; i++){
//     sum += i
// }
// console.log(sum); // 55

// --------------------------------
// Assignment 7 (sum of Even numbers)
// ---------------------------------

// let sum = 0
// for(let i = 0 ; i <= 20 ; i++){
//     if(i % 2 == 0){
//         sum += i
//     }
//     console.log(sum);
// }

// --------------------------------
// Assignment 8 (sum of Odd numbers)
// ---------------------------------

// let sum = 0
// for(let i = 0 ; i <= 20 ; i++){
//     if(i % 2 != 0){
//         sum += i
//     }
// }
// console.log(sum);

// --------------------------------
// Assignment 9 (Factorial)
// ---------------------------------

// let choice = +prompt("Enter a factorial number")
// let fact = 1
// for(let i = 1 ; i <= choice ; i++){
//     console.log(fact *= i);
// }

// --------------------------------
// Assignment 10 (Reverse table)
// ---------------------------------

// let num = +prompt("Enter table number")
// for(let i = 10 ; i >= 1 ; i--){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// --------------------------------------------
// 1-july-2026
// ---------------------------------------------

// --------------------------------
// Assignment 11 (Count digits)
// ---------------------------------

// let digit = prompt("Enter digits")
// let totalDigits = 0
// for(let i = 1 ; i <= digit.length ; i++){
//     totalDigits += 1
// }
// console.log(totalDigits);

// --------------------------------
// Assignment 12 (Reverse Number)
// ---------------------------------

// let num = "35891" // 65432
// let reverse = "";
// for(let i = 0 ; i < num.length ; i++){
//      reverse += num[num.length - 1 - i] 
// }
// console.log(reverse);


