// +++++++++++++++++++++++++++++++++++++++++++++ Object part 1 ++++++++++++++++++++++++++++++++++++++++++++++
// object includes key-value pair

// constuctor = singleton
//Object.create


// object literals
// keys is treated as string by browser

// let sym1 = Symbol("12345")

// const user = {
//     name : "Ashir",
//     // [sym1] : "123",
//     "full name" : "Ashir khan",
//     age : 18,
//     location : "karachi",
//     email : "ashir@google.com",
//     isLoggedIn : false,
//     lastLoggedIn : ["Monday" , "Friday"]
// }

// Add function 
// ------------------
// user.greeting = function(){
//     console.log(`Salam ${this["full name"]}`);
// }
// console.log(user.greeting());

// -------------------------------------

// // create/add
// user.nationality = "pakistani"

// read
// console.log(user);

// update
// user.email = "ashir@youtube.com"
// // console.log(user);

//delete 
// delete(user.location)
// console.log(user);

// --------------------------------------

// user.age = 21
// console.log(user);
// Object.freeze(user) //  only object is freeze not nested object (shallow copy) 
// user.age = 13
// console.log(user);

// console.log(typeof user.sym1); // type string not symbol
// console.log(user[sym1]); // 123 

// ----------------------------------------
// 2 ways to access an element of object 
// ---------------------------------------

// 1) console.log(user.email); // ashir@google.com
// console.log(user[email]); // refrence error
// console.log(user[0]); // undefined
// 2) console.log(user["email"]); // ashir@google.com
// console.log(user["full name"]); //   Ashir khan

// ++++++++++++++++++++++++++++++++++++++ Object part 2 +++++++++++++++++++++++++++++++++++

// const user = new Object() // {} ---------> Singleton object (object constructors)
// const userData = {} // ------------------> Non-singleton object (object literals)

// userData.id = 101
// userData.name = "Ahsan"
// userData.gender = "male"

// console.log(userData);
// -------------------------

// const arr1 = new Array()
// console.log(arr1); // []

// console.log(userData); // {}
// console.log(userData.name); // undefined

// -----------------------------------------

// const userDetail = {
//     age : 20,
//     fullname : {
//         employeeFullname : "sameer",
//         userFullname : {
//             firstName : "Ashir",
//             lastName : "Khan"
//         }
//     }
// }

// console.log(userDetail.fullname.userFullname.firstName);  // Ashir ---------------> (Dot Notation)
// console.log(userDetail["fullname"]["userFullname"]["firstName"]);  // Ashir ------> (Square Notation)

// ---------------------------------------------------------------

// const obj1 = {1: 'a' , 2 : 'b'}
// const obj2 = {3: 'c' , 4 : 'd'}

// // const obj3 = Object.assign({}, obj1 , obj2);
// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

// ------------------------------------------------------

// const ApiData = [
//     {
//         id : 1,
//         name : "Ashir"
//     },
//     {
//         id : 2,
//         name : "Haseeb",
//         fullname : {
//             firstname : "Abdul",
//             lastname : "Haseeb"
//         }
//     },
//     {
//         id : 3,
//         name : "Taha",
//         age : 10
//     },
//     {
//         id : 4,
//         name : "ghufran"
//     },
// ]

// console.log(`ID : ${ApiData[1].id} and Name : ${ApiData[1].name}`);
// console.log(Object.keys(ApiData[1])); // (2) ['id', 'name'] ---------> (output in array)
// console.log(Object.values(ApiData[1])); // (3) [2, 'Haseeb', {…}] ---------> (output in array)
// console.log(Object.entries(ApiData[1])); // Each key and value in array 

// ---------------------------------------------------------

// If asking about (Only keys)
// console.log(ApiData[1].hasOwnProperty('name')); // true
// console.log(ApiData[1].hasOwnProperty('Name')); // false
// console.log(ApiData[2].hasOwnProperty('age')); // true

// ------------------------------------------------------------

let employees = [
    {
        name: "Ali",
        salary: 45000
    },
    {
        name: "Ahmed",
        salary: 70000
    },
    {
        name: "Usman",
        salary: 90000
    },
    {
        name: "Hamza",
        salary: 55000
    }
];

let largest = []
for(let i = 0 ; i < employees.length ; i++){
    console.log(employees[i].salary); 
    
}
