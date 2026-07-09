// constuctor = singleton
// Object.create

// object literals
// keys is treated as string by browser

let sym1 = Symbol("12345")

const user = {
    name : "Ashir",
    [sym1] : "123",
    "full name" : "Ashir khan",
    age : 18,
    location : "karachi",
    email : "ashir@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday" , "Friday"]
}

// user.age = 21
// console.log(user);
// Object.freeze(user)
// user.age = 13
// console.log(user);

// console.log(typeof user.sym1); // type string not symbol
console.log(user[sym1]); // 123 

// ----------------------------------------
// 2 ways to access an element of object 
// ---------------------------------------

// 1) console.log(user.email); // ashir@google.com
// console.log(user[email]); // refrence error
// console.log(user[0]); // undefined
// 2) console.log(user["email"]); // ashir@google.com
// console.log(user["full name"]); //   Ashir khan