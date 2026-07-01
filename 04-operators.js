// ****************************************** 4. Operators **********************

// (1) Airthmetic Operator
// ---------------------------------------------------------------

// console.log(4 + 3); // 7
// console.log(4 - 3); // 1
// console.log(4 * 3); // 12
// console.log(4 / 3); // 1.333
// console.log(4 % 3); // 1
// console.log(4 ** 3); // 64
// ------------------------------------------------------------

// (2) Assignment Operator
// ---------------------------------------------------------------

// let a = 2
// console.log(a += 3); // 5
// console.log(a -= 3); // 2
// console.log(a *= 3); // 6
// console.log(a /= 3); // 2
// console.log(a %= 3); // 2 ----> 2 % 3 = 2
// console.log(a **= 3); // 8

// (3) Comparison Operator
// ---------------------------------------------------------------

// return (true / false) in output
// (==) -------> same value check
// (===) -------> same value + Data type check

// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(5 != "5"); // false
// console.log(5 !== "5"); // true
// console.log(5 > "5"); // false
// console.log(5 >= "5"); // true
// console.log(5 < "7"); // true
// console.log(5 <= "4"); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// (4) Unary Operator
// ---------------------------------------------------------------

// ++
// --

// prefix
// --------------------
// let num = 7
// ++num
// console.log(--num); // 7
// --num
// console.log(num); // 6

// postfix
// -------------------------
// let num = 2
// num++
// console.log(num); // --> 3
// console.log(num++); // --> 3

// (5) Logical Operator
// ---------------------------------------------------------------

// && ---> and (both cond should be true)
// || ---> or (only one cond can be true)
// ! ----> not

// console.log(8 > 5 && 3 < 1); // false
// console.log(6 > 5 && 3 > 1); // true
// console.log(6 > 5 || 3 > 5); // true
// console.log(3 > 5 || 3 > 5); // false
// console.log(6 > 5 | 3 > 5); // 1 (true) in number
// console.log(!true); // false
// console.log(!false); // true

// (6) Ternary Operator
// ---------------------------------------------------------------

// shortcut of if/else
// condition ? true : false

// let age = prompt("Enter your age")
// let msg;
// age >= 18 ? msg = "allowed" : msg = "not allowed"
// console.log(msg); // allowed