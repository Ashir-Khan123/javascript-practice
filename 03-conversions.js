// 29-june-2026

// ****************************************** 3. part (1) Type Conversion (manual change) **********************

// """ string to number """"
// ---------------------------------------------------------------
// let str = "101"
// console.log(Number(str)); // 101
// console.log(typeof Number(str)); // number
// ------------------------------
// """ string to NaN """
// let score = "32abc"
// console.log(Number(score)); // NaN (Not a Number)
// console.log(typeof score); // string
// console.log(typeof Number(score)); // number
// // ---------------------------
// console.log(typeof NaN); // number
// ----------------------------
// """ null into number """
// console.log(Number(null)); // 0
// ------------------------------
// """ undefined into number """
// console.log(Number(undefined)); // NaN
// ------------------------------
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// ---------------------------------------------------------------
// """ number to string """
// ---------------------------------------------------------------
// let age = 26
// console.log(typeof age); // number
// console.log(typeof age.toString); // function because () is not include
// console.log(typeof age.toString()); // string
// console.log(String(22)); // 22 (type : string)
// console.log(String(true)); // true (type : string)
// console.log(String(null)); // null (type : string)

// ===========================================================
//  There are commonly 8 falsey values in JavaScript:
//  undefined , null , NaN , 0 , -0, 0n, [ "" (empty string)] , and false
// =============================================================
// console.log(Boolean(0)); // false
// console.log(Boolean("0")); // true

// ****************************************** 3. part (2) Type Coercion (automatic change) **********************

// concatenation
// console.log("5" + 1); // 51
// console.log("5" - 2); // 3
// console.log(1 + "4"); // 14
// console.log("5" + "8"); // 58
// console.log(7 + 2); // 9
// console.log(true+1) //  2
// console.log(false+1) // 1