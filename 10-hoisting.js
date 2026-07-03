// -----------------------------
// It is stored in global env
// -----------------------------

// console.log(num); // undefined
// var num = 10

// ----------------------------------------

// greet()
// function greet(){
//     console.log(`salam`); // salam
// }

// -----------------------------------------

// greet()
// var greet = function(){
    // console.log(`salam`); // TypeError: greet is not a function
// }

// --------------------------------------------
// It is stored in temporial deadzone (TDZ)
// ----------------------------------------------

// console.log(num); // ReferenceError: Cannot access 'num' before initialization
// let num = 5

// -------------------------------------------------

// console.log(num); // ReferenceError: Cannot access 'num' before initialization
// const num = 5

// -------------------------------------------------

// greet()
// const greet = function(){
//     console.log(`Salam`); // ReferenceError: Cannot access 'greet' before initialization
// }

// ----------------------------------------------

// console.log(a); // function body

// function a() {
//     console.log("Hello");
// }

// -------------------------------------------

// console.log(a); // undefined

// var a = function () {
//     console.log("Hello");
// };

// --------------------------------------

// console.log(a); // refrence error

// const a = function () {
//     console.log("Hello");
// };