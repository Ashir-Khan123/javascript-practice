// 27-jun-2026

// -----------------------------------------------------------------------------------------------------------------------

// ************************************* 1. VARIABLES  ********************

// var = function scope, allow Re-declaration
// let & const = blocked scope, don't allow Re-declaration

//--------------------------------------------------

// let can't declared again after once but can assign value
// -------------------------------------------------

// initilize means only assign 1st time value & assign value means after initialization
// ------------------------------------------

console.log(num1); // -------> RefrenceError (not defined)
// -----------------------------------------

console.log(typeof num1); // -------> undefined
// ------------------------------------------

let num2;
console.log(num2); // -------> undefined
// -------------------------------------------

let num = 100
let num = 200
console.log(num); // ---> SyntaxError: Identifier 'num' has already been declared
// ----------------------------------------------------------

let name = "ashir25" // declare and initialize value
name = "ashir"  // assign value
console.log(name); // ---------> ashir
// ---------------------------------------------------------

const a1 = 123
a1 = 23 // -----> Type Error
console.log(a1);
// ------------------------------------------------------------

const a;
console.log(a); // SyntaxError: Missing initializer in const declaration
// -------------------------------------------------------------