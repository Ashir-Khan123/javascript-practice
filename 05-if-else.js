// ****************************************** 5. if / else_if / else **********************
// Actual Logic Building start

// -------------------------------
// Assignment 1 (Even / Odd)
// ------------------------------

// let num = +prompt("Enter a number")
// if(num % 2 == 0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");
// }

// --------------------------------
// Assignment 2 (positive / negative)
// ------------------------------

// let num = +prompt("Enter a number")
// if(num >= 0){
//     console.log("Positive number");
// }
// else{
//     console.log("Negative number");
// }

// --------------------------------
// Assignment 3 (Voting Eligibility)
// ------------------------------

// let age = +prompt("Enter age")
// if(age >= 18){
//     console.log("you are eligible for voting");
// }
// else{
//     console.log("you are not eligible for voting");
// }

// --------------------------------
// Assignment 4 (Pass / Fail)
// ------------------------------

// let marks = +prompt("Enter marks")
// if(marks >= 50){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

// --------------------------------
// Assignment 5 (Grade Calculator)
// ------------------------------

// let marks = +prompt("Enter marks")
// if(marks <= 100 && marks >= 80){
//     console.log("A-One Grade");
// }
// else if(marks < 80 && marks >= 70){
//     console.log("A Grade");
// }
// else if(marks < 70 && marks >= 60){
//     console.log("B Grade");
// }
// else if(marks < 60  && marks >= 50){
//     console.log("C Grade");
// }
// else{
//     console.log("fail");
// }

// --------------------------------
// Assignment 6 (Largest of 2 Numbers)
// ---------------------------------

// let num1 = +prompt("Enter 1st number ")
// let num2 = +prompt("Enter 2nd number ")

// if(num1 > num2){
//     console.log(`${num1} is large number`);
// }
// else{
//     console.log(`${num2} is large number`);
// }

// --------------------------------
// Assignment 7 (Largest of 3 Numbers)
// ---------------------------------

// let num1 = +prompt("Enter 1st number ")
// let num2 = +prompt("Enter 2nd number ")
// let num3 = +prompt("Enter 3rd number ")

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is large number`);
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} is large number`);
// }
// else if(num3 > num1 && num3 > num2){
//     console.log(`${num3} is large number`);
// }
// else{
//     console.log("Invalid Number");
// }

// --------------------------------
// Assignment 8 (Leap Year)
// ---------------------------------

// let year = +prompt("Enter year")
// if (year % 4 == 0) {
//   if (year % 100 != 0) {
//       console.log("Leap year");
//   }
//   else{
//     console.log("Not a Leap");
//   }
// }
// else {
//   console.log("Not a leap year");
// }

// --------------------------------
// Assignment 9 (Traffic signal)
// ---------------------------------

// let color = prompt("Enter a traffic signal colour (Red , yellow, green)")
// color = color.toLowerCase()
// if(color == "red"){
//     console.log("Stop");
// }
// else if(color == "yellow"){
//     console.log("Ready");
// }
// else if(color == "green"){
//     console.log("Go");
// }
// else{
//     console.log("Invalid color");
// }

// --------------------------------
// Assignment 10 (Electricity Bill)
// ---------------------------------

// let units = prompt("Enter units")
// if(units > 0 && units <= 100){
//     console.log(units * 22);
// }
// else if(units > 100 && units <= 200){
//     console.log(units * 35);
// }
// else{
//     console.log(units * 40);
// }

// --------------------------------
// Assignment 11 (Discount Calculator)
// ---------------------------------

// let totalAmount = +prompt("Enter total amount")
// if(totalAmount >= 3000 && totalAmount < 5000){
//     discount = 20 / 100 * totalAmount
//     totalAmount -= discount
//     console.log(`After 20% discount, your amount is now ${totalAmount}`);
// }
// else if(totalAmount >= 5000){
//     discount = 40 / 100 * totalAmount
//     totalAmount -= discount
//     console.log(`After 40% discount, your amount is now ${totalAmount}`);
// }
// else{
//     console.log(`No discount, your amount is ${totalAmount}`);
// }