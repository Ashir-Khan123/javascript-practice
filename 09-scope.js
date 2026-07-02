// global scope
// ================================
// var c = 45
// // const b // suntax error (Missing initializer in const declaration)
// const b = 200
// let a = 120

//if (true) { // -----> Block scope
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log(`Inner ${b}`); // 20
//   console.log(`Inner ${a}`); // 10
// }

// console.log(b); // 200
// console.log(c); // 30 because var function scope
// console.log(a); // 120

// ==============================
// console and node ---> global scope is different  

// ========================================

// let x = 100;

// function test() {
//     let x = 50;
//     console.log(x); // 50
// }

// test();

// console.log(x); // 100

// ======================================

// let name = "Ashir";

// function greet() {
//     console.log(name); // Ashir 
// }

// greet();

// --------------------------------------

// function one() {
//   let firstname = "Ashir";

//   function two() {
//     let lastname = "khan";
//     console.log(firstname); 
//   }
// //   console.log(lastname); 
// two();
// }
// one();

// ---------------------------------------------------

// if(true){
//     let myName = "Ashir"
//     if(myName == "Ashir"){
//         let lastname = "Khan"
//         console.log(`${myName} ${lastname}`);
//     }
//     // console.log(lastname);
// }
// console.log(myName);

