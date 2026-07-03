// -------------------------------------
// Function Declaration
// ---------------------------------

// function myName(){
//     console.log("A")
//     console.log("s")
//     console.log("h")
//     console.log("i")
//     console.log("r")
// }
// myName()

// --------------------

// function sum(num1, num2){
//     console.log(num1 + num2);
// }
// const result = sum(5,2)
// console.log(`Result : ${result}`);

// ---------------------------

// function sum(num1, num2){
//     return num1 + num2;
// }
// const result = sum(5,2)
// console.log(`Result : ${result}`);

// AFTER return in function, Code will not executed

// function logInUser(username = "abc"){
//     // if(username === undefined){
//     //     console.log('please enter a username');
//     // }
//     // OR
//     if(!username){
//         console.log('please enter a username');
//         return
//     }
//     return `${username} has logged in`
// }
// const result = logInUser()
// console.log(result); // undefined

// --------------------------------------------
//  2 / july / 2026
// ==========================================
// Rest operator
// function shoppingCart(...num1){
//     console.log(num1); // [220, 5300, 475]
// }
// shoppingCart(220, 5300, 475)

// ----------------------------------------

// const user = {
//     name: "Ashir",
//     price : 2000
// }

// function userData(anyObject){
//     console.log(`username is ${anyObject.name}, price is ${anyObject.price}`);
// }
// userData(user)

// ---------------------------------------

// const arr = [200, 450, 392, 910]

// function returnValue(getArr){
//     return getArr[1]
// }
// // console.log(returnArr(arr));
// console.log(returnValue([200, 100, 201]));

// -----------------------------------------------------

// function greeting(){
//     console.log("AOA! Ashir");
// }
// greeting()

// ---------------------------------

// function calculator(num1 , ope , num2){
//     if(ope == "+") return num1 + num2
//     if(ope == "-") return num1 - num2
//     if(ope == "*") return num1 * num2
//     if(ope == "/") return num1 / num2
// }
// // let result =  calculator(25 , "+" , 4)
// let result =  calculator(5 , "*" , 4)
// console.log(result);

// -------------------------------------

// function evenOdd(num){
//     if(!num) return "Invalid Input"
//     if(num % 2 == 0) return 'Even Number'
//     if(num % 2 != 0) return 'Odd Number'
// }
// console.log(evenOdd(52));

// -----------------------------------

// function factorial(num){
//     let fact = 1
//     for(let i = 1 ; i <= num ; i++){
//         fact *= i
//     }
//     return fact
// }
// console.log(factorial(5))

// ----------------------------------

// function largestOfTwoNumbers(num1 , num2){
//     if(num1 > num2) return `${num1} is largest`
//     if(num1 < num2) return `${num2} is largest`
// }
// console.log(largestOfTwoNumbers(6, 99));

// ----------------------------------

// function reverseValue(str){
//     let rev = "";
//     for(let i = 0 ; i < str.length ; i++){
//         rev += str[str.length - 1 - i]
//     }
//     return rev
// }
// console.log(reverseValue("2468"));

// ---------------------------------

// function palindrome(str) {
//   let rev = "";
//   for (let i = 0; i < str.length; i++) {
//     rev += str[str.length - 1 - i];
//   }
//   if (str == rev) {
//     console.log("Palindrome");
//   } 
//   else {
//     console.log("Not Palindrome");
//   }
// }
// palindrome("level")

// -------------------------------------
// Function Expression
// ---------------------------------

// const calculateSum = function (){
//     return 'Hello world'
// }
// console.log(calculateSum());

// -------------------------------------
// IIFE (Immediately Invoked Function Expression)
// ---------------------------------

// (function(){
//     console.log("Hi");
// })()

// -------------------------------------
// Arrow Function
// ---------------------------------

// const reminder = (num1 , ope , num2) => {
//     if(ope == "%") return num1 % num2
// }
// console.log(reminder(5 , "%" , 3));

// ---------------------------------------

// const multiple = (num1, num2) => num1 * num2
// const res = multiple(3,7)
// console.log(res);
 
// -------------------------------------

// const user = () => {name: "Ashir"} // undefined

// const user = () => ({name: "Ashir"}); // object should be return in parenthesis ()

// ---------------------------------------------------

// function hi(){
//     let myname = "Ashir"
//     console.log(myname); // undefined
// }
// hi()

// -----------------------------------------

// let hi = function(){
//     let myname = "Ashir"
//     console.log(this.myname); // undefined
// }
// hi()

// ----------------------------------------------

// let hi = () => {
//     let myname = "Ashir"
//     console.log(this); // undefined
// }
// hi()