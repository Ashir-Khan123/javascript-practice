// +++++++++++++++++++++++++++++++++++++++++++++ Object part 1 ++++++++++++++++++++++++++++++++++++++++++++++

// constuctor = singleton
// Object.create

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
// Object.freeze(user)
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

